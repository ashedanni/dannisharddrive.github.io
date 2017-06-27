var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/lunar_farm.jpg') {
		myImage.setAttribute('src','images/loner.jpg');
	} else {
		myImage.setAttribute('src','images/lunar_farm.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Enter your Name, FOOL and keep 0n sucking the shit I supply :) !!!');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is some next level shit, ' + myName + '!!!';
}

myButton.onclick = function() {
	setUserName();
}
