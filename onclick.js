let countEl = document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
// let delEl= document.getElementById("delete-btn")
var delEl = document.getElementById("delete-btn");
let count= 0 ;
console.log(saveEl);
function increment(){
   count +=1;
   countEl.innerText=count
   return true;
  }

function save() {
  let countStr=  count + " - ";    
  saveEl.textContent += countStr;

  console.log(count);
  return true;
}

function del(){
 
 if(saveEl){
  saveEl.innerHTML="";
 }

//  if(countEl){
//   countEl.innerText="";
//   count=0;
//  }
//  }
if (countEl ) {
  countEl.innerHTML="";
  countEl.innerText=0;
count=0;
}
function add(){
 
   
}
function sub(){
 
   
}
function sss(){
 
   
}
function adaaaad(){
 
   
}

 
}









