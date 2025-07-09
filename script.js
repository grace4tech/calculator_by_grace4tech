window.addEventListener("load", function () {
  document.body.classList.add("show");

  document.querySelectorAll(".load").forEach((element) => {
    element.classList.add("loaded");
  });
});

const buttons = document.querySelectorAll("#Calculator button");
buttons.forEach(element=>{
    element.addEventListener("click", ()=>{
element.classList.add("active");
setTimeout(()=>{
    element.classList.remove("active");
} ,300);
    })
})

function calculator(){

const equationValues = document.querySelectorAll(".equationValues");
const calcOutput = document.getElementById("calcOutput");
const ac = document.getElementById("AC");
let equation = [];

equationValues.forEach(element  =>{
element.addEventListener("click" , function(){
    equation.push(element.value);
     if(equation.join("") ==="0"){
ac.textContent = "AC";
equationOutput.textContent="";
} else{
    ac.textContent = "X";
}
    calcOutput.textContent = equation.join(""); 
   

});
})


ac.addEventListener("click" , ()=>{
equation.pop();
if(equation.length === 0){
    calcOutput.textContent = "0";
    ac.textContent = "AC";
    equationOutput.textContent="";
}else{
calcOutput.textContent = equation.join(""); 
ac.textContent = "X";

}
})

function adjustFont() {
  const length = calcOutput.textContent.length;

  if (length > 10 && length <= 15) {
    calcOutput.style.fontSize = "25px";
  } else if (length > 15 && length <= 20) {
    calcOutput.style.fontSize = "20px";
  } else if (length > 20) {
    calcOutput.style.fontSize = "16px";
  } else {
    calcOutput.style.fontSize = "30px"; // your default size
  }
}


//SOLVING
/* ONE STRING */

const equalSign = document.getElementById("equal");
const equationOutput = document.getElementById("equationOutput");

equalSign.addEventListener("click" , function(){
let oneEquation = "";
for(let i=0 ; i < equation.length ; i++){
oneEquation+= equation[i];
}
let string = oneEquation;

/* CALCULATE */
let result = eval(string)
equationOutput.textContent = string;
equation = [result];
calcOutput.textContent = equation.join(""); 
if(result =="0"){
ac.textContent = "AC";
};
});

//MODE SWITCHER
const calc = document.querySelector(".calc");
const calcul = document.querySelector(".Calculator");
const orangeBtn = document.querySelectorAll(".orangeBtn");

calc.addEventListener("click" , function(){
calcul.classList.toggle("dark_Mode");
calc.classList.toggle("cli");
equationValues.forEach(el => el.classList.toggle("buttonsDark"));
orangeBtn.forEach(el => el.classList.toggle("orangeBtnDark"));
})

} calculator();

