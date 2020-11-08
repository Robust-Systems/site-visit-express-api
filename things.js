var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.get('/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });
 
 router.get('/:dateFrom([0-9]{1,2}-[0-9]{1,2}-[0-9]{2,4})', function(req, res){
    res.send('dateFrom: ' + req.params.dateFrom);
 });
 
 router.get('/:dateFrom([0-9]{1,2}-[0-9]{1,2}-[0-9]{2,4})/:dateTo([0-9]{1,2}-[0-9]{1,2}-[0-9]{2,4})', function(req, res){
    res.send('dateFrom: ' + req.params.dateFrom + ' dateTo: ' + req.params.dateTo);
 });
 
 router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;