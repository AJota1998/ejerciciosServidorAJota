module.exports.cadena = (cadena) => {

    if (cadena != "") {

    let miarray = cadena.split(' ')
    let elementofinal = miarray[miarray.length -1]
    let contadorPalabras = 0;

    for (i = 0; i <= miarray.length-1; i++) {
        contadorPalabras++;
    }

    let ordenadas = miarray.sort();

    let resultado = "Primera palabra: " + miarray[0] + "\nÚltima palabra: " + elementofinal + 
    "\nNúmero de palabras: " + contadorPalabras + "\nOrdenadas: " + ordenadas;
    
    return resultado;

    } else {
        return "Cadena vacía";
    }

}