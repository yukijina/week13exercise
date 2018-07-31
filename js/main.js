// Javascript Basic

// testing if JS is working. You can see in console, not in HTML
// console.log only shows in console not HTML
console.log('connected');

// This make you can see in HTML page
document.write('Hello World');

// this make you change the background color in HTML, this affect CSS
document.body.style.backgroundColor = 'tomato';

// JS primitive
// 1. NUMBERS
//   8
//   100
//   5.39
//
// 2.STRINGS
//  "connected"
//  "this is string"
//  "D"
//  "7"
//
// 3.BOOLENS
//   true
//   false
//
// 4 & 5. (MEANS NOTHING)
//   null
//   undefined  //error in your code

 // Basic JS
 // console.log()   Testing code
 // document.write()   Write to HTML
 // alert()        This create a popup
 // prompt()   -This create a popup and store data

 // LOGICAL OPERATOR
 // &&   -BOTH SIDES MUST BE TRUE
 // ||   -ONE SIDE MUST BE TRUE
 // !    -RETURNS THE BOOLEAN OPPOSITE

 // DOT NOTATION
 // document.write()   -Perform write function on document
 // eg.document.toUppercase document.toLowercase


 // STRING PROPERTIES
 //eg."this is a string".length  - console shows 16(number of letters)
//INDEX eg. "even"[0] - console shows e


//COMPARISON
// console answer shows inside if() is meet or not met
if(4 > 3) {
  console.log("that is true");
} else {
  console.log("that is not true");
}

// Concatenation
var firstName = 'Evan';
var lastName = 'Winston';
console.log(firstName + " " + lastName);

//if you want to write in HTML
document.write(firstName + " " + lastName);


// Values, Variables and Assignement
// you can store anything in variable

// declaration
var firstName;
// assignment - store something in variable
firstName = 'Andy'; // Andy is value

//or you can write short varsion
var firstName = 'Andy'  //declear and assigne at the same time

console.log(firstName);  // console shows Andy. No '' when you mention variable in console.log



// re-assignmeent : this gives new  value
firstName = 'Joe';
console.log(firstName); // console shows Joe now

var lastName = 'Tiffany';
//appending
console.log(firstName + " " + lastName);
lastName = 'Temple';


// prompt: prompt() is message popup typed in 'propmt' Need var to store data
var response = prompt('what is your name?');
console.log('Hello ' + response + ' !');  //in console long, it shows Hello name!)

console.log('I noticed your name has ' + response.length + ' letters in it.That is cool');
////////////////////

//Math  number
var x = 5;
var y = 4;
console.log (x + y);  // console shows 20

//Math string
var x = '5';
var y = '4';
console.log (x + y); // console shows 54

//Math  when you use string"", number becomes text. but if you use Number() you can change to number
var answer = prompt('what should we add 10 to')
var sum = Number(answer) + 10;    //eg. you type 5
console.log ("answer is: " + sum);  // answe is 15


// prompt: multiple variavel and give answer in console
var commitment = prompt('How many hours did you commit this week');

var hoursSoFar = prompt('How many hours have you coded so far?');

var remaining = commitment - hoursSoFar;

console.log('Keep up the great work! You only have ' + remaining + " hours left to go!");


// prompt: boolean answer
var age = prompt('How old are you?');
var isAdult = (age >= 18);
console.log('User is an adult: ' + isAdult)  //if it is 18 or older. cosole shows true


// prompt + if
var userAge = prompt('How old are you?');

if(userAge > 21) {
  console.log("You may enter");
} else if(userAge == 21) {
  console.log("Congraturations! You may enter")
} else if(userAge > 18) {
  console.log("You may not enter, but you can't drink")
} else {
  console.log("You shall not pass");
}

//LOOPS - FOR LOOS (LOOS ALLOWED BLOCK RUN REPETEDLY)
//SYNTAX OF LOOS ARE "FOR"
// 3 argument -1st baseline value, 2nd terminating condition, 3rd - how we change

// Basic Loop
for(var i = 0; i <= 10 ; i = i + 1) {
  console.log(i);  // answer: 0,1,2,3,4,5,6,7,8,9,10
}

///not only numbers but we can use word
var myString = "Evan Winston";

for(var i=0; i <= 10 ; i++) {
  console.log(myString[i])  //answer E v a n W i n s t o  (until 10 letters)
}


// SMARTER WAY - USE DOT NOTATION
var myString = "Evan Winston";

for(var i=0; i < myString.length; i++) {
  console.log(myString[i])  //answe E v a n W i n s t o  (until 10 letters)
}

// COMBINE WITH prompt
var myString = prompt('What is your name?');

for(var i=0; i < myString.length; i++) {
  console.log(myString[i])
}

// if STATEMENT INSIDE Loop
for(var i = 0; i < 100 ; i++) {
  if(i % 2 == 0) {    //if 1 is dividable by 2 余りが０のもの＝２で割り切れるもの
    console.log(i);
  }
}

