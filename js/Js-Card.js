var allChilds = document.querySelectorAll('.child-container');
console.log(allChilds);
// allChilds.forEach(child=> child.classList.add('active'));
var slider = 0;
var timer = setInterval(() => {
    allChilds.forEach(child=>child.classList.remove('active'));
    allChilds[slider].classList.add('active');
    allChilds[slider].classList.remove('hide');
    slider++;
    if(slider>(allChilds.length-1)){
        slider=0;
    }

    
   
}, 2000);
