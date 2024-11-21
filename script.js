const form = document.getElementById('form');
const username = document.getElementById('username');
const emailInput = document.getElementById('email');
const senha = document.getElementById('password');
const confirmarSenha = document.getElementById('confirmarSenha');

form.addEventListener('submit', (e) => {
   e.preventDefault() // Corrigido para chamar a função
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = emailInput.value; // Usando a variável renomeada
    const senhaValue = senha.value; // Renomeado para evitar confusão
    const confirmarSenhaValue = confirmarSenha.value;

    if (usernameValue === '') {
        setErrorFor(username, 'O nome de usuario é obrigatorio');
    } else {
        setSuccessFor(username);
    }
    if (emailValue === ''){
        setErrorFor(emailInput, 'O email é obrigatorio')
    }
    else{
        setSuccessFor(emailInput)
    }
    if(senhaValue === ''){
        setErrorFor(senha, 'Senha é obrigatoria')
    }else if(senhaValue.length < 7){
        setErrorFor(senha, 'O minimo é 8 caracteres')
    }else{
        setSuccessFor(senha)
    }

    if(confirmarSenhaValue == ''){
        setErrorFor(confirmarSenha, 'as senhas não são iguais')
    }else if(senhaValue !== confirmarSenhaValue){
        setErrorFor(confirmarSenha, 'As senhas não são iguais')
    }else{
        setSuccessFor(confirmarSenha)
    }
   
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //formcontrol
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error'; // Isso deve mudar a classe corretamente
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; // Para definir a classe de sucesso
}