//FUNCTIONS
//function(keyword) + Space + function name + Parenthesis() + Curly brace {} - inside {} the code to be executed
//declear and need to excuse
//the following example, function takes no argument.

function greet() {
  alert("Hello user!");
}
// alert doesn't work need to add greet() to make it happen - (when parenthesis is empty)
greet();  // need this(funtion name and parenthesis), which contain argument to plug in console

///// TWO POPUPS
var greeting = "hello";
greet();
   greeting = "hola";
greet();

function greet() {
  alert(greeting);
}

// FUNCTION, when it takes argument. x,y is parameters
//function(keyword) + Space + function name + Parenthesis() + Parameter + Curly brace {} - inside {} the code to be executed
function sum(x, y) {
  console.log(x + y);
}

sum(1,7);
sum(8,17);

////
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

greet(firstName, lastName);

function greet(first,last) {
    alert("Hi there, " + first + " " + last)
}

// ===
greet(prompt("What is your first name?"), prompt("What is your last name?"));

function greet(first,last) {
    alert("Hi there, " + first + " " + last)

/// another basic FUNCTION - shown answer to HTML
function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
// in HTML there is a tag <p id="demo"></p> - answer shows 12 to HTML inside <p>tag

////
function toCelsius(f) {
    return (5/9) * (f-32);
}
toCelsius(80);

/// ARRAY
// array needs squire brackets
var myArray = [406, "a string", false];
  //this array three data types =  it can contaien any types
  //length of this array is 3 myArray.length
  //myArray[1] is a string. myArray[1].length is 8. myArray[1][0] is a

//Array can manipulate
myArray[2] = true; // this shows false to true


// you can put multiple ARRAY
var combinedArray = [[1,2,3], ['a','b','c'], [true, false, true]];
 console.log(combinedArray[0]);


//OBJECT - similar to array but contain data
// each property must have a unique value eg.name, age,isFemale,
// if you type person.name in concole, it shows Evan
var person =
  {
    name: "Evan",
    age: 28,
    isFemale: false
  };

  //if you want to change value. eg person.isFemale = true, then change


  // LOOPING ARRAY AND OBJECT
  // YOU CAN LOOP ALL ARRAY, BUT NOT OBJECT
  var students = ['Evan', 'Matt', 'Sam', 'Chris']
  console.log(students[0]);
  console.log(students[1]);
  console.log(students[2]);
  console.log(students[3]);
  //this shows each name in cosole but very insufficient WAY
  // to make effcient, we use LOOP
  for(var i = 0; i <students.length; i++) {
    console.log(students[i]);
  } //each name shows up in console

  for(var i = 0; i <students.length; i++) {
    document.write(students[i] + '<br>');
  } //each name shows up to HTML


/// LOOPING ARRAY
var students = ['Evan', 'Matt', 'Sam', 'Chris'];

var userName = prompt("What is your name?");

for(var i = 0; i < students.length; i++){
  if(userName == students[i]) {
    console.log(students[i] + ' Found a macth!');
    break; //if name matches, loop stops
  } else {
    console.log(students[i] + ": Not a match");
  }
}

///LOOPIGN ARRAY WITH OBJECT
var students = [
  {
    name: 'Evan',
    score: 94,
    isEnrolled: false
  },
  {
    name: 'Matt',
    score: 97,
    isEnrolled: true
  },
  {
    name: 'Courtney',
    score: 100,
    isEnrolled: true
  }
];

for(var i = 0; i < students.length; i++) {
  console.log(students[i].name + " " +  students[i].score + " " + students[i].isEnrolled);
} // this shows each students name,score, isEnrolled

  // other WAY
  console.log("Student name: " + students[i].name);
  console.log("Average score: " + students[i].score);


// with if statement
for(var i = 0; i < students.length; i++) {
  console.log("Student name: " + students[i].name);
  console.log("Average score: " + students[i].score);
  if(students[i].isEnrolled == true) {
    console.log("Student is enrolled");
  } else {
    console.log("No longer an active students")
  }
}

///getElementById
document.getElementById('intro'); //this get info of innerHTML
document.getElementById('intro').innerText = 'Hello World'  //This change sentence of id of HTML

var myH1 = document.getElementById("intro");
//now you don't need to write document~~, just write myH1

var myH1 = document.getElementById('name');
var myH2 = document.getElementById('score');
var myH4 = document.getElementById('enrolled');

for(var i = 0; i < students.length; i++){
  myH1.innerText = myH1.innerText + " " + students[i].name + " ";
  myH2.innerText = myH2.innerText + " " + students[i].score + " ";
  myH4.innerText = myH4.innerText + " " + students[i].isEnrolled + " ";
}

/// input
var input = document.getElementById("studentName");
// when user typed in, it reflect
function getInfo() {
  for(var i = 0; i < sutdents.length; i++) {
    if(input.value == students[i].name) {
      myH1.innerText = students[i].name;
      myH3.innerText = students[i].score;
      myH4.innerText = "enrolled: " + students[i].isEnrolled;
       rerurn; // break is for loop, return is for function
    } else {

    }
  };
  alert("Student not found"); // put this outside of for loop
}

// Change backgroundcolor to CSS
// myDiv is id name
myDiv.style.backgroudColor = "red";


// click -> image Change
//I want my image element to change
//there is two way
function imgChange() {
  //I need to chane src attribute
  documen.getElementById('myImg').src = "img/PS-light.jpeg";
};

//second one: this is clear way. Set Var for long document.getElement~
var imageVar = document.getElementById('myImg');

  function imgChange() {
    //I need to chane src attribute
    imageVar.src = "img/PS-light.jpeg";
  };

/* image change from web address. it also works in the same way.
Also you can change multiple image */
  var imgFromWeb = [
     "https://www.prestigeanimalhospital.com/sites/default/files/08-cat-cancer-4.jpeg",
     "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/munchkinhed.png?itok=oeH4evcQ&resize=1100x619",
     "https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166"
   ];

  var newImage = document.getElementById('myImg');

   function imgChange() {
     document.getElementById('myImg').src = imgFromWeb[2];
   }

////
// change image multiple times when you click
   var imgFromWeb = [
        "img/PS_bear.jpeg",
        "https://www.prestigeanimalhospital.com/sites/default/files/08-cat-cancer-4.jpeg",
        "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/munchkinhed.png?itok=oeH4evcQ&resize=1100x619",
        "https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166"
      ];

     var newImage = document.getElementById('myImg');
     var counter = 0;  //store value counter as 0

      function imgChange() {
        counter++;  // this creates image change multiple times when button clicks
         //if image is larger than number of image, it returns to counter 0(first picture)
        if(counter >= imgFromWeb.length) {
          counter = 0;
        }
        // need [counter] to show multiple images
        newImage.src = imgFromWeb[counter];
      }

/* Way to add alt. we can crete array/object to make clear coded
create object for each image. */
var images = [
     {
       path: "img/PS_bear.jpeg",  // image path
       desc: "bear"  // image alt
     },
     {
       path: "https://www.prestigeanimalhospital.com/sites/default/files/08-cat-cancer-4.jpeg",
       desc: "staring cat"
     },
     {
       path: "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/munchkinhed.png?itok=oeH4evcQ&resize=1100x619",
       desc: "white cat"
     },
     {
       path: "https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166",
       desc: "kitten"
     }
   ];

var myImage = document.getElementById('myImg');
var counter = 0;

   function imgChange() {
     counter++;
     if(counter >= images.length) {
       counter = 0;
     }
     myImg.src = images[counter].path;  //now needs DOT NOTATION to make sure path is src
     myImg.alt = images[counter].desc;  // This creats alt to HTML
   }

// Create HTML by JS

// need .createElement to create new property to HTML
var newDiv = document.createElement('div');
  newDiv.className = "container bg-info";  //class name
  newDiv.style.minHeight = '500px';

  //.appendChild is necessary where create Element append
  document.body.appendChild(newDiv);

var newH1 = document.createElement('h1');
  newH1.textContent = "Hello World!";
  newH1.className = "display-1";
  // this time newH1 is appended to div above we just create.
  // H1 shows inside new Div now
  newDiv.appendChild(newH1);

// Create image when you click button in html

function createStuff() {
  //store div h1 image to var
  var newDiv = document.createElement('div');
  var newH1 = document.createElement('h1');
  var newImg = document.createElement('img');
  //decorate class, text, image(src,alt)
  newDiv.className = "container bg-warning";
  newH1.textContent = "javascript is actually cool!";
  newImg.src = "https://www.prestigeanimalhospital.com/sites/default/files/08-cat-cancer-4.jpeg";
  newImg.alt = "pretty car";

  //append to body(div)and newDiv(h1 and img)
  document.body.appendChild(newDiv);
  newDiv.appendChild(newH1);
  newDiv.appendChild(newImg);
}


/////

//Array & sort: Sort can change order
//Numerical sorting way
[52, 79, 33, 1, 108].sort(); // return (5) [1, 108, 33, 52, 79]

// 108 comes after 1 - to correct this, we use function below
// a-b function can result which number is the lease and the greatist
// 全ての数字に対してa & bを入れてどれが小さいかどれが大きいか計算してくれる "just remember!"
[52, 79, 33, 1, 108].sort(
  function(a,b) {
    return a - b;
  }
);    //result (5) [1, 33, 52, 79, 108]

//**another way to write above function
//store number in a variable
var numArray = [52, 79, 33, 1, 108];
//store function in a variable
var ascendingOrder = function(a, b) {
  return a - b;
}

numArray.sort(ascendingOrder); //result (5) [1, 33, 52, 79, 108]

// when you want decending numbers
ar numArray = [52, 79, 33, 1, 108];
//store function in a variable
var descendingOrder = function(a, b) {
  return b - a;  // simply opposit of ascending
}

numArray.sort(descendingOrder); //result (5) [108, 79, 52, 33, 1]


//core JavaScript II 4/9
/// reverse()
var numArray = [52, 79, 33, 1, 108];
numArray.reverse(); // return (5) [108, 1, 33, 79, 52]
//we can reverse like this but numArray stores as reversed number ) [108, 1, 33, 79, 52]
//to privent this, we need to use the following method


// Method without changing original array
//numArray keep [52, 79, 33, 1, 108] even after it was reversed
var numArray = [52, 79, 33, 1, 108];
//create a copy method and then reverse the copied variable so original numArray keep original number without reversed
//create copiedArray and store in a variable, variable contains function
var copiedArray = function(someArray) { //someArray is imaginable argument
  var newArray = [];  // create empty array
  for(var i = 0; i < someArray.length; i++) { //loop through the argument - someArray
    newArray.push(someArray[i]); //push someArray to newArray -eg, if i=1, it push 2nd item in someArray to new Array. if i=2, it push 3rd item in someArray to newArray ... so on
  }
  return newArray; //returns to new Array -> copiedArray itself
};


// copiedArray with argument(numArray) causes this statement to evaluate to copied version of numArray.
//Then use reverse() method and store it to variavle (reversedArray)
var reversedArray = copiedArray(numArray).reverse();


//** for the last sentense, you can also do:
return newArray.reverse(); //and reverse() here insted of adding later
};

