const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");
const allBoards = document.querySelectorAll(".board");
const allItem = document.querySelectorAll(".item");

const addBoard = document.getElementById("add-board-btn")

const container = document.getElementById("my-container")

function attachFlyingClass(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

addTaskBtn.addEventListener("click", () => {
  const input = prompt("What is the task?");
  if (!input) return;
  else {
    const taskCard = document.createElement("p");
    taskCard.classList.add("item");
    taskCard.setAttribute("draggable", true);
    taskCard.innerText = input;
    todoBoard.appendChild(taskCard);

    attachFlyingClass(taskCard);
  }
});



allItem.forEach(attachFlyingClass);

allBoards.forEach((board) => {
  board.addEventListener("dragover", () => {
    const flyingElement = document.querySelector(".flying");
    board.appendChild(flyingElement);
  });
});


addBoard.addEventListener('click',()=>{
    const newBoard = document.createElement("div")
    newBoard.classList.add("board")
    container.appendChild(newBoard)
})