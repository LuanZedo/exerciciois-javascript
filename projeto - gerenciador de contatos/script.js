const inputNome = document.getElementById("nome");
const inputTelefone = document.getElementById("telefone");
const inputEmail = document.getElementById("email");
const btnAddContato = document.getElementById("addContatoBtn");
const listaContatos = document.getElementById("listaContatos");

btnAddContato.addEventListener("click", () => {
  let contato = {
    nome: inputNome.value,
    telefone: inputTelefone.value,
    email: inputEmail.value,
  };
  if (contato.nome && contato.telefone && contato.email) {
    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos.push(contato);

    addContatoLista(contato);

    localStorage.setItem("contatos", JSON.stringify(contatos));

    inputNome.value = "";
    inputTelefone.value = "";
    inputEmail.value = "";
  }
  else {
    alert("preencha todos os campos")
  };
});

function carregarContatos() {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.forEach((contato) => {
    addContatoLista(contato);
  });
};
window.addEventListener("load", carregarContatos);

function addContatoLista(contato) {
  let li = document.createElement("li");
  li.innerHTML = `Nome: ${contato.nome} <br>Telefone: ${contato.telefone} <br>Email: ${contato.email} <br>`;
  
  let btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";

  btnExcluir.addEventListener("click", () => {
    excluirContato(contato);
    li.remove();
  });

  li.appendChild(btnExcluir);
  listaContatos.appendChild(li);
};

function excluirContato(contatoExcluir) {
  let contatos = JSON.parse(localStorage.getItem("contatos"));

  contatos = contatos.filter(
    (contato) =>
      contato.nome !== contatoExcluir.nome ||
      contato.telefone !== contatoExcluir.telefone ||
      contato.email !== contatoExcluir.email
  );

  localStorage.setItem("contatos", JSON.stringify(contatos)); // Atualizar o localStorage
};