var reversedArray = copiedArray(numArray);


// exercise of above Methodvar fruit = ["banana", "kiwi", "blueberry"];
fruit.push("cherry");


var copiedFruit = function(someFruit) {
  var newFruit = [];
  for (var i = 0; i < someFruit.length; i++) {
    newFruit.push(someFruit[i]);
  }
  return newFruit;
};

var reversedFruit = copiedFruit(fruit).reverse();


//Core JavaScript II 5/9
//Sortign multiple things - object
//Which object wants to sort??
var hotels = [
  {
    name: 'Quay',
    rooms: 225,
    booked: 170,
    price: 350,
    rating: 4.3
  },
  {
    name: 'Seaside',
    rooms: 155,
    booked: 135,
    price: 270,
    rating: 3.7
  },
  {
    name: 'Valley',
    rooms: 100,
    booked: 60,
    price: 400,
    rating: 4.9
  },
  {
    name: 'Gardens',
    rooms: 200,
    booked: 190,
    price: 250,
    rating: 3.9
  },
  {
    name: 'Ranch',
    rooms: 125,
    booked: 70,
    price: 200,
    rating: 4.7
  },
];

//sort one property eg.rating
hotels.sort(function(a, b) {
  return a.rating - b.rating;  //this DOT notation can sort rating
});

