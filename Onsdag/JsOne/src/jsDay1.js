/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2
} 

var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log( add(1,2) )
// Prints the number 3, result of addition of the two numbers. 

console.log( add )
//It prints Function: add . The parameter is a reference to the function.

console.log( add(1,2,3) );
//prints the number 3 (adds the two numbers) and ignores the last argument. 

console.log( add(1) );	
//prints NaN because its missing an argument. 

console.log( cb(3,3,add) );
//prints: "Result from the two numbers: 3+3=6. " result of concatanation ?

console.log( cb(4,3,sub) );
//prints: "Result from the two numbers: 4+3=1"  

//console.log(cb(3,3,add()));

console.log(cb(3,"hh",add));
//prints "Result from the two numbers: 3+hh=3hh" second argument is a String, so it addds them.

var errorcb = function(n1,n2, callback){
try{
if((typeof callback === "function") && (typeof n1 ==="number") && (typeof n2 === "number")){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2)
}else{
  throw new Error("error")
}
}catch (e){
  console.error(e.name + ": " + e.message)
}
};

var mul = function(n1,n2) {
return n1/n2;
}
console.log(errorcb(10,5,mul));
//Result from the two numbers: 10+5=2


var names = ["Lars","Jan","Peter","Bo","Frederik"];
var filteredNames = names.filter(name => (name.length <= 3));
names.forEach(name => console.log(name));
filteredNames.forEach(name => console.log(name));

var upperCase = names.map(name => name.toUpperCase());
console.log(upperCase);


var makeUL = function (items) {
	var inner = items.map(item => ("\t<li>"+item+"</li>"));
	inner.unshift("<ul>");
	inner.push("</ul>");
	return inner.join("\n");
}

console.log(makeUL(["Lars","Peter","Jan","Ian"]));

var cars = [
	{id:1,year:1997,make:'Ford',model:'E350',price:3000},
	{id:2,year:1999,make:'Chevy',model:'Venture',price:4900},
	{id:3,year:2000,make:'Chevy',model:'Venture',price:5000},
	{id:4,year:1996,make:'Jeep',model:'Grand Cherokee',price:4799},
	{id:5,year:2005,make:'Volvo',model:'V70',price:44799}
        
        ];

console.log(cars.filter(car => (car.year > 1999)));
console.log(cars.filter(car => (car.make == "Volvo")));
console.log(cars.filter(car => (car.price < 5000)));



var makeSQL = function(items) {
	var keys = Object.keys(items[0])
	var output = items.map(car => {
		var temp = [];
		for(var i = 0; i < keys.length; i++) {
			temp.push(car[keys[i]]);
		}
		return temp.join(",");
	})
	var result = output.map(e => {
		return "INSERT INTO cars ("+keys.join(",")+") VALUE (" + e +")";	
	});
	return result;
} 
console.log(makeSQL(cars));
