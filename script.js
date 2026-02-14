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

botaoAdicionarTarefa?.addEventListener("click", (event) => {
  event.preventDefault()
  
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  
  const label = document.createElement("label")
  label.textContent = input.value
  
  let li = document.createElement("li")
  
  li.appendChild(checkbox)
  li.appendChild(label)
  
  checkbox.addEventListener("change", (c) => {
    
  const checagem = c.target.checked
    
    if(checagem) {
      ulConcluido.appendChild(li)
    } else {
      ulPendente.appendChild(li)
    }
 })
 
 const excluir = document.createElement("button")
 editar.textContent = "Excluir"
 
 editar.addEventListener("click", () => {
   li.remove()
 })
 
 li.appendChild(editar)
 ulPendente.appendChild(li)
 
 input.value = ""
})
