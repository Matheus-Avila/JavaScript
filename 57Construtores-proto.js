//function constructors

//Uma função sem retorno usada para definir metodos e propriedades de um objeto

function pessoa(nome, sobrenome){
//this aponta para um objeto vazio 
    console.log('Funcao invocada!');
    console.log(this);
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//Toda função em Js tem uma propriedade chamada prototype. 
//Essa prop é extremamente útil para function constructors

pessoa.prototype.getNome = function() {
    return this.nome + " " + this.sobrenome;
}

//new cria um objeto vazio
var matheus = new pessoa('Matheus', 'Avila');
console.log(matheus);

var lucas = new pessoa('Lucas', 'Avila');
console.log(lucas);

var julya = new pessoa('Julya', 'Alves');

//posso alterar especificamente o prototype de um objeto e manter o proto da classe?
//No console: pessoa.prototype e matheus.prototype. Não existe matheus.prototype
//É possivel adicionar uma prop ou metodo para todos os objetos de uma classe da seguinte forma:
//Isso é possivel pq [...].__proto__ é um objeto, e objetos são passados por referencia, não por valor.

matheus.__proto__.setNome = function(nome) {
    console.log('Meu nome e ' + nome);
} 

// Altera completamente o prototype especificamente do objeto.
julya.__proto__ = {
    vei: 'vei',
    grita: function(){
        console.log('porra ' + this.vei);
    }
}

  