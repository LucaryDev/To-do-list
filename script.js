//HTML
// input
let input = document.getElementById("nome")
 
//botao
const botaoAdicionarTarefa = document.getElementById("botaoNome")

// ID
const ulPendente = document.getElementById("pendente")
const ulConcluido = document.getElementById("concluido")

//JS
function criarTarefa (nomeTarefa) {
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  
  const label = document.createElement("label")
  label.textContent = nomeTarefa
  
  const excluir = document.createElement("button")
  excluir.textContent = "Excluir"
 
 const editar = document.createElement("button")
 editar.textContent = "Editar"
  
  let li = document.createElement("li")
  
// adicionando eventos
  checkbox.addEventListener("change", (c) => {
    
  const checagem = c.target.checked
    
    if(checagem) {
      ulConcluido.appendChild(li)
    } else {
      ulPendente.appendChild(li)
    }
 })
 
 excluir.addEventListener("click", () => {
   li.remove()
 })
 
 editar.addEventListener("click", () => {
   const novoNome = prompt("Qual o novo nome da tarefa?")
   
   label.textContent = novoNome
 })
 
 // adicionando elementos no li
 li.appendChild(checkbox)
 li.appendChild(label)
 li.appendChild(excluir)
 li.appendChild(editar)
 
 return li
}

botaoAdicionarTarefa?.addEventListener("click", (event) => {
  event.preventDefault()

  const li = criarTarefa(input.value)
  ulPendente.appendChild(li)

  input.value = ""
})
