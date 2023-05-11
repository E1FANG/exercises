<script setup lang="ts">
import { Suspense } from 'vue';
import SuspenseChild from "./suspenseChild.vue";


</script>

<template>
  <div class="container">
    <Suspense>
      <template #default>
        <SuspenseChild v-for="item in 2" :key="item">
          <Suspense>
            <SuspenseChild v-for="item in 2" :key="item">
              <Suspense>
                <SuspenseChild v-for="item in 2" :key="item">
                </SuspenseChild>

                <template #fallback>
                  loading...
                </template>
              </Suspense>
            </SuspenseChild>

            <template #fallback>
              loading...
            </template>
          </Suspense>
        </SuspenseChild>

      </template>
      <template #fallback>
        loading...
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 500px;
}
</style>