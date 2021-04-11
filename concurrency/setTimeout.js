console.log("Selamat Datang ");
setTimeout(()=>{
	console.log("Terima Kasih sudah mampir");
},3000);
console.log("Ada yang bisa dibantu?");

/*
Jika hanya mengenal program secara synchronous, maka kita dapat membayangkan hasilnya 
memiliki urutan sebagai berikut:

Mencetak -> Selamat datang!
Menunggu selama tiga detik.
Mencetak -> Terima kasih sudah mampir, silakan datang kembali!
Mencetak -> Ada yang bisa dibantu?
Namun, nyatanya setTimeout() tidak akan menghentikan JavaScript untuk melakukan 
eksekusi kode pada baris berikutnya. Sehingga urutannya menjadi seperti berikut:

Mencetak -> Selamat datang!
Mencetak -> Ada yang bisa dibantu?
Menunggu selama tiga detik
Mencetak -> Terima kasih sudah mampir, silakan datang kembali!
*/