//sort alphabetic or string
//with this, you can access any property in the object
//this works even number!
//
hotels.sort(function(a, b) {
    if(a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
});

//create copy of array
var copyHotels = []; //variable is created outside of function - global variable

function copyArray() {
  for (var i = 0; i < hotels.length; i++) {
    copyHotels.push(hotels[i]);
  }
}
copyArray();

//it is good to crete "pure" function. It is like this

//create copy of array/Object - It is different to make copy for only array
//the following code doesn't work because
//copyHotels is declared inside function--> it is not grobal variable
//var exist only inside the function. Once function is excuted, copyHotels is gone
function copyArray(anyArray) {
  var copyHotels = [];
  for (var i = 0; i < anyArray.length; i++) {
    copyHotels.push(anyArray[i]);
  }
}

//the above is not enough, to make it work, we add retun
function copyArray(anyArray) {
  var copy = [];
  for (var i = 0; i < anyArray.length; i++) {
    copy.push(anyArray[i]);
  }
  return copy;
  // type copyArray([1,2,3,4]) in console. it retrun index
  // type copyArray(hotels) in console, it returns all array/object
}
//store in a variables for copyArray(hotels) - more useful
var hotelsCopy = copyArray(hotels);



//when accesing object property, we use DOT notation
//however we can't use DOT notation inconjenction with variable names
//alternative of dot notation is ['']

//sorting any array of object
//someArray -> what kind of array you want sort (array - hotelsCopy)
//property --> what property of object you wan to sort (property = name, rating, room...)
function sortBy(someArray, property) {  //somearray->hotels, propery could be price, rating etc
  someArray.sort(function(a, b) {
      if(a[property] > b[property]) {
        return 1;
      } else {
        return -1;
      }
  })
};
console.log(sortBy(hotelsCopy, "name")); // sort by price - you can type other propoertis such as rooms, rating etc.


////
//Week 09 Core JavaScript II 9/9
//array Method
var fruit = ['apple', 'banana', 'kiwi'];

// .push() - takes argument and adds it to the end of array and returns length of new array. Need property inside ()
// .pop() - remove the last item in the array and returns it
// .shift() - remove the first item in the array and returns it
// .unshift - adds an item before the first item in the array and returns the length of the new array. Need property inside ()


function copyArray(arr) {
  var copy = [];
  for (var i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}

var fruitCopy = copyArray(fruit);

//WEek 10 Video 2
//Review: Object methods
//for example:
//document is object. This object has a property "getElementById" which contains function
document.getElementById() // this is Method

//Object methods - this is called literal notation
//OK to include function in an object
var hotel = {
  name: 'Quay',
  rooms: 225,
  booked: 175,
  occupancyRate: function() {
     return ((this.booked / this.rooms).toFixed(2)) * 100 + "%";
     //create a method in a literal notation
     //to check console, type hotel.occupancyRate()  --> Need parenthahtis
     //toFixed(2) round only two decimals
  },
  price: 350,
  rating: 4.3
}

//this = it changes based on the contest which exist.
//above example, inside the object "this" is inside the object. "this" = hotel

///
//for in practice
var person = {
  firstname: 'sarah',
  lastname: 'temple',
  getFullName: function () {
  return this.firstname + " " + this.lastname;
 }
}

//for in "propery" - you can name anyArray
//after in, you have to name object - in this example, object is person
//for(property in person){}
// for (property in object) {
// }

for (property in person) {
  console.log(property); // return firstname, lastname, getFullname
}

//for(property in person){}
for (prop in person) {
  console.log(prop); // return key, not value firstname, lastname, getFullname
  console.log(person[prop]); // retun value - sarah, temple, f(){}
}

//to make f(){} visible, we can do:
for (prop in person) {
  if (typeof(person[prop]) == "function") {
    console.log(person[prop]());
  } else {
    console.log(person[prop]);
  }
}

////
//object constructor notation
//constructor function is indicated first Capital letter
function Person() {
  console.log(this);
  this.firstname = "kingsley", //"this" refers to object creating below in"new" = Person(), before creating, it is global(window...)
  this.lastname = "papagiorgio"
} // this function only doesn't work. To make it work, we need "new" below

var taco = new Person();
//new is keyward used with constructor function to do somethig specific
//new indicate function Person() to create object
console.log(taco); // retun Person{firstname: "kingsley, lastname: "papagiorgio"}


//1)
// //what is the purpose of constructor function?
//use like this. we can create as many as objects by setting var
function Person(first, last) {
  this.firstname = first;
  this.lastname = last;
  this.getFullName = function() {
    return this.firstname + " " + this.lastname;
  }
}

var taco = new Person("kingsley", "papagiorgio");
console.log(taco.firstname);  //retun kingsley
console.log(taco.lastname);  //return papagiorgio
console.log(taco.getFullName()); //return kinglsy + papagiorgio

//2)
//IIFE
function Person(first, last) {
this.firstname = first;
this.lastname = last;
this.getFullName = (function(x, y) {
  return x + " " + y;  //immediately Invoked Function Expression(IIFE
})(this.firstname, this.lastname)
}

var taco = new Person("kingsley", "papagiorgio");
console.log(taco.firstname);  //retun kingsley
console.log(taco.lastname);  //return papagiorgio
console.log(taco.getFullName); //return kinglsy + papagiorgio

//3)
function Person(first, last) {
  this.firstname = first;
  this.lastname = last;
}

var taco = new Person("kingsley", "papagiorgio");
var brito = new Person("evan", "Winston");
var pepper = new Person("matt", "Brody");

//console shows same result that you created above but it is faser and can save memory
//prototypal inheritance
Person.prototype.getFullName = function() {
  return this.firstname + " " + this.lastname;
}; // taco.getFullName() return kingsley papagiorgio

//another example
Person.prototype.getFormalName = function() {
  return this.lastname + ' ' + this.firstname;
}; // brito.getFormalName() Return Winston Evan


/// video 5/7
//create empty array, we push each restrant to this array
var restaurants = [];

function Restaurant(name, seat, cuisine, avgPrice, rating) {
  this.name = name;
  this.seat = seat;
  this.cuisine = cuisine;
  this.avgPrice = avgPrice;
  this.rating = rating;

 restaurants.push(this);

}

//no need to store in variable because we push to array
new Restaurant('Osha', 100, 'Thai', '$18', 4.5);
new Restaurant('Subway', 10, 'Sandwiches', '$8', 1.3);
new Restaurant('Lao Table', 90, 'Laotian', '$28', 4.7);


////multiple
///you can create another function which can be applied for both restaurant and bar function
var restaurants = [];
var bars = [];

function Restaurant(name, seat, cuisine, avgPrice, rating, array) { //add aray at the end
  this.name = name;
  this.seat = seat;
  this.cuisine = cuisine;
  this.avgPrice = avgPrice;
  this.rating = rating;

  //need this to reflect constructor function to HTML
   populateHTML(this);

  pushToArray(array, this) // "this" is created in new Restaurant
}

function Bar(name, seat, cuisine, avgPrice, rating, array) { //add aray at the end
  this.name = name;
  this.seat = seat;
  this.cuisine = cuisine;
  this.avgPrice = avgPrice;
  this.rating = rating;

  pushToArray(array, this)  // "this" is created in new Bar
}

// this function can push to multiple complete different functionality
//if you have two functions, this function apply to both functions
//push to each function
function pushToArray(array, item) {
  array.push(item); //Maybe item means restaurants/bar in new Restaurant/Bar??
}

//no need to store in variable because we push to array
new Restaurant('Osha', 100, 'Thai', '$18', 4.5, restaurants);
new Restaurant('Subway', 10, 'Sandwiches', '$8', 1.3, restaurants);
new Restaurant('Lao Table', 90, 'Laotian', '$28', 4.7, restaurants);

new Bar('Tap House', 90, 'American', '$12', 4.6, bars);
new Bar('Black Hourse', 20, 'Belguim', '$10', 2.3, bars);
new Bar('Green Bar', 30, 'Germany', '$8', 3.9, bars);



//reflect constructor function to HTML
function populateHTML(object) {
  //create elemement
  var myDiv = document.createElement('div');
  var myH1 = document.createElement('h1');
  var myH4 = document.createElement('h4');
  var myP = document.createElement('p');

  myDiv.appendChild(myH1);
  myDiv.appendChild(myH4);
  myDiv.appendChild(myP);

  //give className to myDiv
   myDiv.className = 'bg-dark text-white p-5 col-12 col-sm-5 mx-auto mb-5'; //bootstrap
  // myDiv.style.minHeight = "300px"; //other style (when you can't style with bootstrap)
  // myDiv.style.backgroundImage = "url(" + object.bgImage + ")"; //when you add image -image link is inside constructor function
  // myDiv.style.backgroundRepeat = "no-repeat";
  // myDiv.style.backgroundSize = "cover";


  // we have too many style, we can condense with setAttribute
  // setAttribute takes to double-quote inside. first quote, you can write any HTML attribute eg.onclick, id, class
  // second quotation, write style like css
  myDiv.setAttribute("style", "min-height: 300px; background-repeat: no-repeat; background-size: cover; background-image: url(" + object.bgImage + ")");
  //another example of setAttribute
  myDiv.setAttribute("onclick", "removeImage()"); //create function at the bottom

  myH1.innerText = object.name;
  myH4.innerText = object.cuisine;
  myP.innerText = "Price: " + object.price + ", Rating: " + object.rating;

  //this appendChild somewhat has to be at the end
  document.getElementsByClassName('row')[0].appendChild(myDiv);
}

//no need to store in variable because we push to array
new Restaurant('Osha', 100, 'Thai', '$18', 4.5, 'http://www.oshathai.com/uploads/5/embarcadero-5_1_.jpg');
new Restaurant('Subway', 10, 'Sandwiches', '$8', 1.3, 'https://thenypost.files.wordpress.com/2017/12/14-1f-subway-web.jpg?quality=90&strip=all&w=618&h=410&crop=1');
new Restaurant('Lao Table', 90, 'Laotian', '$28', 4.7, 'http://laotablesf.com/wp-content/uploads/2017/05/new.jpg');


//extra function to removeImage when user clicked image
function removeImage() {
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundImage = ""; //only backgroundImage removed
  }
}

// JQUERY
//document ready function
//$ -> JQuary statement
// (document) - target, in this case HTML document
// .ready - Method
$(document).ready(function() {

});

//No.1
// When I click the button,
//I want to the backgorund color of the body to change

$('button').click(function() {
    $('body').css('background-color', 'tomato');
  });


  //when you do with JavaScript document.body.style = "background-color: tomato";


///
//jquery selectors

//element/type selectors
$('button')
//if you use JavaScript, like this:
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    //do stuff
  })
}

