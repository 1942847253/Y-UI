<template>
  <div class="y-radio-content">
    <input
      class="radio_type"
      type="radio"
      name="type"
      :id="valueSlot"
      :checked="checked"
    />
    <label :for="valueSlot">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
    },
    value: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const valueSlot = ref<string>("");
    const checked = ref<boolean>(false);
    onMounted(() => {
      checked.value = props.modelValue === props.value ? true : false;
      valueSlot.value = instance.slots.default()[0].children as string;
    });

    return {
      checked,
      valueSlot,
    };
  },
});
</script>

<style lang="scss" scoped>
.y-radio-content {
  display: flex;
  cursor: pointer;
}
.label {
  line-height: 20px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 15px;
  color: #777;
}
label {
  padding-left: 5px;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
}

.radio_type {
  width: 15px;
  height: 15px;
  appearance: none;
  position: relative;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

.radio_type:before {
  content: "";
  width: 15px;
  height: 15px;
  border: 1px solid #7d7d7d;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}

.radio_type:checked:before {
  content: "";
  width: 15px;
  height: 15px;
  border: 1px solid #2a6ef8;
  background: #2a6ef8;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
  opacity: 1;
}

.radio_type:checked:after {
  content: "";
  width: 7.5px;
  height: 4px;
  border: 2px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  display: block;
  position: absolute;
  top: 4.5px;
  left: 4px;
  transform: rotate(-45deg);
}

.radio_type:checked + label {
  color: #2a6ef8;
  font-size: 15px;
}
</style>
