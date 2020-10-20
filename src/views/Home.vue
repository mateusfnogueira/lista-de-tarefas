<template>
  <v-row align="center" class="flex-column" no-gutters>
    <v-card min-height="50px" max-width="320px">
      <v-text-field
        v-model.trim="task.title"
        class="pa-8"
        label="Nova Tarefa"
        hide-details="auto"
        type="text"
        outlined
        @keyup.enter="adicionarTask()"
      >
        <v-icon slot="prepend" color="blue">
          mdi-checkbook
        </v-icon>
      </v-text-field>
    </v-card>
    <v-btn class="ma-2" color="info" @click.stop="adicionarTask()">
      Add Tarefa
    </v-btn>
  </v-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      task: {
        title: "",
        completed: false,
      },
    };
  },
  computed: {
    ...mapState("tarefas", ["tarefas"]),
  },
  methods: {
    ...mapActions("tarefas", ["addTask"]),
    adicionarTask() {
      this.addTask({
        id: this.tarefas.length,
        title: this.task.title,
        completed: this.task.completed,
      });
      this.task = {
        title: "",
        completed: false,
      };
    },
  },
};
</script>
