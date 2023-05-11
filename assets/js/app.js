const question = document.querySelector(".question");
const conversation = document.querySelector(".conversation");
const form = document.querySelector("form");
const req = document.getElementById("req")
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
  },
  {
    question: "hugo",
    answer: "hugro",
  }
];

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
    dialog.forEach((val) => {
      if (input.value.toLowerCase().includes(val.question)) {
        rep.classList.add("question");
        conversation.appendChild(rep);
        rep.innerHTML = val.answer;
        req.value = ""
      }
    });
  }, 800);
});

const choice = document.getElementById("propositions");
dialog.forEach((val) => {
  choice.innerHTML += `<option value ="${val.question}">`;
});
