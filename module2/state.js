const coffeeStock = {
	arabica:100,
	robusta:150,
	liberica:200
}

const isCoffeeMachineReady=true;

//module.exports=coffeeStock; //(Eksport 1  modul saja)
module.exports={coffeeStock, isCoffeeMachineReady}; //Eksport lebih dari 1 Modul

console.log(module);