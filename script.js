document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const messageContainer = document.getElementById("message-container");

    // Validação simples: Verifica se os campos estão preenchidos.
    if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
        const errorMessage = "Por favor, preencha todos os campos.";
        messageContainer.textContent = errorMessage;
        messageContainer.style.color = "red";
    } else {
        // Aqui você pode adicionar código para processar o formulário, como envio de e-mail.
        // Substitua o código abaixo com a lógica real de envio de e-mail.

        const successMessage = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        messageContainer.textContent = successMessage;
        messageContainer.style.color = "green";

        // Limpa os campos após o envio bem-sucedido (opcional).
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
    }
});

