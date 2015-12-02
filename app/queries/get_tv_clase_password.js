var db = require('../models');
var sequelize = require("../models/sequelize.js")
//console.log(db.sequelize);
exports.consultas = {
    buscar_clase_password: function(codigo) {
      return sequelize
      .query("select * from TV_CLASE where CLA_PASSWORD=?", {replacements: [codigo], type: sequelize.QueryTypes.SELECT} )
    }
  }
