const express = require("express");
const router = express.Router();
const cors = require("cors");
const {pool} = require('../../database.js');
const tableName = "USERINFO";
router.use(cors({
  origin:"http://localhost:3000"
}))
router.post("/addNewUser/", async (req, res) => {
   try{
      const { useremail} = req.body;
 
      const result = await pool.query(
          "INSERT INTO USERINFO (useremail) VALUES ($1)",
          [useremail]
      )
     res.send(result);
   }catch(err){
      console.log(err);
  }
  });


router.get("/getAllUsers/" , async (req, res) => {
  try{
    const result = await pool.query(
      `SELECT * FROM   userinfo`
    )
    res.send(result.rows);
  }catch(err){

  }
})


module.exports = router;
  