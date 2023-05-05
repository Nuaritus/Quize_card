const form = document.querySelector(".js-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // Чтение данных из localStorage
  let counter = JSON.parse(localStorage.getItem("user")).counter;
  let score = JSON.parse(localStorage.getItem("user")).score;
  let name = JSON.parse(localStorage.getItem("user")).name;
  counter += 1;
  score += 1;
  const { id } = event.target;
  console.log(counter);

  //   Сохранение данных в localStorage
  const user = { name: name, score: score, counter: counter };
  localStorage.setItem("user", JSON.stringify(user));
  await fetch(`/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });3
  //   console.log(event);
  //   console.log(event.target);

  // вот тут ответ пользователя
  //   console.log(event.target.answer.value);

  // вот здесь отправить запрос с ответом пользователя, но нужно достать айди вопроса
});
