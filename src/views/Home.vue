<script lang="ts" setup>
import { ref , onMounted } from 'vue';

  const cavsDom = ref<any>(null)

  onMounted(() => {
    console.log(cavsDom.value)
  })
</script>
<template>
  <div class="main_container">
    <canvas ref="cavsDom"></canvas>
  </div>
</template>
<style lang="scss" scoped>

</style>