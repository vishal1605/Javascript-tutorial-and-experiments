var allChilds = document.querySelectorAll('.child-container');
console.log(allChilds);
// allChilds.forEach(child=> child.classList.add('active'));
var slider = 0;
var timer;
function slide() {
    timer = setInterval(() => {
        allChilds.forEach(child => child.classList.remove('active'));

        if (allChilds[slider].classList.contains('child1')) {
            allChilds[slider].classList.remove('child1');
            
        }
        allChilds[slider].classList.add('active');
        if (slider==2) {
            console.log("working");
            allChilds[0].classList.add('child1');
            
        }
        
        slider++;
        if (slider > (allChilds.length - 1)) {
            slider = 0;
        }



    }, 3000);

}
slide();

allChilds.forEach(myChild=>{
    myChild.addEventListener('mouseover', ()=>{
        clearInterval(timer);
    })
});

allChilds.forEach(myChild=>{
    myChild.addEventListener('mouseout', ()=>{
        slide();
    })
})