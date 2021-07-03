// alert("this is a Siri! are you interested to stay with me ?")

// var today = new Date();
// var hourNow = today.getHours();
// var greetings;

// if(hourNow > 18)
// 	greetings = 'Good Evening!';
// else if (hourNow > 12 )	
// 	greetings = 'Good Afternoon!';
// else if (hourNow > 0)
// 	greetings = 'Good Morning!';
// else 
// 	greetings = 'Welcome'; 

// document.write ('<h3>' + greetings + '</h3>');


/*

console.log('hello');
alert('yoo0!');

//variable
var b= 'smoothie';
console.log(b);

var somenumber = 45;
console.log(somenumber)

document.getElementById('sometext').innerHTML = 'Hey there';

// ask any thing to user
var age = prompt('what is your age ? ');
document.getElementById('someText'). innerHTML = age;

//numbers in js
var num1 = 5.7;
// increment
num1 = num1 + 1;
// decremenent
num1--;
console.log(5*48);




*/

/* Function
1. create a function
2. call the function
*/

// create
function fun(){
	console.log('this is a function');

}

// call
fun();

/* lets create a function that 
take in a name and say hello following
the name 

for example 

Name : "Qazi"
Return : "Hello Qazi"
*/

// function greeting(yourName) {
// 	var result = 'Hello' + ' ' + yourName;
// 	console.log(result);
// }

// var name = prompt("what is your name: ? ");  // we take the name from user
// greeting(name);// pass the name to greeting

// How do arguments work function



// How do we add two numbers in a function?

function sumNumber(num1, num2){
	var result = num1 + num2;
	console.log(num1 + num2);
}

// sumNumber(10, 10);

// while loop

/*
var num = 0 ;

while(num<100){
	num++;
	console.log(num);
}
*/

// for loop

// for (let num = 0; num< 100; num++)
// {
// 	console.log(num);
// }

// data types

// var youtAge=18; // number
// let yourName = 'Bijay' // string
// let name = { firse: 'Bijay', last: 'Ghosh'}; // object
// let truth = false ;  // boolian
// let groseries = [ 'apple', 'banana ', 'Array'] ; // Array
// let random; // undefined
// let nothing = null ; // value null

// strings in JS(commom method)

let fruit = 'banana, apple, orange ';
let moreFruit = 'banana \napple'; // new line
console.log(fruit.length);

console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit.split(','));


//Array
let fruites = [ 'banana', 'apple', 'orange', 'guava'];
let fruits = ('banana', 'apple', 'orange', 'guava');
fruits[0] = 'pear';
console.log(fruits);

for(let i=0; i<fruits.length; i++)
{
	console.log(fruits[i]);
}

//arrays common methods

// console.log('to string ', fruits.toString());
// console.log(fruits.join('-'));
// console.log(fruits, fruits.pop(), fruits);

fruits[4]='bijay';
console.log(fruits[4]);
console.log(fruits);


let vegies = ['tomato', 'potato'];
let allGroceries = fruits.concat(vegies);
console.log(allGroceries) ;
// console.log(allGroceries.reverse());


let someNumber = [ 5,12,23,34,45,56,7,87,78,90];
console.log(someNumber.sort(function(a, b) {return a-b})); // sorted in accending order
console.log(someNumber.sort(function(a, b) {return b-a})); // sorted in decending order


// Appending number in array
let emptyArray = new Array();
for (let num =0; num<10; num++)
{
	emptyArray.push(num);
}
console.log(emptyArray);


// objects in javascript

student = { first: 'Bijay' ,
			 Last: 'Ghosh' , 
			Age: 20,
			height: 170,
			studentInfo: function (){
				return this.first + '\n' + this.last + '\n' + this.age;
			}
		};

// console.log(student.first);
// console.log(student.Last);
// student.first = 'yoyo'; // change value
// console.log(student.first);
// console.log(student.age);
// student.age++;
// console.log(student.age);

console.log(student.studentInfo());


// conditional control flow and (if else)
// 18 - 35 is my target demographic
var age = 45;
if((age>=18) && (age<=35)){
	status = 'target demo'
	console.log(status);
}
else{
	status = 'not my audience';
	console.log(status);
}


// switch statements
// differentiate between weekdays vs. weekend
// day 0 ---> Sunday
// day 1 ---> Monday
// day 2 ---> Tuesday
// day 3 ---> thursday
// day 4 ---> Friday
// day 5 ---> Saturday
// day 6 ---> Sunday



switch(6){
	case 0:
		text = 'Weekend';
		break;

	case 5:
		text = 'weekend';
		break;

	case 6:
		text = 'weekend';
		break;

	default:
		text = 'weekday';
}

console.log(text);


