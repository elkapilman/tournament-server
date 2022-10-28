const dbConn = require("../../config/db.config");

const Draw = function (draw) {
  this.tournament_id = draw.tournament_id;
  this.category_id = draw.category_id;
  this.system = draw.system;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// create new draw
Draw.createDraw = (drawReqData, result) => {
  dbConn.query("INSERT INTO draw SET ? ", drawReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Draw created successfully");
      result(null, res);
    }
  });
};

module.exports = Draw;
