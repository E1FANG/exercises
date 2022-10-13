<script setup lang="ts">
import { computed, reactive, toRef,ref } from 'vue'

const props = withDefaults(defineProps<{
  cols:ColsItem[] | []
}>(),{
  cols:()=>[]
})

const cols = toRef(props,'cols')

const formInline = reactive({
  user: '',
  region: '',
})
const onSubmit = () => {
  console.log('submit!')
}

const shrinkIndex = ref(0)

const needShrink = computed(()=>{
  let  spanCount = 0
  let shrink = false
  let flag = true
  cols.value.forEach((e,i)=>{
    spanCount += e.span
    if(spanCount >= 24 && flag){
      flag = false
      shrink = true
      shrinkIndex.value = i
    }
  })
  return Boolean(shrink)
})
console.log(needShrink.value);
console.log(shrinkIndex.value);
</script>

<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Approved by">
      <el-input v-model="formInline.user" placeholder="Approved by" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="formInline.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>

</style>