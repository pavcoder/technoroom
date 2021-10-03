const header = document.querySelector(".page_header");
header.classList.add("header_appeared");
const desc = document.querySelector(".desc");
desc.classList.add("desc_appeared");
const squares = document.querySelectorAll(".square");
setTimeout(()=>{
    for(let square of squares){
        square.classList.add("square_appeared");
    }
},1500);