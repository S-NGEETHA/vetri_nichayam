const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissor=document.getElementById("scissor")
const result=document.getElementById("res")
const userans=document.getElementById("user")

const compans=document.getElementById("comp")
        

findrandom=()=>{
    const arr=["rock","paper","scissor"]
    let val=Math.floor(Math.random()*3)
    return arr[val];
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissor.addEventListener("click", () => playGame("scissor"));

const playGame = (userchoice) => {
    const compchoice = findrandom();
    if (userchoice === compchoice) {
        result.textContent = "It's a tie!";
        userans.textContent=`your choice : ${userchoice}`;
        compans.textContent=`Computer choice : ${compchoice}`;
    } else if ((userchoice === "rock" && compchoice === "scissor") ||
        (userchoice === "paper" && compchoice === "rock") ||
     (userchoice === "scissor" && compchoice === "paper"))
    {
        result.textContent = `You win!`
        userans.textContent=`your choice : ${userchoice}`;
        compans.textContent=`Computer choice : ${compchoice}`;
    } else {
        result.textContent = `You lose!`
        userans.textContent=`your choice : ${userchoice}`;
        compans.textContent=`Computer choice : ${compchoice}`;
    }
};

            // if(buttonValue===computerval){
            //     result.textContent="tie"
            //     console.log(buttonValue,computerval)
            // }
            // else if(buttonValue===){

            // }




