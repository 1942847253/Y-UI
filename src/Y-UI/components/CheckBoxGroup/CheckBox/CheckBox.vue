<template>
  <div class="y-checked-content" @click="changeChecked">
    <input class="checkbox" :id="valueSlot" type="checkbox" :checked="checked" />
    <div :class="`label`">
      <slot>{{ valueSlot && valueSlot }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: [Array, Boolean],
      default: [],
    },
    value: {
      type: Number,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const valueSlot = ref<string>("");
    const checked = ref<boolean>(false);

    onMounted(() => {
      if (Array.isArray(props.modelValue)) {
        checked.value = props.modelValue.indexOf(props.value) !== -1 ? true : false;
      } else {
        checked.value = props.modelValue;
      }

      console.log();
      if (instance.slots.default) {
        valueSlot.value = instance.slots.default()[0].children as string;
      }
    });
    const onChange = (e) => {
      console.log(e);
    };

    const changeChecked = () => {
      checked.value = !checked.value;
      if (typeof props.modelValue === "boolean") {
        emit("update:modelValue", checked.value);
      }
    };

    return {
      valueSlot,
      checked,
      onChange,
      changeChecked,
    };
  },
});
</script>

<style lang="scss" scoped>
.y-checked-content {
  cursor: pointer;
  display: flex;
  margin-right: 8px;
  input {
    width: 15px;
    height: 15px;
  }
  .label {
    margin-left: 3px;
    font-size: 14px;
  }
}
</style>