// //class selectors
$('.box')
//if you use JavaScript, like this:
var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    //does stuff
  })
}

// //id selectors
$('#cta')
//same as var cta = document.getElementById('cta')

// //this selector
$(this)


//No.2 .show() & .hide()
//When I click the button, I want to image to hide
$('#hide').click(function() {
  $('img').hide();
})

//When I click the button, I want to image to show
$('#show').click(function() {
  $('img').show();
})

//When I click the toggle button, I want to image to hide and shows
$('#toggleImg').click(function() {
  $('img').toggle();
})

///
// No.3
//When I click on the h1, I want to chane styles
$('h1').click(function() {
  $('h1').toggleClass('new-style');
  //'new-style' is written in main.css
})

//another example
$('h1').click(function() {
  $('body').toggleClass('dark');
})

//toggle can swith two styles, write multiple class name
$('h1').click(function() {
  $('body').toggleClass('dark new-style');
})

/// directly change class ClassName
  $('h1').click(function() {
    $('h1').css('background-color', 'purple')
  })

/// change multiple style
  $('h1').click(function() {
    $('h1').css(
      { 'background-color': 'purple',
        'color': 'white',
        'text-transform': 'lowercase'
      });//use object when you add multiple
  })

// same as above -.on a
  $('h1').on('click', function() {
  $('h1').css(
    { 'background-color': 'purple',
      'color': 'white',
      'text-transform': 'lowercase'
    });//use object when you add multiple
})


