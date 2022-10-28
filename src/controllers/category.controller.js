const CategoryModel = require("../models/category.model");
const CompetitorModel = require("../models/competitor.model");
const MatchModel = require("../models/match.model");
const DrawModel = require("../models/draw.model");
const MatchController = require("../controllers/match.controller");
const Draw = require("../models/draw.model");

// get category list
exports.getCategoryList = (req, res) => {
  CategoryModel.getCategories(
    req.params.tournament_id,
    req.query,
    (err, categories) => {
      if (err) res.send(err);
      res.send(categories);
    }
  );
};

// get category by ID
exports.getCategoryByID = (req, res) => {
  CategoryModel.getCategoryByID(req.params.id, (err, category) => {
    if (err) res.send(err);
    res.send(category);
  });
};

// create new category
exports.createNewCategory = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const categoryReqData = new CategoryModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    CategoryModel.createCategory(categoryReqData, (err, category) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Category Created Successfully",
        data: category.insertId,
      });
    });
  }
};

// update category
exports.updateCategory = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const categoryReqData = new CategoryModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    CategoryModel.updateCategory(
      req.params.id,
      categoryReqData,
      (err, category) => {
        if (err) res.send(err);
        res.json({ status: true, message: "Category updated Successfully" });
      }
    );
  }
};

// delete category
exports.deleteCategory = (req, res) => {
  CategoryModel.deleteCategory(req.params.id, (err, category) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Category deleted successully!" });
  });
};

// draw category
exports.drawCategory = (req, res) => {
  const drawRequest = {
    system: req.body.system,
    tournament_id: req.params.tournament_id,
    category_id: req.params.id,
  };
  const drawReqData = new DrawModel(drawRequest);
  DrawModel.createDraw(drawReqData, (errDraw, draw) => {
    if (errDraw) res.send(errDraw);
    const categoryReqData = {
      draw_id: draw.insertId,
    };
    CategoryModel.updateCategory(
      req.params.id,
      categoryReqData,
      (err, category) => {
        if (err) res.send(err);
        const matchRequest = req.body.matches.map((match, index) => {
          console.log();
          return {
            ...match,
            draw_id: draw.insertId,
            order_id: `${draw.insertId}.${index + 1}`,
          };
        });
        MatchModel.createMatches(matchRequest, (errMatch, match) => {
          if (errMatch) {
            res.send(errMatch);
          } else {
            res.json({
              status: true,
              message: "Match Created Successfully",
              data: match.insertId,
            });
          }
        });
      }
    );
  });
};

// To be deleted??
exports.drawCategoryByAPI = (req, res) => {
  const draw = (data) => {
    const result = [];
    for (let i = 0; i < data.length; i += 1) {
      for (let j = i + 1; j < data.length; j += 1) {
        result.push({
          tournament_id: req.params.tournament_id,
          category_id: req.params.id,
          competitor1_id: data[i].id,
          competitor2_id: data[j].id,
        });
      }
    }
    return result;
  };

  CompetitorModel.getCompetitorByCategory(req.params.id, (err, competitor) => {
    if (err) res.send(err);
    console.log("banyak", competitor.length);
    if (competitor.length < 2)
      res.status(400).send({ success: false, message: "Minimum 2 Competitor" });
    // console.log(competitor);
    const request = draw(competitor);
    MatchModel.createMatches(request, (errMatch, match) => {
      if (errMatch) {
        res.send(errMatch);
      } else {
        res.json({
          status: true,
          message: "Match Created Successfully",
          data: match.insertId,
        });
      }
    });
    // res.send(competitor);
  });
};

// reset match category
exports.resetMatchCategory = (req, res) => {
  const categoryReqData = {
    draw_id: 0,
  };
  CategoryModel.updateCategory(
    req.params.id,
    categoryReqData,
    (err, category) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Match category reset Successfully" });
    }
  );
};
