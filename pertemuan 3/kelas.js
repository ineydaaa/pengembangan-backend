const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`get data kelas`);
});
router.post("/inputkelas",(req, res)=> {
    res.send(`input halaman kelas`);
});
router.put("/editkelas",(req, res)=> {
    res.send(`edit halaman kelas`);
});
router.delete("/deletekelas",(req, res)=> {
    res.send(`delete halaman kelas`);
});

module.exports = router;