const CompetitorModel = require("../models/competitor.model");

// get all competitor list
exports.getCompetitorList = (req, res) => {
  CompetitorModel.getAllCompetitors(req.params.tournament_id, (err, competitors) => {
    if (err) res.send(err);
    res.send(competitors);
  });
};

// get competitor by ID
exports.getCompetitorByID = (req, res) => {
  CompetitorModel.getCompetitorByID(req.params.id, (err, competitor) => {
    if (err) res.send(err);
    res.send(competitor);
  });
};

// create new competitor
exports.createNewCompetitor = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const competitorReqData = new CompetitorModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    CompetitorModel.createCompetitor(competitorReqData, (err, competitor) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Competitor Created Successfully",
        data: competitor.insertId,
      });
    });
  }
};

// update competitor
exports.updateCompetitor = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const competitorReqData = new CompetitorModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    CompetitorModel.updateCompetitor(req.params.id, competitorReqData, (err, competitor) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Competitor updated Successfully" });
    });
  }
};

// delete competitor
exports.deleteCompetitor = (req, res) => {
  CompetitorModel.deleteCompetitor(req.params.id, (err, competitor) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Competitor deleted successully!" });
  });
};
