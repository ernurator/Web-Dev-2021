// let a = document.getElementsByTagName('h1');
// let a = document.getElementById('btn');
// let a = document.getElementsByClassName('box');
// let a = document.querySelector('html body .box')
let a = document.querySelector('.box')

// console.log(a);
a.innerHTML = 'hello message';

a.style.color = 'blue';
a.style.fontSize = '25px';
a.style.fontWeight = 'bold';


let btn = document.querySelector('#btn');
// console.log(btn);
btn.style.backgroundColor = 'yellow';
btn.style.border = '1px blue solid';
btn.style.borderRadius = '5px';
btn.style.padding = '5px 15px';

console.log(btn.getAttribute('data-id'));
btn.setAttribute('data-id', 111);

console.log(btn.offsetTop);
console.log(btn.offsetLeft);


let text = document.createElement('h3');
text.innerHTML = 'New created H3 from JS!';

let container = document.querySelector('.container');
container.appendChild(text); // will be at the end of .container


// alert('Msg');
// let res =  confirm('Ok?'); // returns boolean
// let age = prompt('Enter your age', 18);
// console.log(age);


let i = 0;
function show() {
    console.log(i++);
}

btn.addEventListener('click', show)

