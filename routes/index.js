// jshint esversion : 6
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth.js');


// HOME PAGE
router.get('/', (req,res)=> res.render('welcome'));

// dashboard
router.get('/dashboard', ensureAuthenticated,  (req,res)=> res.render('dashboard', { name : req.user.name } ));

module.exports = router;
