let userscore=0;
let machinescore=0;

const userScoreSheet=document.querySelector("#user-score");
const machineScoreSheet=document.querySelector("#machine-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");


const generateMachineChoice=()=>{
    const options = ['rock', 'paper','scissor'];
    const randomIndex=Math.floor(Math.random()*3);  /*because random only gives between 0-0.999 and * with 3 makes
    it's range inbetween 0-2.99 and applying floor makes it whole number*/
    return options[randomIndex];
}

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was draw, Play again";
    msg.style.backgroundColor ='#B2BEB5';
}
const showWinner=(userWin,userChoice,MachineChoice)=>{
    if (userWin){
        userscore++;
        // console.log("You Won!");
        userScoreSheet.innerText=userscore;
        msg.innerText=`You Won! ${userChoice} beats ${MachineChoice}`;
        msg.style.backgroundColor ='#00A36C';
    }
    else{
        machinescore++;
        // console.log("You Lose!");
        machineScoreSheet.innerText=machinescore;
        msg.innerText=`You Lose! ${MachineChoice} beats ${userChoice}`;
        msg.style.backgroundColor ='#E0115F';
    }
}
const playgame=(userChoice)=>{   //modular way of programming
    console.log("User choice=",userChoice);
    const MachineChoice=generateMachineChoice();
    console.log("Machine choice=" ,MachineChoice);
    if (userChoice==MachineChoice){
        //draw game
        drawGame();
    }else{
        userWin=true;
        if(userChoice=="rock"){
            userWin=MachineChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=MachineChoice==="scissor"?false:true;
        }
        else{  //when user is scissor
            userWin=MachineChoice==="rock"?false:true; 
        }
        showWinner(userWin,userChoice,MachineChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("a choice was clicked",userChoice);
        playgame(userChoice);
    });
});