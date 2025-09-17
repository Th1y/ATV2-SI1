// Funcão para codificar uma String com Cifra de César
function codificar(deslocamento, entrada) {
    // Variavel que vai acumular as letras criptografadas
    let resultado = "";

    // Variavel com  o valor da primeira
    let valorPrimeiroUnicode;
    
    // Percorre cada caractere da string de entrada
    for (let i = 0; i < entrada.length; i++) {
        // Obtém o código ASCII do caractere atual
        const codLetraASC = entrada.charCodeAt(i);

        // Se for letra maiúscula (A-Z), define base como 65
        if (codLetraASC >= 65 && codLetraASC <= 90 ) {
            valorPrimeiroUnicode = 65;
       
        // Se for letra minúscula (a-z), define base como 97
        } else if (codLetraASC >= 97 && codLetraASC <= 122) {
            valorPrimeiroUnicode = 97; // meu Deus me ajuda 
       
        // Se não for uma letra valida lança um erro com mensagem descritiva
        } else {
            throw new Error(`Caractere inválido encontrado: "${entrada[i]}". Apenas letras de A-Z ou a-z são aceitas.`);        
        };

        // Aplica a formula da Cifra de César
        const cripto = ((codLetraASC - valorPrimeiroUnicode + deslocamento) % 26) + valorPrimeiroUnicode;
        
        // Concatena o caractere criptografado ao resultado
        resultado += String.fromCharCode(cripto);
    };
    // Retorna o resultado
    return(resultado);
};

// Função para decodificar uma String com Cifra de César usando deslocamento invertido 
function decodificar(deslocamento, entrada) {
    return codificar (-deslocamento, entrada);
};

// Testes
console.log(codificar(1, "casa"));   // "fdvd"
console.log(decodificar( 1, "cAsa")); // "casa"

