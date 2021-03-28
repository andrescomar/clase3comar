// FOR

for (let index = 10; index <= 50; index++) {
    console.log("Número ingresado: " + index)    
}

for (let index = 0; index < 20; index=index+4) {
    console.log("Número ingresado: " + index)    
}


let Contador = parseInt(prompt("Contar hasta el número:"));
for (let index = 0; index <= Contador ; index++) {
    console.log("Número ingresado: " + index);    
}  

for (let index =15; ; index++) {
    console.log("Número ingresado " + index);
    if (index > 30) {
        break;
    }
}

// WHILE

let numeroID = prompt("Ingrese su número de ID o Contraseña (Escriba Finalizar si desea terminar el proceso)")

while( numeroID != "Finalizar"){
    console.log("el usuario ingreso " + numeroID);
    numeroID = prompt("Ingrese su número de ID o Contraseña (Escriba Finalizar si desea terminar el proceso)");
}

let numero = 0;

do {
    numero = prompt("ingrese numero");
    console.log(numero);
} while (parseInt(numero));

// SWITCH 
let NumeroID = prompt("Ingrese su número de ID o Contraseña (Escriba Finalizar si desea terminar el proceso)");

while(NumeroID != "Finalizar"){

    switch (NumeroID) {
        case "2021":
             console.log("Número de ID es correcto")
            break;
        case "CoderHouse":
             console.log("La cotraseña ingresada es correcta")
        default:
             console.log("ID o contraseña ingresada son incorrectas, no puede pasar")
            break;
    }

    NumeroID = prompt("Ingrese su número de ID o Contraseña (Escriba Finalizar si desea terminar el proceso)");
}

