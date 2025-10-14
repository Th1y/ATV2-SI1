const texto = document.getElementById('formularioCesar');
// Constante que vai receber o campo ReadOnly "resultado"
const inputResultado = document.getElementById('resultado');

texto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulario seja enviado para o servidor e recarregue a pagina
    
    // Constante que vai receber os dados de "formulario Cesar como objetos"
    const dados = new FormData(formularioCesar); 
    
    // recebe o Deslocamento e texto dos campos do formulario
    const texto = dados.get('textoAntesCC');
    const deslocamento = parseInt(dados.get('deslocamento'));
    
    if (criptoValue == 0) {
        inputResultado.value = codificar(deslocamento, texto);
        console.log(criptoValue); // apenas para debug
    } else {
        inputResultado.value = decodificar(deslocamento, texto);
        console.log(criptoValue); // apenas para debug
    };

});
