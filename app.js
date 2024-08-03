let boxes = document.querySelectorAll(".box");
let reset_but = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let newGamebtn = document.querySelector("#new-button");
let msg = document.querySelector("#msg");
//let resetBtn = document.querySelector("#reset");

let turn0  = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    console.log("box was clicked");
    //box.innerText = 'abc';
    
    if(turn0){
        box.innerText = "O";
        
        turn0 = false;
    } else {
        box.innerText = 'X';
        turn0 = true;
    }
    box.disabled = true;
    
    checkWinner();
  })
})


 const showWinner=(winner) =>{
       msg.innerText = `congratulations, winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableboxes();
 }


const checkWinner=()=>{
     for(pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText; 
       
       if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
        if(pos1Val === pos2Val && pos2Val ===pos3Val){
          console.log("winner", pos1Val);
           showWinner(pos1Val);
        }
       }
     }
}

const resetGame = () =>{
      turn0 = true;
      Enableboxes();
}

const disableboxes = () => {
    for(let box of boxes){
      box.disabled = true;

    }

}

const Enableboxes = () => {
  for(let box of boxes){
    box.disabled = false;
     box.innerText = "";
  }

}

 newGamebtn.addEventListener("click",resetGame);
 reset_but.addEventListener("click",resetGame);





