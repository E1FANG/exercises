<script setup lang="ts">

const loading = (): Promise<void> => {
  return new Promise((resolve): void => {
    setTimeout(() => {
      console.log('finish log')
      resolve()
    }, 1500);
  })
}
await loading()

</script>

<template>
  <div class="loaded">
    child
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loaded {
  padding: 8px;
  background: rgba(36, 100, 73, 0.2);
}
</style>