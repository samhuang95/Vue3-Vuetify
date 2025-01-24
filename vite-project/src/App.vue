// src/App.vue
<template>
  <v-app>
    <NavSidebar v-model:drawer="drawer" v-model:rail="rail" :mobile="mobile" />

    <AppHeader v-model:drawer="drawer" :mobile="mobile" />

    <v-main class="bg-grey-lighten-2">
      <!-- <v-container fluid>
        <router-view></router-view>
      </v-container> -->
      <div style="padding: 1rem">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import NavSidebar from '@/components/layout/NavSidebar.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

const { mobile } = useDisplay() // mobile, tablet, desktop 可以引入這些來進行斷點設定
const drawer = ref(true)
const rail = ref(false)

// 監聽視窗大小變化
const handleResize = () => {
  if (window.innerWidth < 960) {
    rail.value = false
    drawer.value = false
  } else {
    drawer.value = true
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
