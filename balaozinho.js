const marcacoes = document.getElementsByClassName("marcacao");
console.log(marcacoes)
for (let i = 0; i < marcacoes.length; i++) {
    marcacoes[i].addEventListener("mouseenter", () => {
        document.getElementById("balaozinho").innerHTML = `<h2>${marcacoes[i].getAttribute("data-titulo")}</h2> <p>${marcacoes[i].getAttribute("data-conteudo")}</p>`
        document.getElementById("balaozinho").style.width = "150px";
        document.getElementById("balaozinho").style.padding = "5px";
    });
    marcacoes[i].addEventListener("mouseleave", () => {
        document.getElementById("balaozinho").innerText = ""
        document.getElementById("balaozinho").style.padding = "0"
    });
}