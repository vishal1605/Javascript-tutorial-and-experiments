// const grandParent = document.querySelector('.grand-parent');
// // const parent = document.querySelector('.parent');
// // const parent = Array.from(document.getElementsByClassName('parent'));
// const child = document.querySelector('.child');
// child.remove();
// // const grandParent = document.querySelector('.grand-parent');


// // console.log(grandParent.lastElementChild);
// grandParent.addEventListener('click', (e)=>{
//     console.log(e.target.textContent);
// })



// // var papa = child.parentElement;
// // var papa2 = papa.nextElementSibling;

// // console.log(papa2.className);
// // changeColor(papa2);

// function changeColor(el){
//     el.style.backgroundColor = 'gray';

// }



// var parentDiv = document.createElement('div');
// parentDiv.className = 'parent';
// var childDiv = document.createElement('div');
// childDiv.className = 'child';
// childDiv.innerText = 'child-5';
// var secondChild = childDiv.cloneNode(true);
// console.log(secondChild);
// parentDiv.appendChild(childDiv);
// parentDiv.appendChild(secondChild);
// parentDiv.removeChild();


var parent = document.querySelector('.parent').cloneNode(true);;
var grandParent = document.querySelector('.grand-parent');
console.log(parent.children[0]);
parent.children[0].innerText = 'child-5';
parent.children[1].innerText = 'child-6';
grandParent.appendChild(parent);
