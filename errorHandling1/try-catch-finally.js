/*
Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. 
Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
*/

//Example
try{
	console.log('Awal Blok Try');
	console.log('Akhir Blok Try');
} catch(error){
	console.log('Kode blok ini akan diabaikan karena tidak ada error di blok kode try');
} finally{
	console.log('Kode blok ini akan tetap dieksekusi');
}

//Output :
Awal Blok Try
Akhir Blok Try
Kode blok ini akan tetap dieksekusi
