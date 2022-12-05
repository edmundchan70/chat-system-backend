const express = require('express');
const router =express.Router();

router.get('/',async (req ,res) =>{
    console.log(req);
    res.send("YES");
})
module.exports = router;