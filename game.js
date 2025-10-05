let userScore = 0;
let computerScore = 0;

const choices=document.querySelectorAll('.choice');
const msg= document.querySelector('#msg');

const userscorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#computer-score');
const computerchoice= ()=>{
    const options=['rock','paper','scissors'];
    const rid=Math.floor(Math.random()*3);
    return options[rid];

};

const drawgame=()=>{
    
    msg.innerText= "It's a tie!";
    msg.style.color="grey";
};

const showwinner=(userwin, userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText= 'User wins! ';
        msg.style.color="green";
    
    }else{
        computerScore++;
        compscorepara.innerText=computerScore;
        msg.innerText= "You lose! Computer wins! ";
        msg.style.color="red";
    }
};



const playgame=(userchoice)=>{
   const compchoice=computerchoice();
if(userchoice===compchoice){
       drawgame();
    }else{
    let userwin=true;
    if(userchoice==='rock'){
        //scissors,paper
        userwin=compchoice==="paper"? false : true;
    }else if(userchoice==='paper'){
        userwin=compchoice==="scissors"? false : true;
    }else{
        userwin=compchoice==="rock"? false : true;
    }
    showwinner(userwin, userchoice, compchoice); 
    }


};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    });

});




