let p1 = document.getElementById("p1");
console.log(p1);

let paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos)

for(let p of paragrafos){
    console.log(p);
}

let tp = document.getElementsByTagName("p");
console.log(tp);
console.log(tp[0]);
console.log(tp[1]);
console.log(tp[2]);

//p1.innerHTML = "Novo Conteudo1"

//p1.innerText = "Novo Conteudo2"

//p1.textContent = "Novo Conteudo3"

//p1.textContent = "<h2>Novo Conteudo1</h2>"

//p1.innerText = "<h2>Novo Conteudo2</h2>"

//p1.innerHTML = "<h2>Novo Conteudo3</h2>"

console.log(p1.textContent);
console.log(p1.innerText);

p1.className = ""