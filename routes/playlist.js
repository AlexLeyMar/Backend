const router = require("express").Router();
const playlistsController = require("../controllers/playlist")

router.post("/agregarPlaylist", playlistsController.postAgregarPlaylist)
router.get("/obtenerPlaylist", playlistsController.getObtenerPlaylist)
router.post("/modificarPlaylist", playlistsController.postModificarPlaylist)
router.post("/borrarPlaylists", playlistsController.postBorrarPlaylists)

module.exports = router