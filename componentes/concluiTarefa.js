
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'

    botaoConclui.addEventListener('click',concluirTarefa)

    return botaoConclui


}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target /* para descobrir em qual elemento cliquei */

    const tarefaCompleta = botaoConclui.parentElement /* pego o pai do elemento */

    tarefaCompleta.classList.toggle('done') /* método toggle que executa a classe css done quando eu clicar no botão */

}

export default BotaoConclui