const coffeeStock = require('./state'); //(Import dengan 1 modul saja)


const makeCoffee =(type, miligrams) => {
	if(coffeeStock[type] >= miligrams){
		console.log("Kopi Berhasil Dibuat!!");
	} else {
		console.log("Kopi Habis");
	}
}

makeCoffee("robusta", 80);