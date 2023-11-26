console.log("Variable numbers");

let numbers = [2, 3, 4, 5];
console.log(numbers[numbers.length-1]);
console.log(numbers.at(-2));

for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

for (let i=numbers.length -1; i>=0; i--){
    console.log(numbers[i]);
}

console.log("variable animals");

let animals = ["gato", "perro", "raton"];
animals.push("pajaro");
animals.unshift("gatico");
animals.splice(2,1, "chihuahua");

let a= animals.pop();
console.log(a);
let a1= animals.shift();
console.log(a1);


for (let i=0; i<animals.length; i++){
    console.log(animals[i]);
}

for (let i=animals.length -1; i>=0; i--){
    console.log(animals[i]);
}

console.log("variable concatenada");

let conc=numbers.concat(animals);
for (let i=0; i<conc.length; i++){
    console.log(conc[i]);
    
}
