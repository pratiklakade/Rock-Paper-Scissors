let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepar = document.querySelector("#user-score");
const compScorepar = document.querySelector("#comp-score");


const genrateCompChoice = () =>{
 // rock, paper, scissors
 const options =["rock","paper","scissors"];
 const randIdx = Math.floor(Math.random() * 3);
 return options[randIdx];
}
const drawGame = () =>{
    console.log("!Game Draw");
    msg.innerText ="Game was draw. Play again."
    msg.style.backgroundColor = " #081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorepar.innerText = userScore;
        console.log("!You Win");
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepar.innerText = compScore;
        console.log("!You Lose");
        msg.innerText =`You Lost. ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "red"
    }

}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //genrate computer choice 
    const compChoice = genrateCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice)
    {
        //draw game
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock")
        {
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice ==="paper")
        {
            userWin = compChoice ==="scissors" ? false : true;
        }
        else if(userChoice ==="scissors")
        {
                userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id");
      
       playGame(userChoice);
    })
})