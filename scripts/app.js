// caso estivesse utilizando live server: 
// import {codificar, decodificar} from './cifra_cesar.js';

const texto = document.getElementById('formularioCesar'); //
const resultado = document.getElementById('resultado'); // paragrafo de resultado

texto.addEventListener('submit', function(event) {
    event.preventDefault(); // evita que o formulario seja enviado para o servidor e recarregue a pagina
    
    const dados = new FormData(formularioCesar); // lista de objetos do formulario
    const textoAntes = dados.get('textoAntesCC');
    const deslocamento = dados.get('deslocamento');
    const deslocamentoN = parseInt(deslocamento);
    
    const criptoCC = codificar(deslocamentoN, textoAntes);
    
    resultado.textContent = `Texto criptografado: ${criptoCC}`;

});