//hover on and off. create fuction inside hover function
$('h1').hover(function() {
  $('h1').css({'background-color': 'purple', 'color': 'white', 'text-transform': 'lowercase'});//use object when you add multiple
  },
    function() {
      //hover off create function with empty string
      $('h1').css({'background-color': '','color': '', 'text-transform': ''});
  });

//when you want to apple h1 your cursoles are console.log(require('util').inspect(, { depth: null }));
//change h1 to this
$('h1').hover(function() {
  $(this).css({'background-color': 'purple', 'color': 'white', 'text-transform': 'lowercase'});//use object when you add multiple
  },
    function() {
      //hover off create function with empty string
      $(this).css({'background-color': '','color': '', 'text-transform': ''});
  });


//Some Math

//add numbers
//this works but has to pua a lot of sum manually
function sum(nums) {
  var total = 0;
  for(var i = 0; i <nums.length; i++) {
    total = total + nums[i];
  }
  return total;
}

//you can add as many as numbers in nums
console.log(sum([1,2])); // 1+2=3
console.log(sum([1,2,3])); //1+2+3=6
console.log(sum([1,2,3,4])); //10
console.log(sum([1,2,3,4,5])); //15
console.log(sum([1,2,3,4,5,6]));
console.log(sum([1,2,3,4,5,6,7]));


