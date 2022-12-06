
const express = require('express')
const user = require('./api/routes/user');
const app = express()
const PORT = 8080
const cors = require('cors');
app.use(express.json());
app.use("/users/",user);
app.use(cors(
  {origin: "http://localhost:3000"}
));
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})
 

// Export the Express API
module.exports = app