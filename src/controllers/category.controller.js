const CategoryModel = require("../models/category.model");

// get all category list
exports.getCategoryList = (req, res) => {
  CategoryModel.getAllCategorys(req.params.tournament_id, (err, categories) => {
    if (err) res.send(err);
    res.send(categories);
  });
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
    CategoryModel.updateCategory(req.params.id, categoryReqData, (err, category) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Category updated Successfully" });
    });
  }
};

// delete category
exports.deleteCategory = (req, res) => {
  CategoryModel.deleteCategory(req.params.id, (err, category) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Category deleted successully!" });
  });
};
