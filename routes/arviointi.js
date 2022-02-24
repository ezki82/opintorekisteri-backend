const express = require('express');
const router = express.Router();
const arviointi = require('../models/arviointi_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    arviointi.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult.rows);
      }
    });
  } else {
    arviointi.get(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult.rows);
        response.json(dbResult.rows);
      }
    });
  }
});


router.post('/', 
function(request, response) {
  arviointi.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  arviointi.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  arviointi.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;
