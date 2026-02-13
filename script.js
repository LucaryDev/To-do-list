//HTML
// input
let input = document.getElementById("nome")
 
//botao
const botaoAdicionarTarefa = document.getElementById("botaoNome")

// ID
const ulPendente = document.getElementById("pendente")
const ulConcluido = document.getElementById("concluido")

//JS
class tarefa {
  constructor(nome) {
    this.id = tarefas.length + 1
    this.nome = nome
  }
}

const tarefas = []

botaoAdicionarTarefa?.addEventListener("click", (event) => {
  event.preventDefault()
  
  const inputCheckbox = document.createElement("input")
  inputCheckbox.type = "checkbox"
  
  
  let li = document.createElement("li")
  li.textContent = input.value
  ulPendente.appendChild(li)
})
