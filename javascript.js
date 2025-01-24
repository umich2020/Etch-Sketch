let container = document.querySelector("#container");
for (let i=0; i<16*16; i++) {
    const box = document.createElement("div")
    box.classList.add("square")
    container.appendChild(box)
    box.textContent="box"
    listen(box)

}
const change = document.querySelector("#change")
change.addEventListener("click",remove)

//functions
function listen(square) {
    square.addEventListener("mouseenter", () => {
        square.classList.toggle("filled")
        square.classList.toggle("square")
        console.log("this is working")
    },{once: true})
}
function remove() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square)=> {
    container.removeChild(square)
    })
}