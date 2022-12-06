const Pool = require('pg').Pool;

 const pool = new Pool({
    user: 'edmundchan70',
    host: 'db.bit.io',
    database: 'edmundchan70/chat_system_users', // public database 
    password: 'v2_3wRXT_yCz5FEDLumjkbVuanECrNjD', // key from bit.io database page connect menu
    port: 5432,
    ssl: true,
});
 

exports.pool = pool;