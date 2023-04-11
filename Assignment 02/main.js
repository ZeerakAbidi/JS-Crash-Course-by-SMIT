// Assignment 02
// SMIT JS Crash Course 

// Task 01

function createAdder(num) {
    return function(value) {
      return value + num;
    }
  }
  
var addNum = createAdder(5);
document.write(addNum(12) + "<br>");
document.write(addNum(28) + "<br>");


// Task 02
  
// function searchArray(array, value) {
//     // base case: if the array is empty, return false
//     if (array.length === 0) {
//       return false;
//     }
  
//     // check if the first element of the array matches the value
//     if (array[0] === value) {
//       return true;
//     }
  
//     // recursive case: call the searchArray function with the rest of the array
//     return searchArray(array.slice(1), value);
// }
  
  
//   var myArray = [1, 2, 3, 4, 5, 42, 6, 7, 8, 9];
//   if (searchArray(myArray, 17)) {
//     document.write("Found it!");
//   } else {
//     document.write("Not found.");
//   }
  

// Task 03

// function addParagraph(text) {
//     // Create a new <p> element
//     const paragraph = document.createElement('p');
//     paragraph.textContent = text;
//     const body = document.querySelector('body');
//     // Append the <p> element to the <body> element
//     body.appendChild(paragraph);
// }
  
// addParagraph('This is a new paragraph.');
  
  
// Task 04

// function addListItem(text) {
//     // Get a reference to the unordered list
//     const list = document.querySelector('ul');
  
//     // Create a new list item element
//     const newItem = document.createElement('li');
  
//     // Set the text content of the new item
//     newItem.textContent = text;
  
//     // Add the new item to the end of the list
//     list.appendChild(newItem);
// }

// addListItem('New list item Added');
// addListItem('New list item Added Twice');


// Task 05

// function changeBackgroundColor(element, color) {
//     // Set the background color of the element
//     element.style.backgroundColor = color;
// }
// function changeColor(element, color) {
//     // Set the color & padding of the element
//     element.style.color = color;
//     element.style.padding = "10px";
// }

// const myElement = document.querySelector('#my-heading');
// changeBackgroundColor(myElement, 'blue');
// changeColor(myElement, 'white');

  
// Task 06

// function saveToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
// }

// const myObject = {name: Zeerak, age: 24};
// saveToLocalStorage('myObject', myObject);
// const storedObject = JSON.parse(localStorage.getItem('myObject'));
// console.log(storedObject);


// Task 07

// function getObjectFromLocalStorage(key) {
//     var value = localStorage.getItem(key);
//     return JSON.parse(value);
// }

// function displayObject() {
//     var retrievedObject = getObjectFromLocalStorage("myKey");
//     document.getElementById("result").innerHTML = JSON.stringify(retrievedObject);
// }


// Task 08

// function saveObjectToLocalStorage(object) {
//     for (var key in object) {
//       var value = object[key];
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//     var newObject = {};
//     for (var i = 0; i < localStorage.length; i++) {
//       var key = localStorage.key(i);
//       var value = localStorage.getItem(key);
//       newObject[key] = JSON.parse(value);
//     }
//     return newObject;
// }

// function displayObject() {
//     var myObject = { name: "John", age: 30 };
//     var newObject = saveObjectToLocalStorage(myObject);
//     document.getElementById("result").innerHTML = JSON.stringify(newObject);
// }
