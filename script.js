//Finding Cercumference of cercle

const pi = 3.14;
let  radius;
let result;

document.getElementById('submit-btn').onclick= function () {
radius =document.getElementById('user-input').value; 

cercumference = 2*pi*radius;

console.log( 'The Cercumference is ' + cercumference + ' CM');

result= document.getElementById('result').textContent = `Cercumference = ${cercumference} CM`

result=document.getElementById('result').style.color='blue'

document.getElementsByTagName('body')[0].style.backgroundColor='pink';


}