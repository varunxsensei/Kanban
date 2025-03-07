const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");
const allBoards = document.querySelectorAll(".board");
const allItem = document.querySelectorAll(".item");
const addBoardBtn = document.getElementById("add-board-btn");
const container = document.getElementById("my-container");
const removeBoardBtn = document.getElementById("remove-board-btn");

function attachFlyingClass(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

function addFlyingElement(target) {
  target.addEventListener("dragover", () => {
    const flyingElement = document.querySelector(".flying");
    target.appendChild(flyingElement);
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

addBoardBtn.addEventListener("click", () => {
  const newBoard = document.createElement("div");
  newBoard.classList.add("board");
  const title = document.createElement("h4");
  const input = prompt("Set a title ");
  if (!input) return;
  else {
    title.innerText = input;
    newBoard.classList.add("board");
    newBoard.appendChild(title);
    addFlyingElement(newBoard);
    container.appendChild(newBoard);
  }
});

allBoards.forEach(addFlyingElement);

allItem.forEach((it) => {
  it.addEventListener("dblclick", () => {
    const input = prompt("Edit your task");
    if (!input) return;
    else {
      it.innerText = input;
    }
  });
});

removeBoardBtn.addEventListener("click", () => {
  const board = document.querySelectorAll(".board");
  if (board.length > 1) {
    board[board.length - 1].remove();
  } else {
    return;
  }
});
