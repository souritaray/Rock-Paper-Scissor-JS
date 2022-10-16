let user_choice="";
let comp_arr=document.querySelectorAll(".choice");
let comp_choice="";
let c=0;
let span=document.createElement("span");
document.querySelector("#result-final-stat").appendChild(span);

// Creating photo of rock & duplicating it to use in different places//
let rockpic=document.createElement("img");
rockpic.src=document.querySelector("div#r img").src;
rockpic.style.width="30px";
rockpic.style.marginLeft="10px";
let cln=rockpic.cloneNode(true);

// Creating photo of paper & duplicating it to use in different places//
let paperpic=document.createElement("img");
paperpic.src=document.querySelector("div#p img").src;
paperpic.style.width="30px";
paperpic.style.marginLeft="10px";
let paper_cln=paperpic.cloneNode(true);

// Creating photo of scissor & duplicating it to use in different places//
let scissorpic=document.createElement("img");
scissorpic.src=document.querySelector("div#s img").src;
scissorpic.style.width="30px";
scissorpic.style.marginLeft="10px";
let scissor_cln=scissorpic.cloneNode(true);

// User clicking rock
document.querySelector("#r").addEventListener("click",function(){
   user_choice="r";
   let gg=comp_arr[Math.floor(Math.random()*comp_arr.length)];
   comp_choice=gg.id;
   c=0;
   rockpic.style.display="none";
   paperpic.style.display="none";
   scissorpic.style.display="none";
   cln.style.display="none";
   paper_cln.style.display="none";
   scissor_cln.style.display="none";
   document.querySelector("#result-user-stat").insertAdjacentElement('beforeend',rockpic);
   gamefunc1(user_choice,comp_choice);
   
});

// User clicking paper
document.querySelector("#p").addEventListener("click",function(){
   user_choice="p";
   c=0;
   let gg=comp_arr[Math.floor(Math.random()*comp_arr.length)];
   comp_choice=gg.id;
   rockpic.style.display="none";
   paperpic.style.display="none";
   scissorpic.style.display="none";
   paper_cln.style.display="none";
   scissor_cln.style.display="none";
   cln.style.display="none";
   document.querySelector("#result-user-stat").insertAdjacentElement("beforeend",paperpic);
   gamefunc2(user_choice,comp_choice);
});

// User clicking scissor
document.querySelector("#s").addEventListener("click",function(){
   user_choice="s";
   c=0;
   let gg=comp_arr[Math.floor(Math.random()*comp_arr.length)];
   comp_choice=gg.id;
   rockpic.style.display="none";
   paperpic.style.display="none";
   scissorpic.style.display="none";
   scissor_cln.style.display="none";
   cln.style.display="none";
   paper_cln.style.display="none";
   document.querySelector("#result-user-stat").insertAdjacentElement("beforeend",scissorpic);
   gamefunc3(user_choice,comp_choice);
});

//***********ROCK************//


function gamefunc1(user_choice,comp_choice){
  if(user_choice=="r"){
   
   if(comp_choice=="p"){
      document.querySelector("#userScoreVal").textContent="0";
      document.querySelector("#compScoreVal").textContent="1";
      rockpic.style.display="inline";
      paperpic.style.display="inline";
     document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",paperpic);
      span.textContent="Computer";
   }
   else if(comp_choice=="s"){
      document.querySelector("#userScoreVal").textContent="1";
      document.querySelector("#compScoreVal").textContent="0";
      rockpic.style.display="inline";
      scissorpic.style.display="inline";
      document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",scissorpic);
      span.textContent="User";
      
   }
   else{  
      document.querySelector("#userScoreVal").textContent="0";
      document.querySelector("#compScoreVal").textContent="0";
      rockpic.style.display="inline";
      cln.style.display="inline";
      document.querySelector("#result-comp-stat").insertAdjacentElement('beforeend',cln); 
      span.textContent="Tie";
   }
  }
}

//******PAPER*******//

function gamefunc2(user_choice,comp_choice){
   if(user_choice=="p"){
      
      if(comp_choice=="r"){
         document.querySelector("#userScoreVal").textContent="1";
         document.querySelector("#compScoreVal").textContent="0";
        paperpic.style.display="inline";
      rockpic.style.display="inline";
      document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",rockpic);
      span.textContent="User";
         
      }
      else if(comp_choice=="s"){
         document.querySelector("#userScoreVal").textContent="0";
         document.querySelector("#compScoreVal").textContent="1";
         paperpic.style.display="inline";
         scissorpic.style.display="inline";
         document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",scissorpic);
         span.textContent="Computer";
      }
      else{
         document.querySelector("#userScoreVal").textContent="0";
         document.querySelector("#compScoreVal").textContent="0";
         paperpic.style.display="inline";
         paper_cln.style.display="inline";
         document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",paper_cln);
         span.textContent="Tie";
      }
     }
   
}

//*****SCISSOR******//
  
function gamefunc3(user_choice,comp_choice){
   if(user_choice="s"){
      
      if(comp_choice=="r"){
         document.querySelector("#userScoreVal").textContent="0";
         document.querySelector("#compScoreVal").textContent="1";
         scissorpic.style.display="inline";
         rockpic.style.display="inline";
         document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",rockpic);
         span.textContent="Computer";
         
      }
      else if(comp_choice=="p"){
         document.querySelector("#userScoreVal").textContent="1";
         document.querySelector("#compScoreVal").textContent="0";
         scissorpic.style.display="inline";
         paperpic.style.display="inline";
         document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",paperpic);
         span.textContent="User";
      }
      else{
         document.querySelector("#userScoreVal").textContent="0";
         document.querySelector("#compScoreVal").textContent="0";
         scissorpic.style.display="inline";
         scissor_cln.style.display="inline";
         document.querySelector("#result-comp-stat").insertAdjacentElement("beforeend",scissor_cln);
         span.textContent="Tie";
      }
     }
}
