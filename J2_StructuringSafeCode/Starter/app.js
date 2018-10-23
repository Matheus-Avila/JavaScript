/*var g = $G('Matheus','avila');

console.log(g);

g.greet(true).setLang('en');

g.greet(true);

g.setLang('br').greet(false);*/

$('#login').click(function(){

    var loginObj = $G('Matheus', 'Avelar');

    $('#logindiv').hide();
    //loginObj.setLang($('#lang').val()): define a lingua como o val do item que possui o id lang
    //Retorna loginObj 
    //loginObj.HTMLGreeting('#greeting', true) escreve em html no elemento com id greeting
    loginObj.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});