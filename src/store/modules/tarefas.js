export default {
    namespaced: true,
    state: {
        tarefas: []
    },
    mutations: {
        addTask(state, tarefa) {
            state.tarefas.push(tarefa)
        },
        delTask(state, tarefa) {
            state.tarefas.splice(tarefa, 1)
        },
        updTask(state, tarefa) {
            state.tarefas[tarefa].completed = !state.tarefas[tarefa].completed;
        }
    },
    actions: {
        addTask({ commit }, tarefa) {
            commit("addTask", tarefa)
        },
        delTask({ commit }, tarefa) {
            commit("delTask", tarefa)
        },
        updTask({ commit }, tarefa) {
            commit("updTask", tarefa)
        }
    }
}