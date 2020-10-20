<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <v-row justify="center" align="center" no-gutters class="py-6">
      <v-col
        v-for="(task, index) in tarefas"
        :key="index"
        cols="12"
        sm="5"
        md="4"
        lg="3"
        class="d-flex align-center justify-center my-4"
      >
        <v-card
          @dblclick="updTask(index)"
          class="my-6 py-3 px-5 todo-card"
          :style="
            task.completed ? 'background-color: green' : 'background-color: red'
          "
        >
          <p
            class="mb-0 n-card"
            :style="task.completed ? 'text-decoration: line-through' : ''"
          >
            {{ task.title }}
            <v-icon color="white" @click="delTask(index)">mdi-trash-can</v-icon>
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("tarefas", ["delTask", "updTask"]),
  },

  computed: {
    ...mapState("tarefas", ["tarefas"]),
  },
};
</script>

<style>
.todo-card {
  cursor: pointer;
}
.n-card {
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
}
</style>
