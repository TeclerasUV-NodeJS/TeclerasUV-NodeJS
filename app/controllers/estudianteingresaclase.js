var express = require('express'),
  router = express.Router(),
  auth_estudiante = require("../middleware/auth_estudiante.js"),
  queries = require('../queries/index.js');

module.exports = function(app) {

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use('/', router);

  router.get('/errorstandard', auth_estudiante, function(request, response, next) {
    response.render('errorstandard', {});
  });

  router.get('/estudiante/ingresaclase', auth_estudiante, function(request, response, next) {
    response.render('estudianteingresaclase', {});
  });

  router.get('/estudiante/ingresado', auth_estudiante, function(request, response, next) {
    queries.get_tv_clase_password.buscar_clase_password(request.query.password).then(function(info_clase){
      console.log(info_clase);
      var info;
      if(info_clase != ''){
        info = info_clase[0].CLA_PASSWORD;
        console.log("infoclase:",info);
        response.render('estudianteingresado', {});
      }else{
        info = '';
        response.render('errorstandard', {message : 'Error de password'});
      }

    })

});

}
