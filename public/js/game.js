const form = document.querySelector(".js-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log(event);
  console.log(event.target);

  // вот тут ответ пользователя
  console.log(event.target.answer.value);

  // вот здесь отправить запрос с ответом пользователя, но нужно достать айди вопроса

  //   await fetch(url, {
  //       method: 'GET',

  //   })
});
