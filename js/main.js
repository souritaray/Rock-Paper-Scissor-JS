const compScore = document.querySelector("#compScoreVal");
const userScore = document.querySelector("#userScoreVal");
const resultUser = document.querySelector("#result-user-stat");
const resultComp = document.querySelector("#result-comp-stat");
const result = document.querySelector("#result-final-stat");
const all=document.querySelector(".choices");
const images = document.querySelectorAll(".choice");

const res=document.createElement("span");
result.appendChild(res);
const user = document.createElement("img");
user.className = "userImg";
resultUser.appendChild(user);
const compChoice = document.createElement("img");
compChoice.className = "compImg";
resultComp.appendChild(compChoice);

let f=0;
let u=0;
let c=0;

images.forEach((e) => {  
  e.setAttribute("onclick", `theChoices(${e.id})`);
});
function theChoices(e) {
    f=f+1;
    if(f>5){
         if(c>u)
            res.textContent="You Lost!";
            else if(u>c)
            res.textContent="You Won!";
            else
            res.textContent="Tie!";

        let replay=document.createElement("button");
        replay.innerText="REPLAY";
        replay.style.backgroundColor="#ff6666";
        replay.style.padding="5px";
        replay.style.marginLeft="47%";
        all.replaceWith(replay);
        c=0;
        u=0;
        compScore.innerHTML=c;
        userScore.innerHTML=u;
        f=0;
        replay.addEventListener("click",()=>{
            replay.replaceWith(all);
            res.textContent="";
            user.src="";
            compChoice.src="";
            e="";
            isWinner(f,e)
        });
    }
    else{
             isWinner(f,e);
        }  
}

function computerChoice(){
   let compChoiceImg= images[Math.floor(Math.random()*3)];
   return compChoiceImg;
}
function isWinner(f,e){
user.src=e.children[0].src;
    let computer=computerChoice();
    compChoice.src= computer.children[0].src;
    switch(e.id+computer.id){
        case "sp":
        case "rs":
        case "pr":
            compScore.innerHTML=c;
            userScore.innerHTML=++u;
            break;

        case "ps":
        case "sr":
        case "rp":
            compScore.innerHTML=++c;
            userScore.innerHTML=u;
            break;
        default:
            compScore.innerHTML=c;
            userScore.innerHTML=u;
            break;
    }
}