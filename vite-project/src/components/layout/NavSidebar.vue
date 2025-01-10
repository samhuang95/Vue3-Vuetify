<template>
  <v-navigation-drawer
    v-model="drawerModel"
    :rail="railModel"
    permanent
    @click="railModel = false"
    :temporary="mobile"
    class="bg-grey-lighten-3"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      :title="railModel ? '' : 'John Doe'"
      :subtitle="railModel ? '' : 'johndoe@example.com'"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="railModel = !railModel"
          v-show="!mobile"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.text"
        :value="item"
        :prepend-icon="item.icon"
        :title="railModel ? '' : item.text"
        :to="item.route"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { navigationItems } from '@/config/navigation'

interface Props {
  drawer: boolean
  rail: boolean
  mobile: boolean
}

interface Emits {
  (e: 'update:drawer', value: boolean): void
  (e: 'update:rail', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const drawerModel = computed({
  get: () => props.drawer,
  set: (value) => emit('update:drawer', value),
})

const railModel = computed({
  get: () => props.rail,
  set: (value) => emit('update:rail', value),
})
</script>
