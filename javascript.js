let container = document.querySelector("#container");
for (let i=0; i<16*16; i++) {
    const box = document.createElement("div")
    box.classList.add("square")
    container.appendChild(box)
    box.textContent="box"
    listen(box)

}
function listen(square) {
    square.addEventListener("mouseenter", () => {
        square.classList.add("filled")
        square.classList.remove("square")
        console.log("this is working")
    })
}