const progress = document.getElementById("progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", function(){
    currentActive++;
    if(currentActive>circle.length){
        currentActive=circle.length;
        console.log(currentActive);
    }
    update();
})

prev.addEventListener("click", function(){
    currentActive--;
    if(currentActive<1){
        currentActive=1;
    }
    update();     
})

function update(){
    circle.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add("active");

        }
        else{
            circle.classList.remove("active");
        }
    });
}

// const actives = document.querySelectorAll(".active");
//     progress.
