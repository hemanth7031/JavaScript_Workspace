// Document Object Model(DOM)
// -----------------------------

// -> Document -> html Doc
// -> Window   -> Browser

// document
console.log(document);

// head
console.log(document.head);

// title
console.log(document.title);
// document.title = 'ui brains'

// body
console.log(document.body);

/* 
<nav>

css -> nav{}
Js  -> document.query

*/

// nav
let navTag = document.querySelector('nav');
console.log(navTag);

// anchorTag
anchorTag = document.querySelector('nav a');
console.log(anchorTag);

// inner Text
let theText = anchorTag.innerText;
console.log(theText);

// change the innerText
// anchorTag.innerText = "hemanth"



// h1 tag
let h1Tag = document.querySelector('#msg');
h1Tag.innerText = 'Good Evening';

// styles
h1Tag.style.backgroundColor = 'green';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';