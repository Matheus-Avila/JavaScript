(function(global, $){
    
    var Greetr = function(nome, sobrenome, lingua){
        return new Greetr.init(nome, sobrenome, lingua);
    }

    var supportedLangs = ['en', 'br'];

    var greetings = {
        en: 'Hi',
        br: 'oi'
    } 

    var formalGreetings = {
        en: 'Hello',
        br: 'Ola'
    }

    var logMessage = {
        en: 'Logged in',
        br: 'Logado'
    }

    Greetr.init = function(nome, sobrenome, lingua){

        this.nome = nome || "Padrao" ;
        this.sobrenome = sobrenome || "Padrao";
        this.lingua = lingua || "br";
    
    
    }
    //A function constructor define o prototype como sendo um objeto Greetr.init.
    //As linhas 17 e 19 definem o prototype como sendo um objeto vazio e sem 'classe'.
    Greetr.prototype = {

        fullName: function(){
            return this.nome + ' ' + this.sobrenome;
        },

        valida: function(){
            return (supportedLangs.indexOf(this.lingua) !== -1)
        },
        
        greeting: function(){
            if(this.valida()){
                return greetings[this.lingua] + ' ' + this.nome;  
            }
            
        },

        greetFormal: function(){
            return formalGreetings[this.lingua] + ' ' + this.fullName();
        },
        
        greet: function(formal){
            var msg;

            if(formal){
                msg = this.greetFormal();
            }
            else {
                msg = this.greeting();
            }

            console.log(msg);

            //Função chainable
            return this;
        },   

        log: function(){

            console.log(logMessage[this.lingua] + ': ' + this.fullName());
            
            return this;
        },

        setLang: function(lang){
            var lingua = this.lingua;
            this.lingua = lang;
            
            if(this.valida()){
                //Não torna a função chainable:
                //return this;
            }
            else{
                console.log('Operacao nao concluida!\nLingua nao suportada pelo framework!!');
                this.lingua = lingua;
            }
            //Para ser chainable, o return deve ser colocado na última linha, fora de qualquer condicional
            return this;

        },

        HTMLGreeting: function(selector, formal){
            var msg;

            if(formal){
                msg = this.greetFormal();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }










    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.$G = Greetr;

}(window,jQuery)
)