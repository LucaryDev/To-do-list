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
  
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  
  const label = document.createElement("label")
  label.textContent = input.value
  
  let li = document.createElement("li")
  
  li.appendChild(checkbox)
  li.appendChild(label)
  
  ulPendente.appendChild(li)
})
