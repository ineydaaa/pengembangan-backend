const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`get data jadwal`);
});
router.post("/inputjadwal",(req, res)=> {
    res.send(`input halaman jadwal`);
});
router.put("/editjadwal",(req, res)=> {
    res.send(`edit halaman jadwal`);
});
router.delete("/deletejadwal",(req, res)=> {
    res.send(`delete halaman jadwal`);
});

module.exports = router;