const musicOntologyController = require('../controllers/musicOntology');

module.exports = app => {

  app.post('/musicOntology/findRecommendedMusics', musicOntologyController.findRecommendedMusics);

};