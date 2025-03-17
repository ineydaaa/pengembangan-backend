const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`get data nilai`);
});
router.post("/inputnilai",(req, res)=> {
    res.send(`input halaman nilai`);
});
router.put("/editnilai",(req, res)=> {
    res.send(`edit halaman nilai`);
});
router.delete("/deletenilai",(req, res)=> {
    res.send(`delete halaman nilai`);
});

module.exports = router;