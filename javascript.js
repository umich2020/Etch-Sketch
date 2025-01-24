let container = document.querySelector("#container");
for (let i=0; i<16*16; i++) {
    const box = document.createElement("div")
    box.classList.add("square")
    container.appendChild(box)
    listen(box)

}
const change = document.querySelector("#change")
change.addEventListener("click", () =>{
    remove()
    let userInput = prompt("this is a test message",16)
    if (userInput <= 100 && userInput>=1) {
        createSquares(userInput)
    } else {
        alert("size of sqaures has to be lower than 101 and greater than 0")
    }
})

//functions
function createSquares(size) {
    let pxSize = 480/size + "px"
    console.log(pxSize)
    for (let i=0; i<size*size; i++) {
        const box = document.createElement("div")
        box.classList.add("square")
        container.appendChild(box)
        listen(box)
        document.getElementsByClassName("square")[i].style.width = pxSize
        document.getElementsByClassName("square")[i].style.height = pxSize

    }
}
function listen(square) {
    square.addEventListener("mouseenter", () => {
        square.classList.add("filled")
        //square.classList.toggle("square")
    })
}
function remove() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square)=> {
    container.removeChild(square)
    })
}