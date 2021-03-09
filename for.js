alert("A continuación le pediremos algunos datos para gestionar su turno.");

for(let turno = 1; turno<=10 ; turno++){
    let NombreCliente = prompt("Ingrese su nombre.");
    let ApellidoCliente = prompt("Ingrese su apellido.");
    let Genero = prompt("Ingrese M o F según sea su género.");

    if(Genero == "M") {
        alert("Sr. "+NombreCliente+" "+ApellidoCliente+"."+"\nSu turno es el Nº "+turno+".");
        console.log("Sr. "+NombreCliente+" "+ApellidoCliente+"."+" Su turno es el Nº "+turno+".");
    } if(Genero =="F") {
        alert("Sra. "+NombreCliente+" "+ApellidoCliente+"."+"\nSu turno es el Nº "+turno+".");
        console.log("Sra. "+NombreCliente+" "+ApellidoCliente+"."+" Su turno es el Nº "+turno+".");
    } if (Genero != "M" && Genero != "F") {
        alert("Ingresó un genero incorrecto o lo ingresó sin mayúscula.\n\nSu turno no fue registrado.");
        console.log("El turno de ",NombreCliente," ",ApellidoCliente," no fue registrado.");
        turno--;
    }
}
