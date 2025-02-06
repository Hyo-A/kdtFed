// const accept = document.querySelector("input[type = 'submit']");

// accept.addEventListener("click", (event) => {
//   event.preventDefault();
//   // 이벤트가 유일하게 쓸수있는게 preventDefault 지금은 submit땜에 자꾸 서버로 값을 보내는걸 막아준다
// });

// const form = document.querySelector("form");
// const userinput = document.querySelector("#todo-item");
// const ul = document.querySelector("ul");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (userinput.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = userinput.value;
//     ul.appendChild(li);

//     userinput.value = "";
//   }
// });

const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((f) => f.id != target.id);
  // 조건이 참인애들만 모아서 다시 배열해준다
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.append(span, button);
    li.id = todo.id;
    ul.appendChild(li);
  }
};

const handler = (event) => {
  event.preventDefault();
  const todo = {
    id: Date.now(),
    text: userInput.value,
  };

  if (todo.text !== "") {
    todos.push(todo);
    addItem(todo);
    save();
  }
  userInput.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();

form.addEventListener("submit", handler);

// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);
