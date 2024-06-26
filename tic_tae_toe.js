let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-button");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let new_button = document.querySelectorAll(".new-btn");
let match_draw = document.querySelector(".match-draw");
let msg_draw = document.querySelector("#msg-draw");

let PlayerO = true; //storing the value of PlayerO
let count = 0;

const winning = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (PlayerO) {
      box.innerText = "O";
      box.style.color = "#4f3130";
      PlayerO = false;
    } else {
      box.innerText = "X";
      box.style.color = "#753742";
      PlayerO = true;
    }
    box.disabled = true;
    count++;
    checkwinner();
    if (count === 9) {
      Draw_game();
    }
  });
});

const checkwinner = () => {
  winning.forEach((position) => {
    let posval1 = boxes[position[0]].innerText;
    let posval2 = boxes[position[1]].innerText;
    let posval3 = boxes[position[2]].innerText;

    if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
      if (posval1 === posval2 && posval2 === posval3) {
        showwinner(posval1);
        count = 0;
      }
    }
  });
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations 🎉, winner is ${winner}`;
  msg_container.classList.remove("hide");
  disableboxes();
};

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const reset_game = () => {
  PlayerO = true;
  enableboxes();
  count = 0;
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msg_container.classList.add("hide");
    match_draw.classList.add("hide2");
  }
};

const Draw_game = (Draw) => {
  match_draw.classList.remove("hide2");
  disableboxes();
};

new_button[0].addEventListener("click", reset_game);
new_button[1].addEventListener("click", reset_game);
reset_btn.addEventListener("click", reset_game);
