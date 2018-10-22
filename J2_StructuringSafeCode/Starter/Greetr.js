(function(global, $){
    
    var Greetr = function(nome, sobrenome, lingua){
        return new Greetr.init(nome, sobrenome, lingua);
    }

    Greetr.init = function(nome, sobrenome, lingua){

        this.nome = nome || "Padrao" ;
        this.sobrenome = sobrenome || "Padrao";
        this.lingua = lingua || "br";
    
    
    }
    //A function constructor define o prototype como sendo um objeto Greetr.init.
    //As linhas 17 e 19 definem o prototype como sendo um objeto vazio e sem 'classe'.
    Greetr.prototype = {};

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.$G = Greetr;

}(window,jQuery)
)