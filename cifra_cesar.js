// Função para codificar uma String com Cifra de César
function codificar(deslocamento, entrada) {
    let resultado = "";
    let valorPrimeiroUnicode;

    // Normaliza o deslocamento para estar sempre entre 0 e 25
    deslocamento = deslocamento % 26;

    for (let i = 0; i < entrada.length; i++) {
        const codLetraASC = entrada.charCodeAt(i);

        // Maiúscula (A-Z)
        if (codLetraASC >= 65 && codLetraASC <= 90) {
            valorPrimeiroUnicode = 65;

        // Minúscula (a-z)
        } else if (codLetraASC >= 97 && codLetraASC <= 122) {
            valorPrimeiroUnicode = 97;

        // Qualquer outro caractere não é aceito
        } else {
            throw new Error(`Caractere inválido encontrado: "${entrada[i]}". Apenas letras de A-Z ou a-z são aceitas.`);
        }

        // Cifra César
        const offset = codLetraASC - valorPrimeiroUnicode;
        const novoOffset = (offset + deslocamento + 26) % 26; // garante positivo
        const cripto = novoOffset + valorPrimeiroUnicode;

        resultado += String.fromCharCode(cripto);
    }

    return resultado;
}

// Função para decodificar
function decodificar(deslocamento, entrada) {
    return codificar(-deslocamento, entrada);
}

// Testes
// console.log(codificar(327, "cAsa"));   // "rPhp"
// console.log(decodificar(327, "rPhp")); // "casa"
