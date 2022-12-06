
const express = require('express')
const user = require('./api/routes/user');
const app = express()
const PORT = 8080
const allowedUrl = require('./config')
const cors = require('cors');
app.use(express.json());
app.use("/users/",user);
app.use(cors(
  {origin: allowedUrl}
));
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})
 

// Export the Express API
module.exports = app