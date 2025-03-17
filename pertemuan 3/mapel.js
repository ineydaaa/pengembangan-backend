const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`get data mapel`);
});
router.post("/inputmapel",(req, res)=> {
    res.send(`input halaman mapel`);
});
router.put("/editmapel",(req, res)=> {
    res.send(`edit halaman mapel`);
});
router.delete("/deletemapel",(req, res)=> {
    res.send(`delete halaman mapel`);
});

module.exports = router;