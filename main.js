//DOM Exercises1
console.log(document);/*
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const ball  = document.getElementById("block");
ball.style.left=0+"px"
ball.style.top=0+"px"
//right
right.onclick=function(){  
let moveRight = parseInt(ball.style.left)||0
if(parseInt(ball.style.left)<405)
moveRight+=15
ball.style.left=moveRight+"px"
}
//left
left.onclick = function(){
let moveRight = parseInt(ball.style.left)||0
if(parseInt(ball.style.left)>0)
moveRight-=15
ball.style.left=(moveRight)+"px"}
 //down

 down.onclick= function(){
 let moveDown= parseInt(ball.style.top)||0
 if(parseInt(ball.style.top)<400)
 moveDown+=15
 ball.style.top=moveDown +"px"
 }
 up.onclick= function(){
    let moveUp= parseInt(ball.style.top)||0
    if(parseInt(ball.style.top)>0)
    moveUp-=15
    ball.style.top=(moveUp) +"px"
 }
*/
//Exercises2
/*
let input = document.createElement("input")
input.setAttribute("id","input")
input.value="who are you?" 
document.getElementById("container").appendChild(input)
//button
let button = document.createElement("button")
button.setAttribute("id","button" )
document.getElementById("container").appendChild(button)
//output
let output = document.createElement("h2")
output.setAttribute("id","output");
document.getElementById("container").appendChild(output)

//style
button.style.width="160px"
button.style.height="25px"
button.style.marginTop="30px"
button.innerHTML="Check Reservation"    
button.style.backgroundColor="#7f8c8d"
button.style.fontSize="15px"
input.style.fontSize="15px"
input.style.width="160px"
input.style.height="25px"
//function 

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }

button.onclick=function(){
let firsName =input.value.toLowerCase() 
if (reservations[firsName]){
    if((reservations[firsName].claimed)){
    output.innerHTML=(`sorry ${firsName} we are close`)
     } else if  (!(reservations[firsName].claimed)){
        output.innerHTML=("Wellcome"+" "+firsName)}
}else output.innerHTML="You have no reservation"
}

 /*const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
 
 let name=prompt("name?").toLowerCase()
if (reservations[name]){
    if((reservations[name].claimed)){
    console.log(`sorry ${name} we are close`)
     } else if  (!(reservations[name].claimed)){
    console.log("Wellcome"+" "+name)}
}else{//console.log("You have no reservation")
reservations[name]={claimed:true};
console.log(reservations);}*/
//
//Exercises3
/*for (let i=1 ; i<7; i++){
let div=document.createElement("div")
div.setAttribute("id",i)
document.getElementById("container").appendChild(div)
div.style.width="100px"
div.style.height="100px"
div.style.display="inline-table"

let box =document.getElementById(i)

box.onmouseenter=function(){
 box.style.backgroundColor=getRandomColor()
}

box.onmouseleave=function() {
 box.style.backgroundColor=getRandomColor()
}

const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400",
     "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
     const randomPosition = Math.floor(Math.random() * niceColors.length);
     return niceColors[randomPosition];
     }}

/*const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400",
     "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
     const randomPosition = Math.floor(Math.random() * niceColors.length);
     return niceColors[randomPosition];
     }

}*/

//Exercises4/*
/*let name= document.getElementById("inname")
let salary= document.getElementById("insalary")
let birthday= document.getElementById("inbirthday")
let phone = document.getElementById("inphone")
let submit= document.getElementById("submit")
let footer= document.getElementById("footer")

submit.onclick= function(){
    if (salary.value <10000||salary.value>16000 ){
        footer.innerHTML="Be accurate in the payroll"}
    if (name.value.length<3){footer.innerHTML="Wrong Name"}
    if (!birthday.value) {
        footer.innerHTML="Wrong Birthday"  
    }
    if (phone.value.length!=10){footer.innerHTML="Wrong Phone Number"}     
 
}*/


