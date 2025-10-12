const body = document.body;
const themeToggle = document.getElementById("mudarTema");
const criptoOuDescripto = document.getElementById('codificarOuDecodificar');

// Botão para mudar de tema claro para escuro
themeToggle.addEventListener('click', function(){
    body.classList.toggle('light');
});

// Botao para alterar de criptografar para descriptografar
window.criptoValue = 0;
criptoOuDescripto.addEventListener('click', () => {
    criptoValue = criptoValue === 0 ? 1 : 0;
        console.log(criptoValue);
        
});
