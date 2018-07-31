//No.4 create an array of 5 strings
//including capitalize and extra space
var fruits = ['peach', ' pEar', 'Apple ', 'graPe', 'oRange']

//create new array to push
var newFruits = [];

//No.5 Loop through the array, change each string to lowercase and trim, and add them to a new array
for (var i = 0; i < fruits.length; i++) {
  newFruits.push(fruits[i].toLowerCase().trim())
}
//log new array
//console.log(newFruits)

//No.6 loop through the new array and log the first and last character of each string to the console
for (var i = 0; i < newFruits.length; i++) {
  //console.log("first charactor is: " + newFruits[i].slice(0,1))
  //console.log("last charactor is: " + newFruits[i].slice(-1))
}

//No.7 create a variable and store your name in it
var name = "Yukiji Nakatsuka"
var splitName = name.split('')  // "["Y", "u"...]

 for (var i = 0; i < splitName.length; i++) {
    //console.log(splitName[i])
}

//or same way
for(var i = 0; i < name.length; i++) {
    name.split('')[i];
}

//then join each single letter together and put my name back
var joinedName = splitName.join('')

//change letter 'a' to 'x'
//console.log(joinedName.split('a').join('x'))


//No.10 - regular expression & listen - haven't done
var myDiv = document.getElementById('myDiv')

$('button').click(function(){
   var inputValue = document.getElementById('inputValue').value
   var t = document.createElement('p')
   t.textContent = inputValue;
   myDiv.appendChild(t)

})
