var allChilds = document.querySelectorAll('.child-container');
console.log(allChilds);
// allChilds.forEach(child=> child.classList.add('active'));
var slider = 0;
var timer;
function slide() {
    timer = setInterval(() => {
        allChilds.forEach(child => child.classList.remove('active'));
        allChilds[slider].classList.add('active');
        allChilds[slider].classList.remove('hide');
        slider++;
        if (slider > (allChilds.length - 1)) {
            slider = 0;
        }



    }, 3000);

}
slide();


allChilds.forEach(myChild => {
    myChild.addEventListener('mouseover', () => {
        clearInterval(timer);
    })
})
allChilds.forEach(myChild => {
    myChild.addEventListener('mouseout', () => {
        slide();
    })
})

var papa = document.querySelector('.container').addEventListener('click', operation);
function operation() {
    document.querySelector('.child1').classList.toggle('active');


}
