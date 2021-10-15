import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
    nombre:{type: String, required:[true, 'Nombre Obligatorio']},
    departamento:{type: String, required:[true, 'Departamento Obligatorio']},
    municipio:{type: String, unique: true, required:[true, 'Municipio Obligatorio']},
    fecha:{type: String, required:[true, 'Fecha Obligatorio']},
    hora:{type: String, required:[true, 'Hora Obligatorio']},
    descripcion:{type: String, required:[true, 'Descripción Obligatorio']},
});

//convertir modelo
const eventos_biciBD = mongoose.model('eventoBiciBD', eventoSchema);
export default eventos_biciBD;