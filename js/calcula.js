function correr(){
    var placa = parseInt(document.getElementById("placa").value);
    var proce = parseInt(document.getElementById("procesador").value);
    var ram = parseInt(document.getElementById("ram").value);
    var almacenamiento = parseInt(document.getElementById("almacenamiento").value);
    var fuente = parseInt(document.getElementById("fuente").value);
    var total = placa + proce + ram + almacenamiento + fuente
    var armado = total * 1.1
    var user = localStorage.getItem("user");
    var dineroC = 750000
    var dineroR = 500000
    if(user == "Carlos"){
        if(dineroC >= armado){
            alert("Tu Valor de tu Cotizacion es de "+ armado)
            window.location= "exitosa.html";
        }else{
            alert("Tu Valor de tu Cotizacion es de "+ armado)
            window.location= "fallida.html";
        }
    }
    if(user == "Roberto"){
        if(dineroR >= armado){
            alert("Tu Valor de tu Cotizacion es de "+ armado)
            window.location= "exitosa.html";
        }else{
            alert("Tu Valor de tu Cotizacion es de "+ armado)
            window.location= "fallida.html";
        }
    }
}


