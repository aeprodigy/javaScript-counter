let count = 0;
let saveEl = document.getElementById("save-el");
let counter = document.getElementById("count");
function increment(){
    count +=1;
    counter.textContent = count;
}

function save(){
    let vision = " -  ";
    vision =count + vision;
   if(count<1){
    document.getElementById("save-el").style.color = "Red"
   }else if(count>1){
    document.getElementById("save-el").style.color = "lime"
   }
    saveEl.textContent += vision;
    console.log(vision);
    counter.textContent = 0;
    count=0;
   
}

/*let count = document.getElementById("count").innerText=7;
let elCount = 0


function increment(){
    count.elCount ++;
    console.log(count);
}
*/