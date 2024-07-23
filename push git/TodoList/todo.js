// const dbTodo = [
//   { id: 1, todo: "Học ngữ pháp J", status: true },
//   { id: 2, todo: "Hoc từ vưng Tettei", status: false },
//   { id: 3, todo: "Xem 5 video", status: true },
//   { id: 4, todo: "Đi bộ", status: false },
// ];

// window.localStorage.setItem("dbTodo", JSON.stringify(dbTodo));
const dbTodo = JSON.parse(window.localStorage.getItem("dbTodo"));
const todoList = document.getElementById("listTodo");
function render() {
  let stringHTML = "";
  for (let idx = 0; idx < dbTodo.length; idx++) {
    stringHTML += `
    <li
    id = "" 
    class = "${dbTodo[idx].status}" 
    onclick = changeStatus(${dbTodo[idx].id})
    >
    <p>${dbTodo[idx].todo}</p>
    <button onclick = del(${dbTodo[idx].id}) text-decoration: none;>
    Xoa
    </button>
    </li>
    `;
  }
  todoList.innerHTML = stringHTML;
}
render();

function changeStatus(idchange) {
  let findIndex = dbTodo.findIndex((el) => el.id === idchange);
  dbTodo[findIndex].status = !dbTodo[findIndex].status;
  //
  window.localStorage.setItem("dbTodo", JSON.stringify(dbTodo));
  //
  render();
}
function del(idchange) {
  let findIndex = dbTodo.findIndex((el) => el.id === idchange);
  dbTodo.splice(dbTodo[findIndex], 1);
  //
  window.localStorage.setItem("dbTodo", JSON.stringify(dbTodo));
  //
  render();
}
const add = document.getElementById("add");
add.addEventListener("click", function () {
  let newTodo = {
    id: Math.random(),
    todo: input.value,
    status: false,
  };
  dbTodo.push(newTodo);
  //
  window.localStorage.setItem("dbTodo", JSON.stringify(dbTodo));
  //
  render();

  input.value = "";
});
