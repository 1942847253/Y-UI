<script setup lang="ts">
import { options, picList } from "./baseData/selector";

const setItemValue = (item) => {};
</script>

<template>
  <Selector
    placeholder="请选择书籍"
    :options="options"
    @setItemValue="setItemValue"
  />
  <div class="box">
    <Rotation
      :autoplay="true"
      :duration="3000"
      :initial="2"
      :hasDot="true"
      :hasDirector="true"
    >
      <Rotation-Item v-for="(item, index) in picList" :key="index">
        <img :src="item.path" alt="" />
      </Rotation-Item>
    </Rotation>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 500px;
  margin: 150px auto;
}
</style>
