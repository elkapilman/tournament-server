const dbConn = require("../../config/db.config");

const Competitor = function (competitor) {
  this.tournament_id = competitor.tournament_id;
  this.name = competitor.name;
  this.category_id = competitor.category_id;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all competitors
Competitor.getAllCompetitors = (tournament_id, result) => {
  dbConn.query(
    `SELECT competitors.id, competitors.name, competitors.category_id, categories.name AS category, competitors.created_at, competitors.updated_at 
    FROM competitors
    LEFT JOIN categories
    ON competitors.category_id = categories.id
    WHERE competitors.is_deleted=0 AND categories.is_deleted=0 AND competitors.tournament_id=?`,
    tournament_id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching competitors", err);
        result(null, err);
      } else {
        console.log("Competitors fetched successfully");
        result(null, res);
      }
    }
  );
};

// get competitor by ID from DB
Competitor.getCompetitorByID = (id, result) => {
  dbConn.query("SELECT * FROM competitors WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching competitor by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new competitor
Competitor.createCompetitor = (competitorReqData, result) => {
  dbConn.query("INSERT INTO competitors SET ? ", competitorReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Competitor created successfully");
      result(null, res);
    }
  });
};

// update competitor
Competitor.updateCompetitor = (id, competitorReqData, result) => {
  const { name, category_id } = competitorReqData;
  dbConn.query(
    "UPDATE competitors SET name=?,category_id=? WHERE id = ?",
    [name, category_id, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the competitor");
        result(null, err);
      } else {
        console.log("Competitor updated successfully");
        result(null, res);
      }
    }
  );
};

// delete competitor
Competitor.deleteCompetitor = (id, result) => {
  // dbConn.query('DELETE FROM competitors WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the competitor');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query(
    "UPDATE competitors SET is_deleted=? WHERE id = ?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the competitor");
        result(null, err);
      } else {
        console.log("Competitor deleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Competitor;
