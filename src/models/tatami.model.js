const dbConn = require("../../config/db.config");

const Tatami = function (tatami) {
  this.tournament_id = tatami.tournament_id;
  this.name = tatami.name;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all tatamis
Tatami.getAllTatamis = (tournament_id, result) => {
  dbConn.query("SELECT * FROM tatamis WHERE is_deleted=0 AND tournament_id=?", tournament_id, (err, res) => {
    if (err) {
      console.log("Error while fetching tatamis", err);
      result(null, err);
    } else {
      console.log("Tatamis fetched successfully");
      result(null, res);
    }
  });
};

// get tatami by ID from DB
Tatami.getTatamiByID = (id, result) => {
  dbConn.query("SELECT * FROM tatamis WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching tatami by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new tatami
Tatami.createTatami = (tatamiReqData, result) => {
  dbConn.query("INSERT INTO tatamis SET ? ", tatamiReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Tatami created successfully");
      result(null, res);
    }
  });
};

// update tatami
Tatami.updateTatami = (id, tatamiReqData, result) => {
  dbConn.query(
    "UPDATE tatamis SET name=? WHERE id = ?",
    [tatamiReqData.name, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the tatami");
        result(null, err);
      } else {
        console.log("Tatami updated successfully");
        result(null, res);
      }
    }
  );
};

// delete tatami
Tatami.deleteTatami = (id, result) => {
  // dbConn.query('DELETE FROM tatamis WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the tatami');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query(
    "UPDATE tatamis SET is_deleted=? WHERE id = ?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the tatami");
        result(null, err);
      } else {
        console.log("Tatami deleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Tatami;
