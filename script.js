'use strict';
let firstElem = document.getElementById('headerTwo');
    console.log(firstElem);

//let section = document.getElementsByTagName("section");
//console.log(section);

let firstSection = document.querySelector('.firstSection');
    let firstElementInSection = firstSection.firstElementChild;
    console.log(firstElementInSection);

let fifthListItem = document.querySelector('ul li:nth-child(5)');
    console.log(fifthListItem);

let LastElem = document.getElementsByClassName("hatredLevelBlock");
    console.log(LastElem);