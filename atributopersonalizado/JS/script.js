//let image = document.getElementById("like");

//image.addEventListener("click", function () {
    //image.src = "../IMG/thumbs-down.png"
    //image.setAttribute("src","../IMG/thumbs-down.png" )
    //let lastImage = image.getAttribute("src");
    //image.setAttribute("src","../IMG/thumbs-down.png")
//})

let lista = document.getElementById("lista");

//let num = parseInt(lista.getAttribute("num"));
lista.dataset.num = "6";

let num = parseInt(lista.dataset.num);


let conteudo = "";

for(let i = 0; i < num; i++) {

    conteudo += "<li>" + i + "</li>";

}

lista.innerHTML = conteudo;