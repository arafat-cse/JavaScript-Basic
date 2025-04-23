//littar//A to Z 
var age = 20;
console.log(age);
console.log(typeof age);

var status = true;
console.log(typeof status);

const num1 = 30.5;
const num2 = 15.8;
console.log(parseInt(num1+num2));

var number1 = "30.5";
var number2 = 15.8;
console.log(number1+number2);
console.log(parseInt(number1)+number2);


var age = 17;

if(age>=18){
    console.log(age+" Vot dite parbe");
}else{
    console.log(age + " vot dite parbe na");
}

// Object
var person = {
    name: "Arafat",
    Age: 25,
    status: "Single",

};
console.log(typeof person);
console.log( person);
console.log("Name " + person.name);

// arry 
var number = [1, 2, 3];
var number2 = [1, person, 3];
console.log(number);
console.log(number2);
console.log(number2.length);

var arry = [1,2 ,3];
//last index add
arry.push("arafat");

console.log(arry);

//List index remove
arry.pop();

console.log(arry);

// First index Add
arry.unshift("Rahman");
console.log(arry);
// First index remove 
arry.shift();
console.log(arry);