const express =require('express');
const router = express.Router();

//routing
router.get("/",(req, res)=> {
    res.send(`ini halaman get user`);
});
router.post("/inputuser",(req, res)=> {
    res.send(`input halaman user`);
});
router.put("/edituser",(req, res)=> {
    res.send(`edit halaman user`);
});
router.delete("/deleteuser",(req, res)=> {
    res.send(`delete halaman user`);
});


module.exports = router;