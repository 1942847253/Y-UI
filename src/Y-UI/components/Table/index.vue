<template>
  <table class="y-table" :style="`width:${props.width}`">
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
          :style="{ width: getWidth(key) ? getWidth(key) + 'px' : '' }"
          v-for="(value, key) in item"
          :key="key"
          @click.stop="showEditInput($event, key, index)"
        >
          <slot
            name="table"
            :tableColumn="getTargetColumn(key)"
            :tableData="item"
          >
            {{ !editInputApp && value }}</slot
          >
        </td>
        <td>
          <slot name="operation" :item="item" :index="index"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { App, createApp, reactive, ref } from "vue";
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
  width: {
    tpye: String,
    default: "100%",
  },
});

const emit = defineEmits(["editData"]);
const state = reactive({
  key: "",
  value: "",
  index: -1,
  text: "",
});

const getWidth = (key) => {
  return props.tableColumn.find((item) => item.key === key).width || null;
};
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

const getTargetColumn = (key) => {
  return props.tableColumn.find((item) => item.key === key);
};
window.addEventListener("click", () => removeEditInputApp(editInputApp), false);
</script>

<style lang="scss" scoped>
.y-table {
  border-collapse: collapse;
  tr {
    color: #606266;
    height: 44px;
    border: none;
    border-bottom: 1px solid #ebeef5;

    td {
      position: relative;
      text-align: left;
      padding: 10px 10px;
      font-size: 13px;
      cursor: pointer;
      height: 100%;
    }
  }
  thead {
    th {
      color: #909399;
      font-size: 14px;
      text-align: left;
      padding: 0 8px;
    }
  }
  tbody {
    tr:hover {
      background-color: #f6f7fb;
    }
  }
}
</style>
