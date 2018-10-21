function sayHiLater(){
    var greeting = "Hi!";
    //callback function -> quando uma função termina de rodar ela chama outra.
    setTimeout(function(){
        
        console.log(greeting);
        console.log(a);
        
    }, 3000);
    var a = "blz!";
}
sayHiLater(); 