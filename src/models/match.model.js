const dbConn = require("../../config/db.config");

const Match = function (match) {
  this.tournament_id = match.tournament_id;
  this.draw_id = match.draw_id;
  this.competitor1_id = match.competitor1_id;
  this.competitor2_id = match.competitor2_id;
  this.competitor1_point = match.competitor1_point;
  this.competitor2_point = match.competitor2_point;
  this.competitor1_foul = match.competitor1_foul;
  this.competitor2_foul = match.competitor2_foul;
  this.is_start = match.is_start;
  this.is_reset = match.is_reset;
  this.time = match.time;
  this.is_start_lock = match.is_start_lock;
  this.is_reset_lock = match.is_reset_lock;
  this.player_lock = match.player_lock;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get matches
Match.getMatches = (tournament_id, filter, result) => {
  const queryParams = [];
  const querySet = [];
  Object.keys(filter).forEach((param) => {
    querySet.push(`AND matches.${param}=?`);
    queryParams.push(filter[param]);
  });
  dbConn.query(
    `SELECT matches.id, matches.draw_id,
    categories.name AS category, categories.gender AS category_gender,
    draw.category_id, draw.system,
    matches.competitor1_id, matches.competitor2_id, comp1.name AS competitor1_name, comp2.name AS competitor2_name,
    tatami.id AS tatami_id, tatami.name AS tatami_name,
    matches.competitor1_point, matches.competitor2_point,
    matches.competitor1_foul, matches.competitor2_foul,
    matches.default_time, matches.player_win,
    matches.time, matches.is_start, matches.is_reset,
    matches.time_lock, matches.player_lock, matches.is_start_lock, matches.is_reset_lock,
    matches.match_id, matches.next_match_id, matches.is_match, matches.round, matches.next_match_player, matches.state, matches.order_id,
    matches.created_at, matches.updated_at 
    FROM matches
    LEFT JOIN draw
    ON matches.draw_id = draw.id
    LEFT JOIN categories
    ON draw.id = categories.draw_id
    LEFT JOIN competitors comp1
    ON matches.competitor1_id = comp1.id
    LEFT JOIN competitors comp2
    ON matches.competitor2_id = comp2.id
    LEFT JOIN tatamis tatami
    ON matches.tatami_id = tatami.id
    WHERE matches.is_deleted=0 AND categories.is_deleted=0 AND matches.tournament_id=? ${querySet.join(
      ""
    )}`,
    [tournament_id, ...queryParams],
    (err, res) => {
      if (err) {
        console.log("Error while fetching matches", err);
        result(null, err);
      } else {
        console.log("Matches fetched successfully");
        result(null, res);
      }
    }
  );
};

// get match by ID from DB
Match.getMatchByID = (id, result) => {
  dbConn.query(
    `SELECT matches.id, matches.draw_id,
    categories.name AS category, categories.gender AS category_gender,
    draw.category_id, draw.system,
    matches.competitor1_id, matches.competitor2_id, comp1.name AS competitor1_name, comp2.name AS competitor2_name,
    tatami.id AS tatami_id, tatami.name AS tatami_name,
    matches.competitor1_point, matches.competitor2_point,
    matches.competitor1_foul, matches.competitor2_foul,
    matches.default_time, matches.player_win,
    matches.time, matches.is_start, matches.is_reset,
    matches.time_lock, matches.player_lock, matches.is_start_lock, matches.is_reset_lock,
    matches.match_id, matches.next_match_id, matches.is_match, matches.round, matches.next_match_player, matches.state, matches.order_id,
    matches.created_at, matches.updated_at  
    FROM matches
    LEFT JOIN draw
    ON matches.draw_id = draw.id
    LEFT JOIN categories
    ON draw.id = categories.draw_id
    LEFT JOIN competitors comp1
    ON matches.competitor1_id = comp1.id
    LEFT JOIN competitors comp2
    ON matches.competitor2_id = comp2.id
    LEFT JOIN tatamis tatami
    ON matches.tatami_id = tatami.id
    WHERE matches.is_deleted=0 AND categories.is_deleted=0 AND matches.id=?`,
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching match by id", err);
        result(null, err);
      } else {
        if (res.length) {
          result(null, res[0]);
        } else {
          result(null, "Data tidak ditemukan");
        }
      }
    }
  );
};

// create new matches
Match.createMatches = (matchReqDatas, result) => {
  const queryParams = [];
  const querySet = [];
  matchReqDatas.forEach((matchReqData) => {
    const queryParam = [];
    Object.keys(matchReqData).forEach((matchParam) => {
      if (queryParams.length === 0) {
        querySet.push(`${matchParam}`);
      }
      queryParam.push(matchReqData[matchParam]);
    });
    queryParams.push(queryParam);
  });
  dbConn.query(
    `INSERT INTO matches (${querySet.join(",")}) VALUES ? `,
    [queryParams],
    (err, res) => {
      if (err) {
        console.log("Error while inserting data", err);
        result(null, err);
      } else {
        console.log("Match created successfully");
        result(null, res);
      }
    }
  );
};

// update match
Match.updateMatch = (id, matchReqData, result) => {
  const querySet = [];
  const queryParam = [];
  Object.keys(matchReqData).forEach((matchParam) => {
    querySet.push(`${matchParam}=?`);
    queryParam.push(matchReqData[matchParam]);
  });
  dbConn.query(
    `UPDATE matches SET ${querySet.join(",")} WHERE id = ?`,
    [...queryParam, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the match");
        result(null, err);
      } else {
        console.log("Match updated successfully");
        result(null, res);
      }
    }
  );
};

// update match timer
Match.updateMatchTimer = (id, matchReqData, result) => {
  const { time, is_start, is_reset } = matchReqData;
  dbConn.query(
    "UPDATE matches SET time=?,is_start=?,is_reset=? WHERE id = ?",
    [time, is_start, is_reset, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the match");
        result(null, err);
      } else {
        console.log("Match updated successfully");
        result(null, res);
      }
    }
  );
};

// update match point
Match.updateMatchPoint = (id, matchReqData, result) => {
  const {
    competitor1_point,
    competitor2_point,
    competitor1_foul,
    competitor2_foul,
  } = matchReqData;
  dbConn.query(
    "UPDATE matches SET competitor1_point=?,competitor2_point=?,competitor1_foul=?,competitor2_foul=? WHERE id = ?",
    [
      competitor1_point,
      competitor2_point,
      competitor1_foul,
      competitor2_foul,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the match");
        result(null, err);
      } else {
        console.log("Match updated successfully");
        result(null, res);
      }
    }
  );
};

// delete match
Match.deleteMatch = (id, result) => {
  // dbConn.query('DELETE FROM matches WHERE id=?', [id], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the match');
  //         result(null, err);
  //     }else{
  //         result(null, res);
  //     }
  // })
  dbConn.query(
    "UPDATE matches SET is_deleted=? WHERE id = ?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the match");
        result(null, err);
      } else {
        console.log("Match deleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Match;
