const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`get data guru`);
});
router.post("/inputguru",(req, res)=> {
    res.send(`input halaman guru`);
});
router.put("/editguru",(req, res)=> {
    res.send(`edit halaman guru`);
});
router.delete("/deleteguru",(req, res)=> {
    res.send(`delete halaman guru`);
});

module.exports = router;