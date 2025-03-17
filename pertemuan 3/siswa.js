const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`get data siswa`);
});
router.post("/inputsiswa",(req, res)=> {
    res.send(`input halaman siswa`);
});
router.put("/editsiswa",(req, res)=> {
    res.send(`edit halaman siswa`);
});
router.delete("/hapussiswa",(req, res)=> {
    res.send(`delete halaman siswa`);
});

module.exports = router;