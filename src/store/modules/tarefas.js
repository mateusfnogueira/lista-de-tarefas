export default {
    namespaced: true,
    state: {
        tarefas: []
    },
    mutations: {
        addTask(state, tarefa) {
            state.tarefas.push(tarefa)
        }
    },
    actions: {
        addTask({ commit }, tarefa) {
            setTimeout(() => {
                commit('addTask', tarefa)
            }, 500);
        }
    }
}