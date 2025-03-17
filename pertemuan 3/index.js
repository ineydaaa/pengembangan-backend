const express = require('express');
const app = express();
const port = 3000;
const user = require('./user');
const guru = require('./guru');
const jadwal = require('./jadwal');
const kelas = require('./kelas');
const mapel = require('./mapel');
const nilai = require('./nilai');
const presensi = require('./presensi');
const siswa = require('./siswa');

//mwnggunakan module
app.use("/user",user);
app.use("/guru",guru);
app.use("/jadwal",jadwal);
app.use("/kelas",kelas);
app.use("/mapel",mapel);
app.use("/nilai",nilai);
app.use("/presensi",presensi);
app.use("/siswa",siswa);

//routing

app.get("/",(req,res) => {
    res.send("Kirim data");
});
app.post("/",(req,res) => {
    res.send("Kirim data");
});
app.put("/",(req,res) => {
    res.send("Edit data");
});
app.patch("/",(req,res) => {
    res.send("Edit data");
});
app.delete("/",(req,res) => {
    res.send("hapus data");
});

app.listen(port, () => {
    console.log("Aplikasi Berjalan pada : ${port}");
});