var divs=[];
const btn=document.querySelector("button");
const input=document.querySelector("input");
const container=document.querySelector(".container");
var currentDivSize=0;

function updateGrid(event){
    event.preventDefault();
    if(input.value==""){
        console.log("nothing to update");
        return;
    }
    
    if(!Number.isInteger(Number(input.value))){
        console.error("\""+input.value+"\"","is not a valid value");
        input.value="";
        return;
    }

    if(Number(input.value)>100){
        alert("max number is 100");
        console.error("Max number is 100");
        return;
    }
    if(Number(input.value)<=0){
        alert("min number is 1");
        console.error("Min number is 1");
    }

    fillDivs(Number(input.value));

}

function fillDivs(size=16){
    if(currentDivSize==(size*size)){
        console.log("currentDivSize:",currentDivSize);
        console.log("size^2:",size*size);
        return;
    }

    if(divs.length>0){
        divs.forEach(element=>{
            container.removeChild(element);
            //console.log("removing element", element);
        });

        for(; divs.length>0;){
            divs.pop();
        }

    }

    for(let i=0; i<size*size; i++){
        const d=document.createElement("div");
        const id=document.createElement("span");
        id.textContent=i;
        d.appendChild(id);
        d.style.border="solid 1px black";
        
        d.addEventListener("mouseenter",mouseEnter);
        d.addEventListener("mouseleave",mouseLeave);
        
        d.style.width="calc(800px/"+(size>1?size+1:1)+")";
        if(i==0) console.log("width",d.style.width);
        d.style.height="calc(800px/"+(size>1?size+1:1)+")";
        if(i==0) console.log("height",d.style.width);

        divs.push(d);
    }
    divs.forEach(e=>{
        container.appendChild(e);
    });

    currentDivSize=divs.length;
    return;
}

btn.addEventListener("click", updateGrid);

function mouseEnter(event){
    //console.log(event.target);
    event.target.style.background="cyan";
}

function mouseLeave(event){
    event.target.style.background="transparent";
}


//sequence starts
fillDivs();