// FOR

for (let index = 0; index <= 10; index++) {
    console.log("Estamos contando el numero es: " + index)    
}

for (let index = 0; index < 10; index=index+2) {
    console.log("Estamos contando el numero es: " + index)    
}


let myContador = parseInt(prompt("Contar hasta donde"));
for (let index = 0; index <= myContador ; index++) {
    console.log("Estamos contando el numero es: " + index);    
}  

for (let index = 0; ; index++) {
    console.log("Estamos contando el numero es " + index);
    if (index > 10) {
        break;
    }
}

// WHILE

let datosEntrada = prompt("ingrese datos(si ingresas ESC termina)")

while( datosEntrada != "ESC"){
    console.log("el usuario ingreso " + datosEntrada);
    datosEntrada = prompt("ingrese datos(si ingresas ESC termina)");
}