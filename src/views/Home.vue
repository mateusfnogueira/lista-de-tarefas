<template>
  <v-row align="center" class="flex-column" no-gutters>
    <v-card min-height="50px" max-width="320px">
      <v-text-field
        v-model.trim="title"
        class="pa-8"
        label="Nova Tarefa"
        hide-details="auto"
        type="text"
        outlined
        @keyup.enter="addTask"
      >
        <v-icon slot="prepend" color="blue">
          mdi-checkbook
        </v-icon>
      </v-text-field>
    </v-card>
    <v-btn class="ma-2" color="info" @click="onSubmit">
      Add Tarefa
    </v-btn>
  </v-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      id: 0,
    };
  },
  computed: {
    completed() {
      return this.$store.state.parametro.completed;
    },
  },
  methods: {
    ...mapActions("tarefas", ["addTask"]),
    addTask() {
      const task = {
        id: this.id,
        title: this.title,
        completed: this.completed
      }
      this.id++
      this.addTask(task)
    }
  },
};
</script>
