let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("btn-reset")
let newgamebtn = document.getElementById("newgame");
let masgcontainer = document.querySelector(".msg-container");
let winner = document.querySelector("#winner");
let turn0 = true;

const winarr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const resetgame = () => {
    enablebox();
    turn0 = true;
    masgcontainer.classList.add("hide");
}

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showwinner = (win, x) => {
    disablebox();
    if (x == true) {
        winner.innerText = `Congratulation! Winner is ${win}`;
    }
    else {
        winner.innerText = `${win}`;
    }
    masgcontainer.classList.remove("hide");
}
const checkwinner = () => {
    let abc = false;
    for (let element of winarr) {
        let pos1val = boxes[element[0]].innerText;
        let pos2val = boxes[element[1]].innerText;
        let pos3val = boxes[element[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner", pos1val);
                abc = true;
                showwinner(pos1val, true);
                return;
            }
        }
    }
    if (!abc) {
        let allfilled = true;
        boxes.forEach((box) => {
            if (box.innerText === "") {
                allfilled = false;
            }
        });
        if (allfilled) {
            showwinner("Match Draw!", false);
        }
    }
}

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);