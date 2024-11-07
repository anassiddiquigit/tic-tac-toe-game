let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#ngamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turno = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        
        if(turno){
            box.innerText = "O"
            turno = false;
        }else{
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true;
        checkwinner();
        
    });
});

const resetgame = () => {
      turno = true;
      enableboxes();
      msgcontainer.classList.add("hide");
}

const enableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
};
const showwinner = (winner) =>
{
msg.innerText = `Congratulations You Are The Winner ${winner}`;
msgcontainer.classList.remove("hide");

};

const checkwinner = () =>{
    for(let pattern of winpatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                disableboxes();
                showwinner(pos1val);
            }
        }
    }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);