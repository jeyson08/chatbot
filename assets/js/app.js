const question = document.querySelector(".question")
const conversation = document.querySelector(".conversation")
const form = document.querySelector("form")
const tabrep = ["oui", "il fait beau", "parce que"]

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const input = document.querySelector("input")
    const ask = document.createElement("div")
    ask.classList.add("question")
    conversation.appendChild(ask)
    ask.innerHTML = input.value
    tabrep.forEach(function (val) {
        //mettre le if ici
        //créer un objet avec une question et une réponse plutot qu'un tableau
        // if(input.value === "ça va ?"){
        //     const rep = document.createElement("div")
        //     rep.classList.add("reponse")
        //     conversation.appendChild(rep)
        //     rep.innerHTML = tabrep[0]
    })
    if(input.value.toLowerCase().includes("a va")){
        const rep = document.createElement("div")
        rep.classList.add("reponse")
        conversation.appendChild(rep)
        rep.innerHTML = tabrep[0]
    }else if(input.value === "quel temps ?") {
        const rep = document.createElement("div")
        rep.classList.add("reponse")
        conversation.appendChild(rep)
        rep.innerHTML = tabrep[1]
    }else if(input.value === "pourquoi ?") {
        const rep = document.createElement("div")
        rep.classList.add("reponse")
        conversation.appendChild(rep)
        rep.innerHTML = tabrep[2]
    }else {
        const rep = document.createElement("div")
        rep.classList.add("reponse")
        conversation.appendChild(rep)
        rep.innerHTML = "Je ne peux pas répondre"
    }
})