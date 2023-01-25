const dbConn = require("../../config/db.config");

const Referee = function (referee) {
  this.tournament_id = referee.tournament_id;
  this.name = referee.name;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all referees
Referee.getAllReferees = (tournament_id, result) => {
  dbConn.query("SELECT * FROM referees WHERE is_deleted=0 AND tournament_id=?", tournament_id, (err, res) => {
    if (err) {
      console.log("Error while fetching referees", err);
      result(null, err);
    } else {
      console.log("Referees fetched successfully");
      result(null, res);
    }
  });
};

// get referee by ID from DB
Referee.getRefereeByID = (id, result) => {
  dbConn.query("SELECT * FROM referees WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching referee by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new referee
Referee.createReferee = (refereeReqData, result) => {
  dbConn.query("INSERT INTO referees SET ? ", refereeReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Referee created successfully");
      result(null, res);
    }
  });
};

// update referee
Referee.updateReferee = (id, refereeReqData, result) => {
  dbConn.query(
    "UPDATE referees SET name=? WHERE id = ?",
    [refereeReqData.name, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the referee");
        result(null, err);
      } else {
        console.log("Referee updated successfully");
        result(null, res);
      }
    }
  );
};

// delete referee
Referee.deleteReferee = (id, result) => {
  // dbConn.query('DELETE FROM referees WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the referee');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query(
    "UPDATE referees SET is_deleted=? WHERE id = ?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the referee");
        result(null, err);
      } else {
        console.log("Referee deleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Referee;