// this can calcurate (3 -> 1+2+3=6)
function numberSum(n) {
  var total = 0;
    for(var i = 1; i <= n; i++){
      total += i;
    }
    return total;
}
console.log(numberSum(5)); //means 1+2+3+4+5 = 15

//simple multiplication
//multiply 5 * number until 10
var num = 5;
for(var i = 1; i <= 10; i++) {
    console.log(num + 'x' + i + ' = ' + num * i);
} //return
//5x1 = 5
//5x2 = 10
//5x3 = 15
//5x4 = 20
//5x5 = 25
//5x6 = 30
//5x7 = 35
//5x8 = 40
//5x9 = 45
//5x10 = 50

//multiplication tabel 1x1 until 10x10
var result = 'num';
for(var i = 1; i <= 10; i++) {
  for(var j = 0; j <= 10; j++) {
    console.log(i + 'x' + j + ' = ' + i * j);
  }
}

//Advanced JavaScript video 2/9
//some tips for input form
//trim and toLowercase
var zodiac = [{
  sign: 'aquarius',
  fortune: 'lorem ipsum'
}]


function checkInput() {
  var userInput = document.getElementById('userInput').value;
  if(userInput.trim().toLowerCase() == zodiac[0].sign) {
    alart('Match found');
  } else {
    alart('no Match')
 }
}

//replace takes two argumant
//it only happends once
'evan'.replace('e', 'x') // xvan

//split()
'evan'.split()  // return array ['evan']
'evan winston'.split('n') //(4) ["eva", " wi", "sto", ""]
'this is a full sentence'.split(' ') // split between space ["this", "is", "a", "full", "sentence"]

["this", "is", "a", "full", "sentence"].join(' ') //this is a full sentence

//combination of split and join to repace letters
'evan winston'.split('n').join('x') // evax wixstox

//even replace word
'this is a full sentence'.split('full').join('short')
//"this is  short sentence"

//Advanced JavaScript video 3/9
//publsh text to the same page
function publish() {
  var article = document.getElementsByTagName('textarea')[0].value;
  document.body.innerHTML += '<p>' + article + "</p>"
} //this just shows text without paragraph

//to make paragraph,
function publish() {
  var article = document.getElementsByTagName('textarea')[0].value;
  // document.body.innerHTML += '<p>' + article + "</p>"
  document.body.innerHTML += '<p>' + article.split('\n').join("</p><hr><p class='article'>") + '</p>'; // you can add class name or you can directly style 'p' in css
}

//\n means linebreak
//FYI  console log, type   var article = document.getElementsByTagName('textarea')[0].value;
//next in console log, type article (which select text)
//then type article.split('\n') - split in the line break


///
// Advanced JavaScript Part I video 4/9
//two build-in constructor function
//1) Date()
//2) Math()

//Date() constructor function - create object
var now = new Date();
//console.log(now) return: current date/Hourse
//now.getHours()
//now.getMinutes()
//now.getSeconds()
//now.getDate() return index (eg.Sunday returns 0) *need to use array to display check W3
//now.getMonth() return index (eg.June returns 5) *need to use array to display check W3
//now.getYear() count from 1900 (eg.2018 = 118)
//now.getFullYear() return 2018
//https://www.w3schools.com/js/js_date_methods.asp

//hh.mm.ss
// var d = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
//this can't give 0 if number was one digit

