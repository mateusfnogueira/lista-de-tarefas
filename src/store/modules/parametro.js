export default {
    state: {
        completed: false
    },
    mutations: {
        setCompleted(state, tarefa) {
            state.completed = tarefa
        }
    }
}