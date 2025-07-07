document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const msgResultado = document.getElementById("msg-resultado");
  const btnTopo = document.getElementById("btn-topo");

  if (form && msgResultado) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msgResultado.textContent = "";
      msgResultado.style.color = "red";

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (nome === "") {
        msgResultado.textContent = "Por favor, preencha o nome.";
        form.nome.focus();
        return;
      }

      if (!validateEmail(email)) {
        msgResultado.textContent = "Por favor, insira um e-mail válido.";
        form.email.focus();
        return;
      }

      if (mensagem === "") {
        msgResultado.textContent = "Por favor, escreva uma mensagem.";
        form.mensagem.focus();
        return;
      }

      msgResultado.style.color = "green";
      msgResultado.textContent =
        "Mensagem enviada com sucesso! Obrigado pelo contato.";

      form.reset();
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  if (btnTopo) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTopo.style.display = "block";
      } else {
        btnTopo.style.display = "none";
      }
    });

    btnTopo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
