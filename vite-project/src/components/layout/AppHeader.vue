<template>
  <v-app-bar elevation="1">
    <v-app-bar-nav-icon @click="drawerModel = !drawerModel" v-show="mobile"></v-app-bar-nav-icon>

    <v-app-bar-title>Vue 3 + Vuetify Template</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  drawer: boolean
  mobile: boolean
}

interface Emits {
  (e: 'update:drawer', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const drawerModel = computed({
  get: () => props.drawer,
  set: (value) => emit('update:drawer', value),
})
</script>
