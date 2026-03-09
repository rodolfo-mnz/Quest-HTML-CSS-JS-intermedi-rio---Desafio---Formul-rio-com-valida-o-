const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');

const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroTelefone = document.getElementById('erro-telefone');
const erroMensagem = document.getElementById('erro-mensagem');

// Função para validar email
function validarEmail(emailValue) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
}

// Função para limpar erro de um campo
function limparErro(input, erroElemento) {
    input.classList.remove('error');
    erroElemento.textContent = '';
}

// Função para mostrar erro em um campo
function mostrarErro(input, erroElemento, mensagem) {
    input.classList.add('error');
    erroElemento.textContent = mensagem;
}

// Função para validar um campo
function validarCampo(input, erroElemento, validadorCustomizado = null) {
    const valor = input.value.trim();

    if (valor === '') {
        mostrarErro(input, erroElemento, 'Campo obrigatório');
        return false;
    }

    if (validadorCustomizado && !validadorCustomizado(valor)) {
        mostrarErro(input, erroElemento, 'Formato inválido');
        return false;
    }

    limparErro(input, erroElemento);
    return true;
}

// Event listener para o form submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar todos os campos
    const nomeValido = validarCampo(nome, erroNome);
    const emailValido = validarCampo(email, erroEmail, validarEmail);
    const telefoneValido = validarCampo(telefone, erroTelefone);
    const mensagemValida = validarCampo(mensagem, erroMensagem);

    // Se todos os campos forem válidos
    if (nomeValido && emailValido && telefoneValido && mensagemValida) {
        alert('Formulário enviado com sucesso!');
        formulario.reset();
    }
});

// Remover erro quando o usuário começa a digitar
nome.addEventListener('input', () => {
    if (nome.value.trim() !== '') {
        limparErro(nome, erroNome);
    }
});

email.addEventListener('input', () => {
    if (email.value.trim() !== '') {
        limparErro(email, erroEmail);
    }
});

telefone.addEventListener('input', () => {
    if (telefone.value.trim() !== '') {
        limparErro(telefone, erroTelefone);
    }
});

mensagem.addEventListener('input', () => {
    if (mensagem.value.trim() !== '') {
        limparErro(mensagem, erroMensagem);
    }
});
