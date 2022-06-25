<script setup lang="ts">
import { ref } from "vue";
import { options, picList } from "./baseData/selector";

const setItemValue = (item) => {};
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

<template>
  <Selector
    placeholder="请选择书籍"
    :options="options"
    @setItemValue="setItemValue"
  />
  <div style="width: 54%">
    <Table
      :tableData="tableData.tBody"
      :tableColumn="tableData.tHead"
      @editData="editData"
    >
      <template #table="{ tableColumn, tableData }">
        <img
          v-if="tableColumn.key === 'name'"
          width="70"
          height="70"
          src="https://s3m4.fenxi.com/galileo/85c6b2e7b4b94eaf3d9bc0373b5f5f05.gif_.webp"
          alt=""
        />
      </template>
      <template #operation="{ item, index }">
        <button class="button1">编辑</button>&nbsp;
        <button class="button2" @click="deleteItem(item.id)">删除</button>
      </template>
    </Table>
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
.button1 {
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  background-color: #ff4d4f;
  color: #ffff;
  cursor: pointer;
}
.button2 {
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  background-color: #409eff;
  color: #ffff;
  cursor: pointer;
}
</style>
