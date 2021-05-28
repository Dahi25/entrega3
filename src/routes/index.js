const express = require('express')
const app = express()
const path = require ('path')
const hbs = require ('hbs')
const bodyParser = require ('body-parser')
const bcrypt = require('bcryptjs');
//path//
const dirPublic=path.join(__dirname ,"../public")//para unir carpetas//
const dirViews=path.join(__dirname ,"../template/views")
const dirPartials=path.join(__dirname ,"../template/partials")
const cursos= require ('./../models/cursos')
//hbs
app.set('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials)

//Paginas
  
app.get('/coordinador', function (req, res) {
	console.log('ingreso a la pagina')
  res.render('coordinador', {
  	titulo: 'Coordinador',
	  mensaje: ''
  	})
})

app.post('/coordinador', function (req, res) {
	console.log(parseInt(req.body.usuario), req.body.contrasena)
		mensaje="";
		Cliente.findOne({cedula : parseInt(req.body.usuario)},(err, resultado)=>{
				if (err){
					return console.log(err)
				}
				if (!resultado){
					mensaje= "El usuario no existe"
				}
				else{
					if(!bcrypt.compareSync(req.body.contrasena, resultado.contrasena)){
						mensaje= "Contraseña incorrecta"
					}
					else{
						req.session.usuario = resultado._id
						console.log("variable de sesión" + req.session.usuario)
						req.session.nombre = resultado.nombre
						mensaje= "Bienvenid@ " + resultado.nombre
					}	
					
				}
				res.render('coordinador',{
				titulo: 'coordinador',
				mensaje: mensaje,
				sesion : true,
				nombre : req.session.nombre
				})
		})
	
	})
	
































module.exports = app