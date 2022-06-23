<script setup lang="ts">
import { ref } from "vue";
import { options, picList } from "./baseData/selector";

const setItemValue = (item) => {};
const tableData = ref({
  tHead: [
    {
      key: "id",
      text: "学号",
      editable: false,
    },
    {
      key: "name",
      text: "姓名",
      editable: false,
    },
    {
      key: "age",
      text: "年龄",
      editable: false,
    },
    {
      key: "chinese",
      text: "语文",
      editable: true,
    },
    {
      key: "math",
      text: "数学",
      editable: true,
    },
    {
      key: "english",
      text: "英语",
      editable: true,
    },
  ],
  tBody: [
    {
      id: 1,
      name: "Yjj",
      age: 21,
      chinese: 121,
      math: 90,
      english: 138,
    },
    {
      id: 2,
      name: "嘿毛",
      age: 20,
      chinese: 111,
      math: 32,
      english: 43,
    },
    {
      id: 3,
      name: "big龙",
      age: 19,
      chinese: 44,
      math: 21,
      english: 11,
    },
    {
      id: 4,
      name: "嫖瓜",
      age: 21,
      chinese: 80,
      math: 40,
      english: 45,
    },
  ],
});

const editData = ({ index, key, value, text }) => {
  tableData.value.tBody[index][key] = value;
};
</script>

<template>
  <Selector
    placeholder="请选择书籍"
    :options="options"
    @setItemValue="setItemValue"
  />
  <Table
    :tableData="tableData.tBody"
    :tableColumn="tableData.tHead"
    @editData="editData"
  ></Table>
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
  height: 280px;
  margin: 150px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
