const question = document.querySelector(".question");
const conversation = document.querySelector(".conversation");
const form = document.querySelector("form");
const dialog = [
  {
    question: "salut",
    answer: "coucou",
  },
  {
    question: "ça va",
    answer: "oui",
  },
  {
    question: "pourquoi",
    answer: "parce que",
  },
  {
    question: "quel temps",
    answer: "il fait beau",
  },
  {
    question: "où est tu",
    answer: "boulogne",
  }
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input");
  const ask = document.createElement("div");
  ask.classList.add("question");
  conversation.appendChild(ask);
  ask.innerHTML = input.value;
  dialog.forEach((val) => {
    if (input.value.toLowerCase().includes(val.question)) {
      const rep = document.createElement("div");
      rep.classList.add("reponse");
      conversation.appendChild(rep);
      rep.innerHTML = val.answer;
    }
  });
});

const choice = document.getElementById("propositions");
dialog.forEach((val) => {
  choice.innerHTML += `<option value ="${val.question}">`;
});
