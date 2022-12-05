
const express = require('express')
const app = express();
const cors = require('cors');
const ports = process.env.PORT || 8080;
 
app.use(cors());
app.use(express.json());


app.listen(ports , ()=>{
    console.log('listening on port'+ports);
})  

app.get('/',async (req ,res) =>{
    console.log(req);
    res.send("YES");
})
module.exports = app; 