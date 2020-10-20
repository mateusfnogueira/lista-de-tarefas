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
        @keyup.enter="onSubmit"
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

export default {
  name: "Home",
  components: {},
};
</script>
