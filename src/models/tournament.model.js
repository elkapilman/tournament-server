const dbConn = require("../../config/db.config");

const Tournament = function (tournament) {
  this.name = tournament.name;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all tournaments
Tournament.getAllTournaments = (result) => {
  dbConn.query("SELECT * FROM tournaments WHERE is_deleted=0", (err, res) => {
    if (err) {
      console.log("Error while fetching tournaments", err);
      result(null, err);
    } else {
      console.log("Tournaments fetched successfully");
      result(null, res);
    }
  });
};

// get tournament by ID from DB
Tournament.getTournamentByID = (id, result) => {
  dbConn.query("SELECT * FROM tournaments WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching tournament by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new tournament
Tournament.createTournament = (tournamentReqData, result) => {
  dbConn.query(
    "INSERT INTO tournaments SET ? ",
    tournamentReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data");
        result(null, err);
      } else {
        console.log("Tournament created successfully");
        result(null, res);
      }
    }
  );
};

// update tournament
Tournament.updateTournament = (id, tournamentReqData, result) => {
  dbConn.query(
    "UPDATE tournaments SET name=? WHERE id = ?",
    [tournamentReqData.name, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the tournament");
        result(null, err);
      } else {
        console.log("Tournament updated successfully");
        result(null, res);
      }
    }
  );
};

// delete tournament
Tournament.deleteTournament = (id, result) => {
  // dbConn.query('DELETE FROM tournaments WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the tournament');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query(
    "UPDATE tournaments SET is_deleted=? WHERE id = ?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the tournament");
        result(null, err);
      } else {
        console.log("Tournament deleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Tournament;
