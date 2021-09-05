var express = require('express');
var router = express.Router();
var mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project_classmate',
  port: '3306'
})
connection.connect();

var sql = 'select * from t_near_community';
var str = '';
connection.query(sql, function(err, result) {
   if (err) {
       console.log('[SELECT ERROR]：', err.message);
   }
   str = JSON.stringify(result);
  //  console.log(result);
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(str);
});
connection.end();
module.exports = router;
