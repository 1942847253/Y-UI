<template>
  <div class="rotation">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { stat } from "fs";
import {
  defineComponent,
  reactive,
  toRefs,
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
} from "vue";

export default defineComponent({
  name: "Rotation",
  props: {
    autoplay: {
      type: Boolean,
      defualut: true,
    },
    duration: {
      type: Number,
      defualut: 3000,
    },
    initial: {
      type: Number,
      defualut: 0,
    },
    hasDot: {
      type: Boolean,
      defualut: true,
    },
    hasDirector: {
      type: Boolean,
      defualut: true,
    },
  },
  emits: [],
  setup(props, { emit }) {
    let timer: null | NodeJS.Timer = null;
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      picLength: 0,
    });

    onMounted(() => {
      console.log(instance!.slots.default!()[0].children!.length);
      state.picLength = instance!.slots.default!()[0].children!
        .length as number;
      autoplay();
    });

    onBeforeUnmount(() => {
      clearInterval(timer as NodeJS.Timer);
      timer = null;
    });

    const autoplay = () => {
      if (props.autoplay) {
        timer = setInterval(() => {
          setPicIndex("next");
        }, props.duration);
      }
    };

    const setPicIndex = (dir: "next" | "pre") => {
      switch (dir) {
        case "next":
          state.currentIndex! += 1;
          if (state.currentIndex === state.picLength) {
            state.currentIndex = 0;
          }
          break;
        case "pre":
          state.currentIndex! -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.picLength - 1;
          }
          break;
        default:
          break;
      }
    };
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.rotation {
  width: 100%;
  height: 100%;

  .inner {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
}
</style>
