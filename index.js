var divs=[];
var width=window.innerWidth/16;
for(let i=0; i<16*16; i++){
    const d=document.createElement("div");
    d.style.border="solid 1px black";
    d.style.width=width;
    divs.push(d);
}
const container=document.querySelector(".container");

divs.forEach(e=>{
    container.appendChild(e);
})
