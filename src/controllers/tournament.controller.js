const TournamentModel = require("../models/tournament.model");

// get all tournament list
exports.getTournamentList = (req, res) => {
  TournamentModel.getAllTournaments((err, tournaments) => {
    if (err) res.send(err);
    res.send(tournaments);
  });
};

// get tournament by ID
exports.getTournamentByID = (req, res) => {
  TournamentModel.getTournamentByID(req.params.id, (err, tournament) => {
    if (err) res.send(err);
    res.send(tournament);
  });
};

// create new tournament
exports.createNewTournament = (req, res) => {
  const tournamentReqData = new TournamentModel(req.body);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    TournamentModel.createTournament(tournamentReqData, (err, tournament) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Tournament Created Successfully",
        data: tournament.insertId,
      });
    });
  }
};

// update tournament
exports.updateTournament = (req, res) => {
  const tournamentReqData = new TournamentModel(req.body);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    TournamentModel.updateTournament(
      req.params.id,
      tournamentReqData,
      (err, tournament) => {
        if (err) res.send(err);
        res.json({ status: true, message: "Tournament updated Successfully" });
      }
    );
  }
};

// delete tournament
exports.deleteTournament = (req, res) => {
  TournamentModel.deleteTournament(req.params.id, (err, tournament) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Tournament deleted successully!" });
  });
};
