const para = document.querySelector('p'); // grab teh first p
console.log(para);


const para1 = document.querySelector('body > h1'); // P in the body
console.log(para);
console.log(para);
console.log(para);

const para2 = document.querySelectorAll('p'); // select all the p -> node list
para2.forEach(para => { // loop throujgh the node list -> it's an iterable
    console.log(para2)
});

console.log(para2[0]); // select le first in the node list

const errors = document.querySelectorAll('.error'); // select all class with error name

console.log(errors);



// grab element by ID

const id = document.getElementById('page-title');


console.log(id);

const errors1 = document.getElementsByClassName('error');
// HTMLCollection -> access with index but no foreach


console.log(id);

console.log(errors1);

// grab elements by tag name

const tagName = document.getElementsByTagName('p');
console.log(tagName);
console.log(tagName[0]); // select by index


// change things within the html 

const para3 = document.querySelector('p');
console.log(para3.innerText);
//para3.innerText = "oh yes"; // set the selected element into "oh yes" in html 
para3.innerText += "oh yes"; // append to the p element

const paras1 = document.querySelectorAll('p');

paras1.forEach(par => {
    console.log(par.innerText)
    par.innerText += 'new text'; // loop trhough and add new text with +=
});

// change html in DOM

const content = document.querySelector('.content');

console.log(content.innerHTML);

// update this element
content.innerHTML = "<h2> hello les amis</h2>"; // this overwrite the content avec new tags

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`; // add this array under the H2
})

console.log(people);

// update attributes in html

const att = document.querySelector('a');
console.log(att.getAttribute('href'));
att.setAttribute("href", "https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/")
att.innerText = 'the ninja website';