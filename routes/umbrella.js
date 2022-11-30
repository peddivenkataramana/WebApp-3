

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('umbrella', { title: 'Search Results umbrella' });
//});
var express = require('express');
const umbrella_controlers= require('../controllers/umbrella'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 

router.get('/', umbrella_controlers.umbrella_view_all_Page ); 
module.exports = router;

/* GET detail costume page */ 
router.get('/detail', umbrella_controlers.umbrella_view_one_Page); 
 
 /* GET create costume page */ 
router.get('/create', umbrella_controlers.umbrella_create_Page); 
 
/* GET update costume page */ 
router.get('/update', secured,umbrella_controlers.umbrella_update_Page); 
 
/* GET delete costume page */ 
router.get('/delete', umbrella_controlers.umbrella_delete_Page);    