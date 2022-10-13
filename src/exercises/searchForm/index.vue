<script setup lang="ts">
import { ref } from "vue";
import SearchForm from "./searchForm.vue";

const cols = ref<ColsItem[]>([{
  label:'名称',
  span:4,
  type:'input'
},{
  label:'性别',
  span:24,
  type:'input'
},{
  label:'年龄',
  span:4,
  type:'input'
},{
  label:'地址',
  span:24,
  type:'input'
}])
</script>

<template>
  <SearchForm :cols="cols"/>
</template>

<style lang="scss" scoped>

</style>