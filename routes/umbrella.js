

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('umbrella', { title: 'Search Results umbrella' });
//});
var express = require('express');
const umbrella_controlers= require('../controllers/umbrella'); 
var router = express.Router();
router.get('/', umbrella_controlers.umbrella_view_all_Page ); 
module.exports = router;