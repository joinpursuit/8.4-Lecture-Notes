//console.log('Hello')
const body = document.querySelector('body');
//console.log(body)

// All Span Tags: Will receive a Data type:Node list. Not an array but similar to an array (we can run a foreach)
const spantastic = document.querySelectorAll('span');
//console.log(spantastic)

// Loop through the .forEach() executed three times
spantastic.forEach(span=>{
  console.log(span)
});

// See text within our HTML span
const content = document.querySelector('span').textContent;
//console.log(content);

// Call the span by the class
//const emoji = document.querySelector('.emoji').textContent;
//console.log(emoji);

//HTML Content of the H1 tag (shows the format within the H1 HTML)
const h1 = document.querySelector('h1').innerHTML;
//console.log(h1);

//Editing the property of the class emoji but doesn't change the Actual HTML
const emoji = document.querySelector('.emoji')
emoji.textContent = "John"
console.log(emoji)
// What is the difference between a property and a method? 
console.log(typeof document)

// How do we get rid of the emoji?
emoji.remove()

//Calling the Element by Id
//const rocket = document.querySelector('#rocket')
const rocket = document.getElementById('rocket');
console.log(rocket);