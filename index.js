var divs=[];
var width=window.innerWidth/16;
for(let i=0; i<16*16; i++){
    const d=document.createElement("div");
    d.style.border="solid 1px black";
    
    d.addEventListener("mouseenter",mouseEnter);
    d.addEventListener("mouseleave",mouseLeave);

    divs.push(d);
}
const container=document.querySelector(".container");

divs.forEach(e=>{
    container.appendChild(e);
});

function mouseEnter(event){
    console.log(event.target);
    event.target.style.background="cyan";
}

function mouseLeave(event){
    event.target.style.background="white";
}