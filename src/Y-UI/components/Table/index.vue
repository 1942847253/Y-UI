<template>
  <table class="y-table">
    <thead>
      <tr>
        <th v-for="info of props.tableColumn" :key="info.key">
          {{ info.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of props.tableData" :key="item.id">
        <td
          v-for="(value, key) in item"
          :key="key"
          @click.stop="showEditInput($event, key, index)"
        >
          {{ !editInputApp && value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { stat } from "fs";
import { App, createApp, reactive } from "vue";
import EditInput from "./EditInput/EditInput.vue";
let editInputApp: null | App<Element> = null;
const props = defineProps({
  tableData: {
    type: Array as any,
    default: () => [],
  },
  tableColumn: {
    type: Array as any,
    default: () => [],
  },
});
const emit = defineEmits(["editData"]);
const state = reactive({
  key: "",
  value: "",
  index: -1,
  text: "",
});
const setValue = (value) => {
  state.value = value;
  emit("editData", state);
};
const showEditInput = (event: Event, key, index) => {
  editInputApp && removeEditInputApp(editInputApp);
  if (!checkEditbale(key)) return;
  const target = event.target as any;
  const oFrag = document.createDocumentFragment() as any;
  editInputApp = createApp(EditInput, {
    value: target.innerText as string,
    setValue,
  });
  if (editInputApp) {
    editInputApp.mount(oFrag);
    target.appendChild(oFrag);
    target.querySelector(".edit-input").select();
  }
  setData({ index, key });
};
const removeEditInputApp = (editInputApp) => {
  editInputApp && editInputApp.unmount();
};

const setData = ({ index, key, text = "" }) => {
  console.log(key);
  state.text = props.tableColumn.find((item) => item.key === key).text;
  state.key = key;
  state.index = index;
};

const checkEditbale = (key: number) => {
  const { editable } = props.tableColumn.find((item) => item.key === key);
  return editable;
};
window.addEventListener("click", () => removeEditInputApp(editInputApp), false);
</script>

<style lang="scss" scoped>
.y-table {
  width: 100%;
  border-collapse: collapse;
  table {
    border: none;
  }
  th {
    color: #909399;
    font-size: 14px;
  }
  tr {
    color: #606266;
    height: 44px;
    border: none;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;

    td {
      position: relative;
      text-align: center;
      cursor: pointer;
    }
  }
  tr:hover {
    background-color: #f6f7fb;
  }
}
</style>
