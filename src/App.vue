<template>
  <y-selector placeholder="请选择书籍" :options="options" @setItemValue="setItemValue" />
  <y-switch></y-switch>
  <div>
    <y-table
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
        <y-tag type="success" v-if="tableColumn.key === 'age'">{{
          tableData.age + " 岁"
        }}</y-tag>
      </template>
      <template #operation="{ item, index }">
        <y-button type="success">成功</y-button>
        <y-button type="primary">添加 </y-button>
        <y-button type="danger" :disabled="false" @click="deleteItem(item.id)"
          >删除</y-button
        >
        <y-button type="info">编辑</y-button>
        <y-button type="warning">提醒</y-button>
        <y-button :disabled="true" t>锁定</y-button>
        <y-button>确定</y-button>
      </template>
    </y-table>
    <y-checkbox v-model="checked">萨嘎</y-checkbox>
    <y-tag
      v-for="(item, index) in testList"
      :key="item.id"
      type="success"
      :closeable="true"
      @closeEvent="closeTag(index)"
    >
      {{ item.name }}</y-tag
    >
  </div>
  <div class="box">
    <y-rotation
      :autoplay="true"
      :duration="3000"
      :initial="2"
      :hasDot="true"
      :hasDirector="true"
    >
      <y-rotation-item v-for="(item, index) in picList" :key="index">
        <img :src="item.path" alt="" />
      </y-rotation-item>
    </y-rotation>
  </div>
  <y-radio-group v-model="value1" :options="radioList" @change="onChange"></y-radio-group>
  <y-checkbox-group v-model="value2" :options="radioList" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { options, picList } from "./baseData/selector";

onMounted(() => {});
const checked = ref(true);
const value1 = ref(2);
const value2 = ref([1, 2]);
const testList = ref([
  {
    id: 1,
    name: "yjj",
  },
  {
    id: 2,
    name: "big龙",
  },
  {
    id: 3,
    name: "嘿毛",
  },
]);

const radioList = ref([
  {
    label: "杨俊杰",
    value: 1,
  },
  {
    label: "big龍",
    value: 2,
  },
  {
    label: "嘿毛",
    value: 3,
  },
]);

watch(
  () => value1.value,
  () => {
    console.log(value1.value);
  }
);

watch(
  () => checked.value,
  () => {
    console.log(checked.value);
  }
);

watch(
  () => value2.value,
  () => {
    console.log(value2.value);
  }
);

const onChange = (item) => {
  console.log(item);
};

const closeTag = (index) => {
  testList.value.splice(index, 1);
};

const eventTest = () => {
  console.log(testList.value[1].name);
};

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
  tableData.value.tBody = tableData.value.tBody.filter((item) => item.id !== id);
};
</script>

<style lang="scss" scoped>
.box {
  width: 500px;
  height: 280px;
  margin: 10px auto;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
