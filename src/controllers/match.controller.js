const MatchModel = require("../models/match.model");

// get match list
exports.getMatchList = (req, res) => {
  MatchModel.getMatches(req.params.tournament_id, req.query, (err, matches) => {
    if (err) res.send(err);
    res.send(matches);
  });
};

// get match by ID
exports.getMatchByID = (req, res) => {
  MatchModel.getMatchByID(req.params.id, (err, match) => {
    if (err) res.send(err);
    res.send(match);
  });
};

// update match
exports.updateMatch = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const matchReqData = new MatchModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    MatchModel.updateMatch(req.params.id, request, (err, match) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Match updated Successfully" });
    });
  }
};

// update match timer
exports.updateMatchTimer = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const matchReqData = new MatchModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    MatchModel.updateMatchTimer(req.params.id, matchReqData, (err, match) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Match updated Successfully" });
    });
  }
};

// update match point
exports.updateMatchPoint = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const matchReqData = new MatchModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    MatchModel.updateMatchPoint(req.params.id, matchReqData, (err, match) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Match updated Successfully" });
    });
  }
};

// delete match
exports.deleteMatch = (req, res) => {
  MatchModel.deleteMatch(req.params.id, (err, match) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Match deleted successully!" });
  });
};
