const name = document.querySelector("#input");
const btn = document.querySelector("#btn1");

btn.addEventListener("click", (event) => {
  const user = { name: "Player1", score: 0, counter: 0 };
  localStorage.setItem("user", JSON.stringify(user));
  let counter = 0;
});
