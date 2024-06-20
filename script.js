let buttons = document.querySelectorAll(".switch");
let inner=document.querySelector(".display");
let ac=document.querySelectorAll(".edit");
let is=document.querySelector(".is");
let del=document.querySelector(".del");

function remove(){
    let man=inner.value;
    man=man.slice(0,-1);
    inner.value=man;
}
function addToDisplay(button) {
    document.querySelector(".display").value += button;
}
function clearDisplay(){
    inner.value='';
}
function perc(a,b){
    return a*b/100;
}
function calculate(){
    let expression=inner.value;
    let result=eval(expression);
    inner.value=result;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        addToDisplay(button.value);
    });
});

del.addEventListener("click",()=>{
    remove();
})

ac.forEach(box=>{
    box.addEventListener("click",()=>{
        clearDisplay();
    })
})
is.addEventListener("click",()=>{
    calculate();
})