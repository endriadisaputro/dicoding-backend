// const coffeeStock = require('./state'); //(Import dengan 1 modul saja)
const {coffeeStock,isCoffeeMachineReady} = require('./state'); //Import dengan lebih dari 1 modul

const makeCoffee =(type, miligrams) => {
	if(coffeeStock[type] >= miligrams){
		console.log("Kopi Berhasil Dibuat!!");
	} else {
		console.log("Kopi Habis");
	}
}

makeCoffee("robusta", 80);