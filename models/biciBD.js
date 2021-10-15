import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre:{type: String, required:[true, 'Nombre Obligatorio']},
    cedula:{type: String, required:[true, 'cedula Obligatorio']},
    telefono:{type: String, required:[true, 'Telefono Obligatorio']},
    email:{type: String, unique: true, required:[true, 'Correo Obligatorio']},
    sexo:{type: String, required:[true, 'Sexo Obligatorio']},
    contraseña:{type: String, required:[true, 'Contraseña Obligatorio']},
});

//convertir modelo
const biciBD = mongoose.model('biciBD', usuarioSchema);
export default biciBD;