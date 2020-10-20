<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <v-row justify="center" align="center" no-gutters class="py-6">
      <v-col
        v-for="task in tasks"
        :key="task.id"
        cols="12"
        sm="5"
        md="4"
        lg="3"
        class="d-flex align-center justify-center my-4"
      >
        <v-card @dblclick="taskDone" color="white" class="my-6 py-3 px-5">
          <p class="mb-0 secondary--text text--lighten-7 n-card">
            {{ task.title }} / {{ task.pending }}
            <v-icon @click="removeTask(task.id)">mdi-trash-can</v-icon>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tasks: [
        { id: 1, title: "fazer compras", pending: true },
        { id: 2, title: "fazer compras", pending: false },
        { id: 3, title: "fazer compras", pending: false },
        { id: 4, title: "fazer compras", pending: true },
        { id: 6, title: "fazer compras", pending: true },
        { id: 7, title: "fazer compras", pending: true },
        { id: 8, title: "fazer compras", pending: true },
      ],
    };
  },
  methods: {
    taskDone() {
      // if (pending == true) {
      //   pending == false;
      // } else {
      //   pending == true;
      // }
      console.log("Tarefa executada com sucesso");
    },
    removeTask(id) {
      var _vm = this; //Adicionando a instância à uma variável, para que possa ser acessada dentro do forEach`
      this.tasks.forEach(function(el, index) {
        if (el.id === id) _vm.tasks.splice(index, 1);
      });
      console.log("Tarefa excluida com sucesso");
    },
  },
  computed: {
    tarefas() {
      return this.$store.state.tarefas.tarefas
    }
  }
};
</script>

<style>
.n-card {
  color: rgb(255, 72, 0);
  font-weight: 700;
  font-size: 18px;
}
</style>
