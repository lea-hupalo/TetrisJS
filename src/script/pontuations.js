printPontuations()


function printPontuations() {
    if (localStorage.length > 1) {
        const pontuations = JSON.parse(window.localStorage.getItem("records"))
        const pontuationLabel = document.querySelector(".content-label")
        let cont = 1
        for (let score of pontuations.pontuations) {
            if (score[1]) {
                let pontuation = document.createElement("p")
                pontuation.innerHTML = `${cont}. ${score[0]} - ${score[1]}`
                pontuationLabel.appendChild(pontuation)
                cont++
            }
        }
    }
    const link = document.querySelector("#back")
    const nickPlayer = window.localStorage.getItem("nick")
    if (nickPlayer.length === 0) {
        link.href = "index.html"
    }
    else{
        link.href = "game.html"
    }
}
