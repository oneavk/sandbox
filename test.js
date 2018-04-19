/*function speak(line){
    console.log("А " + this.type + " кролик говорит '" + line + "'");
}

var whiteRabbit = {type: "белый", speak: speak};
var fatRabbit = {type: "толстый", speak: speak};

whiteRabbit.speak("Ушки мои и усики, я же наверняка опаздываю!");
fatRabbit.speak("Мне бы сейчас морковочки.");

speak.apply(fatRabbit, ["Отрыжка!"]);
speak.call({type: "старый"}, "О, господи.");*/

/*var protoRabbit = {
    speak: function(line){
        console.log("А " + this.type + " кролик говорит '" + line + "'");
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "убийственный";
killerRabbit.speak("ХРЯЯЯСЬ!");*/
function Rabbit(type){
    this.type = type;
}

Rabbit.prototype.speak = function(line){
    console.log("А " + this.type + " кролик говорит '" + line + "'");
};
Rabbit.prototype.teeth = "мелкие";
var killerRabbit = new Rabbit("убийственный");
killerRabbit.teeth = "длинные, острые и окрававленные";
var blackRabbit = new Rabbit("черный");

blackRabbit.speak("Всем капец...");
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);