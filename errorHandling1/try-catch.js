/*
Untuk menangani eror pada JavaScript, gunakan try dan catch. 
Penulisan kode try-catch untuk menangani eror adalah seperti ini:
*/

try{
	//kode
}catch{
	//Error Handling
}


// Example 1:
/*************************
try{
	console.log('Hello Word1');
	console.log('hello Word2');
} catch (error){
	console.log('Kode ini tidak akan dieksekusi karena tidak terjadi error pada blok kode try');
}

// Output:
Hello Word1
hello Word2
*************************/


//Example 2 :
/************************
try{
	console.log('Hello Word1');
	errorCode;
	console.log('Hello Word2');
} catch (error){
	console.log('Terjadi Error!');
}

// Output ::
 Hello Word1
 Terjadi Error!
 *************************/

/*
Sekarang perhatikan blok catch. Di sana catch memiliki satu parameter bernama error (nama variabel bisa diubah). 
Variabel error tersebut merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi.

Object error memiliki beberapa properti utama di dalamnya, yaitu:

name : Nama error yang terjadi.
message : Pesan tentang detail error.
stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat 
informasi baris mana yang menyebabkan error.

Sekarang mari kita coba untuk mengubah kode dan menampilkan properti error di atas.
*/

/*************************
try{
	console.log('Hello Word1');
	errorCode;
	console.log('Hello Word2');
} catch(error){
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
}

// Output :
Hello Word1
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
 *************************/