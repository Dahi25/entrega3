const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const cursosSchema = new Schema ({
	idCurso : {
		type : Number,
		required : true
	},
	nombre : {
		type : String,
		required : true,
		trim : true
	},
	descripcion : {
		type : String,
		required : true,
       trim:true
	},
	precio : {
		type : Number,
		required : true,
		trim: true
	},
    duracion : {
		type : Number,
		required : true,
		trim: true
	},
    modalidad : {
		type : String,
		trim: true
	},
    estado : {
		type : String,
		default : "disponible",
		trim: true
	},
   intens8idadhoraria : [{
		type : Schema.Types.ObjectId,
		ref: 'Cursos' 
	}]
});

const cursos = mongoose.model('cursos', cursosSchema);
module.exports = cursos