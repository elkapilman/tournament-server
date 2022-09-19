const TatamiModel = require("../models/tatami.model");

// get all tatami list
exports.getTatamiList = (req, res) => {
  TatamiModel.getAllTatamis(req.params.tournament_id, (err, tatamis) => {
    if (err) res.send(err);
    res.send(tatamis);
  });
};

// get tatami by ID
exports.getTatamiByID = (req, res) => {
  TatamiModel.getTatamiByID(req.params.id, (err, tatami) => {
    if (err) res.send(err);
    res.send(tatami);
  });
};

// create new tatami
exports.createNewTatami = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const tatamiReqData = new TatamiModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    TatamiModel.createTatami(tatamiReqData, (err, tatami) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Tatami Created Successfully",
        data: tatami.insertId,
      });
    });
  }
};

// update tatami
exports.updateTatami = (req, res) => {
  const request = {
    ...req.body,
    tournament_id: req.params.tournament_id,
  };
  const tatamiReqData = new TatamiModel(request);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    TatamiModel.updateTatami(req.params.id, tatamiReqData, (err, tatami) => {
      if (err) res.send(err);
      res.json({ status: true, message: "Tatami updated Successfully" });
    });
  }
};

// delete tatami
exports.deleteTatami = (req, res) => {
  TatamiModel.deleteTatami(req.params.id, (err, tatami) => {
    if (err) res.send(err);
    res.json({ success: true, message: "Tatami deleted successully!" });
  });
};
