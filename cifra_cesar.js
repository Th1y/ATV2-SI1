// Funcão para codificar uma String com Cifra de César
function codificar(deslocamento, entrada) {

    // Percorre cada caractere da string de entrada
    for (i = 0; i < entrada.length; i++) {
        // pega o código ASCII do caractere atual
        const codLetraASC = entrada.charCodeAt(i);

        // Aplica a formula da Cifra de César
        const criptog = ((codLetraASC - 65 + deslocamento) % 26) + 65;
        
        // Printa letra por letra
        console.log(String.fromCharCode(criptog))

    };
};

// String de exemplo, para fins de teste
codificar(1, "CAZA");