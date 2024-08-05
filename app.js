let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let winnerMsg=document.querySelector(".winnermsg");
let newGame=document.querySelector("#newgame");
let reset=document.querySelector("#resetbtn");
let turn=true;
let no_of_turns=0;
let win=false;
const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
for(let box of boxes){
    box.addEventListener('click',()=>{
        if(turn===true){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        no_of_turns+=1;
        console.log(no_of_turns);
        winning();
        if(no_of_turns===9)
            draw();
        box.disabled=true;
    });
}
function disableBoxes(){
    for(let box of boxes){
        box.disabled=true;
    }
}
function enableBoxes(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}
function displayWinner(winner){
    let player = (winner=="X") ? "One" : "Two";
    winnerMsg.innerText=`Congratulations Player ${player} Won the Match!!!`;
    msgContainer.classList.remove("hide");
}
function winning(){
    for(let pattern of patterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                win=true;
                displayWinner(p1);
                disableBoxes();
            }
        }
    }
}
function restart(){
    turn=true;
    win=false;
    no_of_turns=0;
    msgContainer.classList.add("hide");
    enableBoxes();
}
function draw(){
    if(no_of_turns===9 && win===false){
        winnerMsg.innerText="Draw Match - Better Luck Next Time !!!";
        msgContainer.classList.remove("hide");
    }
}
newGame.addEventListener('click',restart);
reset.addEventListener('click',restart);