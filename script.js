var rock = document.querySelector("#rock")
var paper = document.querySelector("#paper")
var scissor = document.querySelector("#scissor")
var output = document.querySelector("#output")
var playerSelection=document.querySelector("#player-output")
var computerSelection=document.querySelector("#computer-output")

var playerInput="";
rock.addEventListener("click", rockSelect)
function rockSelect(){
    playerInput="Rock";
    letsCheck()
}
paper.addEventListener("click", paperSelect)
function paperSelect(){
    playerInput="Paper";
    letsCheck()
}

scissor.addEventListener("click", scissorSelect)
function scissorSelect(){
    playerInput="Scissor";
    letsCheck()
}

function letsCheck(){
var win = false;
var computer = Math.random();
if (computer < 0.35) {
    computer = "Rock"
} else if (computer < 0.7) {
    computer = "Paper"
} else {
    computer = "Scissor"
}

var html = "";
if (playerInput === computer) {
    html += "🌐 Its a tie 🌐"
} else {
    if (playerInput == "Rock") {
        
        if (computer == "Scissor") {
            win = true
        }
    } else if (playerInput == "Paper") {        
        if (computer == "Rock") {
            win = true
        }
    } else {
        playerInput == "Scissor"
        if (computer == "Paper") {
            win = true
        }
    }
    if (win) {
        html += "🤗 You win 🤗"        
    } else {
        html += "😟 You lost 😟"        
    }
}output.innerText=`${html}`
playerSelection.innerText=playerInput
computerSelection.innerText=computer
}