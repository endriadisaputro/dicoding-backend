// const coffeeStock = require('./state'); //(Import dengan 1 modul saja)
// const {coffeeStock,isCoffeeMachineReady} = require('./state'); //Import dengan lebih dari 1 modul

import coffeeStock from "./state.js";

const displayStock = stock =>{
	for(const type in stock){
		console.log(type);
	}
}
displayStock(coffeeStock);