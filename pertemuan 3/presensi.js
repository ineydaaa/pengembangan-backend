const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`get data presensi`);
});
router.post("/inputpresensi",(req, res)=> {
    res.send(`input halaman presensi`);
});
router.put("/editpresensi",(req, res)=> {
    res.send(`edit halaman presensi`);
});
router.delete("/deletepresensi",(req, res)=> {
    res.send(`delete halaman presensi`);
});

module.exports = router;