const mongoose = require("mongoose")

const playlistsSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    titulo:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
    },
    nombreMuseo:{
        type:String,
    },
    ubicacionMuseo:{
        type:String,
    },
    descripcionMuseo: {
        type:String,
    },
    tituloPelicula:{
        type:String,
    },
    anioPelicula:{
        type:Number,
    },
    directorPelicula: {
        type:String,
    },
    duracionPelicula: {
        type:Number,
    },
    clasificacionPelicula: {
        type:String,
    }
}, {collection:'playlists'})

//CREAR EL MODELO A PARTIR DEL ESQUEMA DEFINIDO

module.exports = mongoose.model('playlists', playlistsSchema)