var Pessoa = {
    nome: 'Dark',
    sobrenome: 'Souls',
    greet: function(){
        console.log('Oi ' + this.nome + ' ' + this.sobrenome);
    }
}
// Object.create cria um objeto cujo proto é Pessoa
var Matheus = Object.create(Pessoa);

var Thiago = Object.create(Pessoa);

Thiago.nome = 'Thiago';
Thiago.sobrenome = 'Avila';

console.log('Objeto Thiago:')
console.log(Thiago);

console.log('Objeto Matheus:')
console.log(Matheus);