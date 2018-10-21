console.log("**********Aula 54**********")

var jj = "ola";
var root= this;
var name= "Lucas";
var obj = {
    name: "Matheus",
    givename: function(){
    console.log(root.jj + this.name);
    }
}

var sobre = {
    sobrenome: "Avila"
}

obj.__proto__ = sobre;

console.log(obj);

obj.givename();


console.log(obj.sobrenome);

//colocar no console a.__proto__ a.__proto__.__proto__ b.__proto__ b.__proto__.__proto__ c.__proto__ 
var a = function() { };

var b = [];

var c = {};

console.log("---Teste 2----")

var Matheus = {
    nome: 'Matheus',
    sobrenome: 'Avila',
    
}

var pessoa = {
    texto: "Bls lvas",
    get: function(){
        console.log(this.nome + " " + this.sobrenome);
    }
}
Matheus.__proto__ = pessoa;

Matheus.get();
console.log(Matheus.texto);

console.log("\n\n*********Aula 56********\n\n");

//imprime prop do prototype de Matheus tambem
for(var prop in Matheus){
    console.log(prop + ": " + Matheus[prop]);
}

//apenas prop de Matheus:

console.log("----Apenas prop de Matheus----");

for(var prop in Matheus){
    if(Matheus.hasOwnProperty(prop)){
        console.log(prop + ": " + Matheus[prop]);
    }
    
}

//Reflection 

console.log("------Reflection------");
console.log("Antes")

console.log(Matheus);

_.extend(Matheus, pessoa);

console.log("Depois")

console.log(Matheus);



console.log('------');

var a = function (para1, para2) {
    para2 = para2 || 'Matheus';
    console.log(para1 + para2);
}

a('Lucas', 'avila');

a('Matheus');







