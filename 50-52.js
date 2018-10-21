/***********AULA 50*****************/

// CALL APPLY BIND

//  METHOD BIND: Define a referência da variável this como a função passada como parâmetro. É como se a função se tornasse um método do objeto passado como parâmetro.

var person = {
    nome: 'Matheus',
    sobrenome: 'Moreira',
    getFullname: function () {
        
        var nomeCompleto = this.nome + ' ' + this.sobrenome;
        return nomeCompleto;
    }
}

//this não está se referindo ao objeto person
var logName = function(lang1 , lang2) {
    console.log('Log: ' + this.getFullname());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---------------');
}

//logNameComp é uma cópia da função logName, mas a variável this agora se refere ao objeto person
var logNameComp = logName.bind(person);

logNameComp();

/*Feito em tempo de execução

var logName = function() {
    console.log('Log: ' + this.getFullname());
}.bind(person);
*/

// METHOD CALL: Semelhante ao () invoca a função, mas além disso define a referencia que 'this' vai ter. Isso em tempo de execução.

logName.call(person, 'en', 'es');

// METHOD APPLY: Semelhante ao CALL mas os parâmetros devem ser passados como array.

logName.apply(person, ['es', 'en']);


// function borrowing ---> O objeto person2 utiliza o método do objeto person. 
var person2 = {
    nome: 'Thiago',
    sobrenome: 'Avila'
}

console.log(person.getFullname.call(person2));

// Function currying: Deve ser utilizado o método bind().

function multiply(a, b) {
    return a*b;
}
//Cria uma cópia e torna a variável 'a' setada como 2.

var multiply2 = multiply(this, 2);


/***********AULA 51*****************/
console.log("\n\n***********AULA 51*****************\n\n")

var arr1 = [1,2,3];

function mapForArray(arr, fn) {
    var newArr = [];
    for(var i = 0; i< arr.length; i++) {
        newArr.push(fn(arr[i]) );
    }
    return newArr;
}

console.log(arr1);

var newArr = mapForArray(arr1, function(item){ 
        return 3*item;
    }
        );
console.log(newArr);

var checkMaiorQue = function(limite, valor) {
    return valor > limite;
}

var newArr2 = mapForArray(arr1, checkMaiorQue.bind(this, 1));

console.log(newArr2);

// Função check tem como parametro o limite e retorna uma função anonima que utiliza este limite e um valor passado como parametro.
// Bind cria uma cópia da função anonima utilizando o limite passado inicialmente como fixo e com valor como parametro.

var check = function(limite) {
    return function(limite, valor) {
            
        return valor > limite;
        
    }.bind(this, limite);
}

var a = check(1)(arr1[0]);
var b = check(1)(arr1[1]);
var c = check(1)(arr1[2]);

console.log('-----');
console.log(a);
console.log(b);
console.log(c);

/***********AULA 52*****************/
console.log("\n\n***********AULA 52*****************\n\n")

var par = filtro([1,2,3,4,5,6], function(value){ return value % 2 === 0 });

function filtro(arrn, fn){
    //necessario porque a priori arrf é undefined, e agora é um array vazio
    var arrf= [0];
    arrf.shift();
    var i = 0;
    while(i< arrn.length){
        if(fn(arrn[i])){
            arrf.push(arrn[i]);
        }
        i= i+1;
    }
    return arrf;
}


console.log(par);

















