<script setup lang="ts">
import { options } from "./baseData/selector";

const setItemValue = (item) => {};
</script>

<template>
  <Selector
    placeholder="请选择书籍"
    :options="options"
    @setItemValue="setItemValue"
  />
</template>

<style></style>
