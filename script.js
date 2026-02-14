//HTML
// input
let input = document.getElementById("nome")
 
//botao
const botaoAdicionarTarefa = document.getElementById("botaoNome")

// ID
const ulPendente = document.getElementById("pendente")
const ulConcluido = document.getElementById("concluido")

//JS
botaoAdicionarTarefa?.addEventListener("click", (event) => {
  event.preventDefault()
  
//  criando partes html
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  
  const label = document.createElement("label")
  label.textContent = input.value
  
  const excluir = document.createElement("button")
 editar.textContent = "Excluir"
  
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
 
 editar.addEventListener("click", () => {
   li.remove()
 })
 
 // adicionando elementos no li
 li.appendChild(checkbox)
 li.appendChild(label)
 li.appendChild(editar)
 
 ulPendente.appendChild(li)
 
 input.value = ""
})
