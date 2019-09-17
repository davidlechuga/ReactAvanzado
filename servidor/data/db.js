import mongoose from 'mongoose';



mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://davidlechuga:1Diosasegur@cluster0-xcjjl.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


const clientesSchema= new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    emails: Array,
    edad: Number,
    tipo: String,
    pedidos: Array

});

const Clientes = mongoose.model('clientes', clientesSchema)
export {Clientes};
 