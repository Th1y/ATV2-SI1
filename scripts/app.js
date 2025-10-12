const texto = document.getElementById('formularioCesar');
const inputResultado = document.getElementById('resultado');

texto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulario seja enviado para o servidor e recarregue a pagina
    
    // Lista de objetos do formulario
    const dados = new FormData(formularioCesar); 
    
    const texto = dados.get('textoAntesCC');
    const deslocamento = parseInt(dados.get('deslocamento'));
    
    if (criptoValue == 0) {
        const resultado = codificar(deslocamento, texto);
        inputResultado.value = resultado;
        console.log(criptoValue);
    } else {
        const resultado = decodificar(deslocamento, texto);
        inputResultado.value = resultado;
        console.log(criptoValue);
    };
    // Obtem os inputs do formulario e criptografa com a funcao "codificar"
    

    // resultado no input resultado
    // inputResultado.value = resultado;
});
