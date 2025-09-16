// Funcão para codificar uma String com Cifra de César
function codificar(deslocamento, entrada) {
    // String que vai acumular as letras criptografadas
    let resultado = "";

    // Percorre cada caractere da string de entrada
    for (i = 0; i < entrada.length; i++) {
        // pega o código ASCII do caractere atual
        const codLetraASC = entrada.charCodeAt(i);

        // Aplica a formula da Cifra de César
        const cripto = ((codLetraASC - 65 + deslocamento) % 26) + 65;
        
        // adiciona cada letra ao Resultado
        resultado += String.fromCharCode(cripto);
    };
    // Printa o resultado
    console.log(resultado);
};

// String de exemplo, para fins de teste
codificar(1, "CASA");