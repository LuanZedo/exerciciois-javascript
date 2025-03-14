function gerenciarTarefas(arr, acao, tarefa) {
    switch (acao.toLowerCase()) {
        case 'adicionarfim':
            arr.push(tarefa)
            break

        case 'adicionarinicio':
            arr.unshift(tarefa)
            break
        case 'removerfim':
            arr.pop()
            break
        case 'removerinicio':
            arr.shift()
            break
        default:
            console.log(`acao invalida`)
            break
    }
}

const tarefas = ['lavar', 'correr', 'estudar', 'jogar']

gerenciarTarefas(tarefas, 'adicionarInicio', 'limpar')

console.log(tarefas)