const sec = (`0${now.getSeconds()}`).slice(-2); //dispay 0 when it is one digit
// it is same meaning of const sec = ('0' + now.getSeconds()).slice(-2)
console.log(sec);
const myHr = (`0${now.getHours()}`).slice(-2);
const myMin = (`0${now.getMinutes()}`).slice(-2);

console.log(myHr + ':' + myMin + ':' + sec);
//https://stackoverflow.com/questions/14529381/leading-zeros-in-minutes
//https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
//To explain, .slice(-2) gives us the last two characters of the string.
//So no matter what, we can add "0" to the day or month, and just ask for the last two since those are always the two we want.


//or another way
var now = new Date();
var hh = now.getHours();
var mm = now.getMinutes();
var ss = now.getSeconds();

if(hh < 10) {
  hh = '0' + hh
}
if(mm < 10) {
  mm = '0' + mm
}
if(ss < 10) {
  ss = '0' + ss
}


//above code has too many if, so refactor (another way)
var now = new Date();
var hh = formatTime(now.getHours());
var mm = formatTime(now.getMinutes());
var ss = formatTime(now.getSeconds());

function formatTime(timeDenom) {
  if(timeDenom < 10) {
    return '0' + timeDenom;
  } else{
    return timeDenom;
  }
}
console.log(hh + ':' + mm + ':' + ss)

//advanced JavaSecipt Part I video6/9
//Math() object
Math.random() // generates a random number Between 0 and 1

//formula
Math.floor(Math.random() * (max - min + 1) + min);
Math.floor((Math.random() * (max - min)) + min);

function randomNum(min, max) {
  Math.floor((Math.random() * (max - min)) + min);
}
randomNum(500, 2500);

//when you want to change the first letter to Capitalize
function capitalize(str) {
  str.split(str[0]).join(str[0].toUpperCase());
}



//Advanced JavaScript Part I video 6/9
var restaurants = [
  {
    name: 'Osha',
    image: 'http://www.oshathai.com/uploads/5/embarcadero-5_1_.jpg'
  },
  {
    name: 'Subway',
    image:  'https://thenypost.files.wordpress.com/2017/12/14-1f-subway-web.jpg?quality=90&strip=all&w=618&h=410&crop=1'
  },
  {
    name: 'Lao Table',
    image: 'http://laotablesf.com/wp-content/uploads/2017/05/new.jpg'
  }
];

var restaurantDiv = document.getElementById('restaurantDiv');

function chooseRestaurant() {
  var randomNum = Math.floor(Math.random() * (restaurants.length - 1 + 1)); //using formula
  // Math.floor(Math.random() * (max - min + 1) + min);
  //--> (restaurants.length -1 -0 +1) + 0) you can remove 0 here --> (restaurants.length -1 +1)) endup this formula
  restaurantDiv.innerHTML = "<h1>" + restaurants[randomNum].name + "</h1><img src= '" + restaurants[randomNum].image + "'alt= '" + restaurants[randomNum].name + "'>";
};

//number guessing getFullName
var secretNumber = Math.floor((Math.random() * 100) + 1)
var guess = Number(prompt('choose a number from 1 -100'))
var guesses = 1;
var tries = 10

while(guess != secretNumber) {
  console.log(guesses)
  if (guesses >= tries) {
    console.log('You lose')
    break
  } else if(guess > secretNumber) {
    guesses++
    guess = prompt('Guess Lower')
  } else if(guess < secretNumber) {
    guesses++
    guess = prompt('Guess Higher')
  }
}
if(guesses < tries) {
  console.log('You got it, and it only took you ' + guesses + ' guesses')
}

//Advanced Javascript PartI setTimeout() video 8/9
//setTimeout( fn(), num );
setTimeout(function(){
  alert("Hello");
}, 3000); // 3000 means 3s

//when you don't want to use military time
function formatHrs(hours) {
  if(hours > 12) {
    return hours - 12;
  } else {
    return hours;
  }
}

function ampm(time) {
  if(time.getHours() > 12) {
    return 'PM';
  } else {
    return 'AM';
  }
}

setTimeout(function() {
  document.write(getTime() //you can add anytime inside getTime()
);
}, 1000);

function getTime(time) {
  return addZero(formatHrs(time.getHours())) + " : "
  //......
}

//add 0
function addZero(time) {
  if(time < 10) {
    return '0' + time
  } else {
    return time;
  }
}

//button click
function myFunc() {
  console.log(event);
}

//you can see which key you pressed in console
window.addEventListener("keyup", myFunc)


/// repeatedly - it repeats forever
function displayTime() {
  var now = new Date()
  console.log(getTime(now)
);
  setTimeout(function() {
     dispayTime()
  }, 1000);
}
displayTime()

//when you want to stops - add counter and if statement
var counter = 0;
function displayTime() {
  counter++;
  var now = new Date()
  console.log(getTime(now)
);
  setTimeout(function() {
     displayTime()
  }, 1000);
  if(counter >= 5) {
    break;
  }
}
displayTime();
