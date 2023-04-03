function mostarResultado (resultado){
    document.getElementById("numero3").value = resultado
}

function suma(){
    let numero1= +document.getElementById("numero1").value
    let numero2= +document.getElementById("numero2").value
    mostarResultado (numero1 + numero2)

}

function resta(){
    let numero1= +document.getElementById("numero1").value
    let numero2= +document.getElementById("numero2").value
    mostarResultado (numero1 - numero2)

}

function multiplicacion(){
    let numero1= +document.getElementById("numero1").value
    let numero2= +document.getElementById("numero2").value
    mostarResultado (numero1 * numero2)

}

function division(){
    let numero1= +document.getElementById("numero1").value
    let numero2= +document.getElementById("numero2").value
    mostarResultado (numero1 / numero2)

}

function raizcuadrada () {
    let numero= +document.getElementById("numero1").value
    mostarResultado (Math.sqrt(numero))
}

function potencia (){
    let numero1= +document.getElementById("numero1").value
    let numero2= +document.getElementById("numero2").value
    mostarResultado (Math.pow(numero1,numero2))
}

function valorAbsoluto(){
    let numero= +document.getElementById("numero1").value
    mostarResultado (Math.abs(numero))
}

function random(){
    let maximo= +document.getElementById("numero1").value
    let minimo= +document.getElementById("numero2").value
    maximo = maximo+1
    
    mostarResultado (Math.floor(Math.random()*(maximo-minimo)+minimo))

}

function round (){
    let numero= +document.getElementById("numero3").value
    mostarResultado (Math.round(numero))
}

function floor (){
    let numero= +document.getElementById("numero3").value
    mostarResultado (Math.floor(numero))
}

function ceil (){
    let numero= +document.getElementById("numero3").value
    mostarResultado (Math.ceil(numero))
}