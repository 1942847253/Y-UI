<template>
  <y-selector placeholder="请选择书籍" isSearch :options="options" @setItemValue="setItemValue" />

  <div style="width: 60%">
    <y-table :tableData="tableData.tBody" :tableColumn="tableData.tHead" @editData="editData">
      <template #table="{ tableColumn, tableData }">
        <img v-if="tableColumn.key === 'name'" width="70" height="70"
          src="https://s3m4.fenxi.com/galileo/85c6b2e7b4b94eaf3d9bc0373b5f5f05.gif_.webp" alt="" />

      </template>
      <template #operation="{ item, index }">
        <y-button type="primary">编辑</y-button>&nbsp;
        <y-button type="danger" @click="deleteItem(item.id)">删除</y-button>
      </template>
    </y-table>
    <y-tag v-for="(item, index) in testList" :key="item.id" type="warning" :closeable="true"
      @closeEvent="closeTag(index)">{{
          item.name
      }}</y-tag>

    <y-button>确定</y-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { options, picList } from "./baseData/selector";

const testList = ref([
  {
    id: 1,
    name: 'yjj'
  },
  {
    id: 2,
    name: 'big龙'
  },
  {
    id: 3,
    name: '嘿毛'
  }
])

const closeTag = (index) => {
  testList.value.splice(index, 1)
  console.log(testList.value);
}

const setItemValue = (item) => { };
const tableData = ref({
  tHead: [
    {
      key: "id",
      text: "学号",
      width: 100,
    },
    {
      key: "name",
      text: "姓名",
      width: 100,
    },
    {
      key: "age",
      text: "年龄",
      width: 100,
    },
    {
      key: "chinese",
      text: "语文",
      editable: true,
      width: 100,
    },
    {
      key: "math",
      text: "数学",
      editable: true,
      width: 100,
    },
    {
      key: "english",
      text: "英语",
      editable: true,
      width: 100,
    },
    {
      key: "operation",
      text: "操作",
      width: 100,
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

const deleteItem = (id) => {
  tableData.value.tBody = tableData.value.tBody.filter(
    (item) => item.id !== id
  );
};
</script>

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
