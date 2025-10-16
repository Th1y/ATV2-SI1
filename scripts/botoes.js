const body = document.body;
const themeToggle = document.getElementById("mudarTema");
const criptoOuDescripto = document.getElementById('codificarOuDecodificar');

// Botão para mudar de tema claro para escuro
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
});

// Botao para alterar de criptografar para descriptografar
window.criptoValue = 0;
criptoOuDescripto.addEventListener('click', () => {
    criptoValue = criptoValue === 0 ? 1 : 0;
        console.log(criptoValue);
        criptoOuDescripto.classList.toggle('decodificar');
        
        if (criptoValue == 1) {
            criptoOuDescripto.textContent = "Quero Descriptografar";
       
        } else {
            criptoOuDescripto.textContent = "Quero Criptografar";
        };
});
