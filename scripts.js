const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
    mascara.style.visibility = "visible";
    mascara.style.opacity = "1";
    document.body.style.overflow = "hidden";
}

function esconderForm() {
    form.style.left = "-350px";
    form.style.transform = "translateY(-50%)";
    mascara.style.visibility = "hidden";
    mascara.style.opacity = "0";
    document.body.style.overflow = "auto";
}

function cliqueiNoFaleConosco() {
    mostrarForm();
}

function enviarForm(event) {
    event.preventDefault();

    const nome = event.target.nome.value;
    const telefone = event.target.telefone.value;
    const duvida = event.target.duvida.value;

    if (nome && telefone && duvida) {
        alert("Obrigada pelo contato! 💌 Vamos te responder rapidinho!");
        event.target.reset();
        esconderForm();
    }
}

// Fechar formulário com ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        esconderForm();
    }
});

// Prevenir scroll quando formulário estiver aberto
mascara.addEventListener('click', esconderForm);