// const coffeeStock = require('./state'); //(Import dengan 1 modul saja)
// const {coffeeStock,isCoffeeMachineReady} = require('./state'); //Import dengan lebih dari 1 modul

// import coffeeStock from "./state.js"; //import 1


/*
Karena named import menggunakan teknik destructuring object untuk mendapatkan nilai, 
maka pastikan penamaan variabel sesuai dengan nama variabel yang diekspor. 
Jika nama tidak sesuai, akan terjadi seperti berikut:
*/
//import {coffeeStock, isCoffeeMachineReady} from "./state.js";

// const displayStock = stock =>{
// 	for(const type in stock){
// 		console.log(type);
// 	}
// }

// console.log(stock);
// console.log(isCoffeeMachineReady);



/*
Namun, jika kita tetap ingin mengubah penamaan variabel dari named import, 
kita bisa melakukannya dengan menambahkan keyword as setelah penamaan variabelnya.
*/
import {coffeeStock as stock, isCoffeeMachineReady} from "./state.js";

const displayStock = stock =>{
	for(const type in stock){
		console.log(type);
	}
}

console.log(stock);
console.log(isCoffeeMachineReady);