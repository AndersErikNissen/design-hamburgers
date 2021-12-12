// Hamburger


// const 
// hb_container = document.querySelector("#hamburger_container"),
// one = document.querySelector("#one"),
// two = document.querySelector("#two"),
// three = document.querySelector("#three");

// hb_container.addEventListener("click", ()=> {
//     one.classList.add("right");
//     // two.classList.add("center");
//     // three.classList.add("left");
// })


// Hamburger nr2

// Begin resetting the strokes.
// const 
// burgerArray = [document.querySelector(".st0"), document.querySelector(".st1"), document.querySelector(".st2")];

// burgerArray.forEach(item => {
//     let length = item.getTotalLength();

//     item.style.strokeDasharray = length + " " + length;
//     item.style.strokeDashoffset = length - 35;
//     console.log("item!!", item.style.strokeDasharray)
// });

// document.querySelector("#nr2").addEventListener("click", () => {
//     // burgerArray.forEach(item => {
//     //     item.classList.add("movePath")
//     // })
//     for(let i = 1; i < 3; i++) {
//         burgerArray[i].classList.add("moveX")
//     }
// })

let 
test1 = document.querySelectorAll("#Hamburger #one");

test1.forEach(item => {
    console.log(item.getTotalLength())
})



document.querySelector("#nr2").addEventListener("click", function() {
    if(!this.classList.contains("active")) {
        this.classList.add("active")
    } else {
        this.classList.remove("active")
    }
})
document.querySelector("#nr3").addEventListener("click", function() {
    if(!this.classList.contains("active")) {
        this.classList.add("active")
        if (this.classList.contains("inactive")) {
            this.classList.remove("inactive")
        }
    } else {
        this.classList.remove("active")
        this.classList.add("inactive")
    }
})

