const ClubModel = require("../models/club.model");

// get all club list
exports.getClubList = (req, res) => {
  ClubModel.getAllClubs(req.params.tournament_id, (err, clubs) => {
    if (err) res.send(err);
    res.send(clubs);
  });
};

// get club by ID
exports.getClubByID = (req, res) => {
  ClubModel.getClubByID(req.params.id, (err, club) => {
    if (err) res.send(err);
    res.send(club);
  });
};

// create new club
exports.createNewClub = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const clubReqData = new ClubModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    ClubModel.createClub(clubReqData, (err, club) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Club Created Successfully",
        data: club.insertId,
      });
    });
  }
};

// update club
exports.updateClub = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const clubReqData = new ClubModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    ClubModel.updateClub(req.params.id, clubReqData, (err, club) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Club updated Successfully" });
    });
  }
};

// delete club
exports.deleteClub = (req, res) => {
  ClubModel.deleteClub(req.params.id, (err, club) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Club deleted successully!" });
  });
};
