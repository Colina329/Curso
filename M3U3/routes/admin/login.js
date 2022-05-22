var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModels');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.get('/logout',function (req,res,next) {
  req.session.destroy(); //destruir
  res.render('admin/login',{
    layout: 'admin/layout'
  });
});


router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    console.log(req.body);

    var data = await usuariosModel.getUserAndPassword(usuario, password);

    if (data != undefined) {

      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;


      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      })
    } //cierre else
  } catch (error) {
    console.log(error)
  }
}); // Cierre post

module.exports = router;