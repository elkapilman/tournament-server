const RefereeModel = require("../models/referee.model");

// get all referee list
exports.getRefereeList = (req, res) => {
  RefereeModel.getAllReferees(req.params.tournament_id, (err, referees) => {
    if (err) res.send(err);
    res.send(referees);
  });
};

// get referee by ID
exports.getRefereeByID = (req, res) => {
  RefereeModel.getRefereeByID(req.params.id, (err, referee) => {
    if (err) res.send(err);
    res.send(referee);
  });
};

// create new referee
exports.createNewReferee = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const refereeReqData = new RefereeModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    RefereeModel.createReferee(refereeReqData, (err, referee) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Referee Created Successfully",
        data: referee.insertId,
      });
    });
  }
};

// update referee
exports.updateReferee = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const refereeReqData = new RefereeModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    RefereeModel.updateReferee(req.params.id, refereeReqData, (err, referee) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Referee updated Successfully" });
    });
  }
};

// delete referee
exports.deleteReferee = (req, res) => {
  RefereeModel.deleteReferee(req.params.id, (err, referee) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Referee deleted successully!" });
  });
};
