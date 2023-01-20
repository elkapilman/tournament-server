const dbConn = require("../../config/db.config");

const Club = function (club) {
  this.tournament_id = club.tournament_id;
  this.name = club.name;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all clubs
Club.getAllClubs = (tournament_id, result) => {
  dbConn.query("SELECT * FROM clubs WHERE is_deleted=0 AND tournament_id=?", tournament_id, (err, res) => {
    if (err) {
      console.log("Error while fetching clubs", err);
      result(null, err);
    } else {
      console.log("Clubs fetched successfully");
      result(null, res);
    }
  });
};

// get club by ID from DB
Club.getClubByID = (id, result) => {
  dbConn.query("SELECT * FROM clubs WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching club by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new club
Club.createClub = (clubReqData, result) => {
  dbConn.query("INSERT INTO clubs SET ? ", clubReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Club created successfully");
      result(null, res);
    }
  });
};

// update club
Club.updateClub = (id, clubReqData, result) => {
  dbConn.query(
    "UPDATE clubs SET name=? WHERE id = ?",
    [clubReqData.name, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the club");
        result(null, err);
      } else {
        console.log("Club updated successfully");
        result(null, res);
      }
    }
  );
};

// delete club
Club.deleteClub = (id, result) => {
  // dbConn.query('DELETE FROM clubs WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the club');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query(
    "UPDATE clubs SET is_deleted=? WHERE id = ?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the club");
        result(null, err);
      } else {
        console.log("Club deleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Club;
