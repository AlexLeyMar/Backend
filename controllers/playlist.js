const exp = require("constants")
const Playlist = require("../models/playlist")

function checkTypeString(param){
    if(typeof(param) == "string" || typeof(param) == "undefined"){
        return true
    }else{
        return false
    }
}

function checkTypeInt(param){
    if(typeof(param) == "number" || typeof(param) == "undefined"){
        return true
    }else{
        return false
    }
}

exports.postAgregarPlaylist = async (req,res)=>{
    if (checkTypeString(req.body.titulo) && checkTypeString(req.body.descripcion) && checkTypeString(req.body.nombreMuseo) && 
    checkTypeString(req.body.ubicacionMuseo) && checkTypeString(req.body.descripcionMuseo) && checkTypeString(req.body.tituloPelicula) &&
    checkTypeString(req.body.directorPelicula) && checkTypeString(req.body.clasificacionPelicula) && checkTypeInt(req.body.anioPelicula) && 
    checkTypeInt(req.body.duracionPelicula) == true){
        if (req.body.titulo.length >= 5 && req.body.titulo.length <= 10){
            console.log(req.body)
            Playlist.create(req.body)
            .then(result=>{
                console.log("Playlist creada exitosamente")
                res.json({
                    estado: "ACEPTADO"
                })
                console.log(typeof(req.body.duracionPelicula))
            })
            .catch((err)=>{
                console.log(err)
                res.json({estado:"ERROR"})
            })
        }else{
            res.json({
                //INAVLID BODY EXCEPTION
                estado: "'Titulo' must have more than 5 characters and less than 10"
            })
        }
    }else{
        res.json({
            //INAVLID BODY EXCEPTION
            estado: "Fields must be string, number or undefined when is required"
        })
    }
}


exports.getObtenerPlaylist = async (req,res)=>{
    Playlist.find()
        .then(playlists=>{
            console.log(playlists)
            res.json(playlists)
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"ERROR"})
        })
}

exports.postModificarPlaylist = async (req, res)=>{
    console.log(req.body)

    Playlist.findOneAndUpdate({titulo: req.body.titulo},
        {
        descripcion: req.body.descripcion,
        nombreMuseo: req.body.nombreMuseo,
        ubicacionMuseo: req.body.ubicacionMuseo,
        descripcionMuseo: req.body.descripcionMuseo,
        tituloPelicula: req.body.tituloPelicula,
        anioPelicula: req.body.anioPelicula,
        directorPelicula: req.body.directorPelicula,
        duracionPelicula: req.body.duracionPelicula,
        clasificacionPelicula: req.body.clasificacionPelicula
    })
    .then(() =>{
        console.log("Playlist actualizado")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
}

exports.postBorrarPlaylists = async (req,res)=>{
    console.log(req.body)
    Playlist.remove({})
    .then(()=>{
        console.log("Playlist eliminado")
        res.json({estado:"ACEPTADO"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"ERROR"})
    })
}

