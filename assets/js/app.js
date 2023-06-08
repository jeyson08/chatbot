const choice = document.getElementById("propositions")
const req = document.getElementById("req")
const reponse = document.querySelector(".reponse")
fetch("https://api-chatbot-lw0x.onrender.com/api/v1/alldialogs")
  .then(response => response.json())
  .then(data => {
    data.forEach(dialog => {
      choice.innerHTML += `<option value="${dialog.question}">${dialog.question}</option>`;
    });
  })
  .catch(error => console.log(error));

const conversation = document.querySelector(".conversation");
const form = document.querySelector("form");
const dialog = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input");
  const ask = document.createElement("div");
  ask.classList.add("reponse");
  conversation.appendChild(ask);
  ask.innerHTML = input.value;
  const rep = document.createElement("div");
  rep.classList.add("question");
  conversation.appendChild(rep);
  rep.innerHTML = "...";

  setTimeout(function () {
    fetch("https://api-chatbot-lw0x.onrender.com/api/v1/alldialogs")
      .then(response => response.json())
      .then(data => {
        data.forEach(dialog => {
          if (input.value.toLowerCase().includes(dialog.question.toLowerCase())) {
            rep.classList.add("question");
            conversation.appendChild(rep);
            rep.innerHTML = dialog.answer;
            req.value = "";
          }
        });
      })
      .catch(error => console.log(error));
  }, 800);
});

const chuck = document.getElementById("chuck");
fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => {
    chuck.innerHTML = data.value;
  })
  .catch(error => console.log(error));
