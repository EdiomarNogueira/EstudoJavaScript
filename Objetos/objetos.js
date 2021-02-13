function carro(marca, modelo, anoFabricacao,anoAtual, valor,depreciacaoAnual){
    this.marca = marca;
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.anoAtual = anoAtual;
    this.valor = valor;
    this.depreciacaoAnual = depreciacaoAnual;

    this.valorDeRevenda = function() {
        return this.valor - ((this.anoAtual - this.anoFabricacao)*this.depreciacaoAnual);
    }
}

function patio(){
    this.carro1 = a;
    this.carro2 = b;
}


var a = new carro("Fiat","Toro","2014","2021",60000,400);
var b = new carro("Mercedes","GLA","2019","2021",80000,600);


console.log(a);
console.log(a.marca);
console.log("Valor de revenda: " + a.valorDeRevenda());

console.log(b);
console.log(b.marca);
console.log("Valor de revenda: " + b.valorDeRevenda());


var c = new patio (a,b);

console.log(c);
console.log(c.carro1.marca + " " +c.carro1.valorDeRevenda());

