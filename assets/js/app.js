const choice = document.getElementById("propositions");
const req = document.getElementById("req")
const reponse = document.querySelector(".reponse")
fetch("https://api-chatbot-lw0x.onrender.com/api/v1/dialogs")
  .then(response => response.json())
  .then(data => {
    data.message.forEach(dialog => {
      choice.innerHTML += `<option value ="${dialog.question}">`
    })
    // req.addEventListener("change", e=> {
    //   console.log(e.target.value)
    //   data.message.forEach(dialog => {
    //     if(e.target.value === dialog.question){
    //       console.log(dialog.answer)
    //       reponse.innerHTML = dialog.answer
    //     }
    //   })
    // })
  })
  .catch(error => console.log(error))

//API CHUCK NORRIS ANGLAIS
const chuck = document.getElementById("chuck")
fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  // .then(data => console.log(data.value))
  .then(data => chuck.innerHTML = data.value)
  .catch(error => console.log(error))



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


dialog.forEach((val) => {
  choice.innerHTML += `<option value ="${val.question}">`;
});
