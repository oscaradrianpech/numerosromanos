const txtNumero =document.getElementById("numero");
const lblSalida =document.getElementById("salida");
const btnConvertir = document.getElementById("btn_convertir");

btnConvertir.addEventListener("click", function (e){
    e.preventDefault();
    let numero=Number(txtNumero.value);

    let salida="No esta en el rango de 1 a 10";
    if(numero===1){
        salida="I";
    }
    else
    if(numero===2){
        salida="II";
    }
    else
    if(numero===3){
        salida="III";
    }
    else
    if(numero===4){
        salida="IV";
    }
    else
    if(numero===5){
        salida="V";
    }
    else
    if(numero===6){
        salida="VI";
    }
    else
    if(numero===7){
        salida="VII";
    }
    else
    if(numero===8){
        salida="VIII";
    }
    else
    if(numero===9){
        salida="IX";
    }
    else
    if(numero===10){
        salida="X";
    }
    if(numero >=1 && numero <=10){
        lblSalida.innerHTML=`
        Numero romano: ${salida}
        `;
    }
    else{
        lblSalida.innerHTML=`
        <p class="error">${salida}</p>
        `;
    }

});
