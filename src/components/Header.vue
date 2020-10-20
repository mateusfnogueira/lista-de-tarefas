<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title class="mr-4">Lista de Tarefas</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/" active-class="active" exact>
        <v-btn text>Início</v-btn>
      </router-link>
      <router-link to="/tasks" active-class="active">
        <v-btn text>Lista de Tarefas</v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>

</script>

<style></style>
