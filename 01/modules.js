function Hello(name) {
    function speak(lastName) {
        console.log(name, lastName);
    }

    function firstName(){
        return name;
    }

    return { 
        say: speak,
        firstName: firstName 
    };
}

var o = Hello("Alejandra");
o.say("Gonzalez"); // Alejandra Gonzalez

o.firstName(); // Alejandra