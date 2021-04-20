<template>
  <div class="page-scale-container" ref="containerRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, onUnmounted } from "vue"

interface Options {
  width: number
  height: number
}

export default defineComponent({
  name: "StableRatioContainer",
  props: {
    options: Object as PropType<Options>,
    default: {}
  },
  setup(props) {
    const containerRef = ref<HTMLElement>()
    const width = ref(0)
    const height = ref(0)
    const originalWidth = ref(0)
    const originalHeight = ref(0)

    // 初始化宽高值
    const init = () => {
      width.value = props.options?.width || (containerRef.value?.clientWidth ?? 0)
      height.value = props.options?.height || (containerRef.value?.clientHeight ?? 0)
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width
        originalHeight.value = window.screen.height
      }
    }

    // 更新容器宽高
    const updateSize = () => {
      if (!containerRef.value) {
        return
      }
      if (width.value || height.value) {
        containerRef.value.style.width = `${width.value}px`
        containerRef.value.style.height = `${height.value}px`
      } else {
        containerRef.value.style.width = `${originalWidth.value}px`
        containerRef.value.style.height = `${originalHeight.value}px`
      }
    }

    // 等比缩放
    const updateScale = () => {
      if (!containerRef.value) {
        return
      }

      // 视口宽高
      const currentWidth = document.documentElement.clientWidth
      const currentHeight = document.documentElement.clientHeight

      // 真实宽高值
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value

      // 宽高比例
      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight

      containerRef.value.style.transform = `scale(${widthScale}, ${heightScale})`
    }

    const onResize = () => {
      init()
      updateScale()
    }

    onMounted(() => {
      init()
      updateSize()
      updateScale()
      // TODO debounce
      window.addEventListener("resize", onResize)
    })

    onUnmounted(() => {
      window.removeEventListener("resize", onResize)
    })

    return {
      containerRef,
      width,
      height
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-scale-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  transform-origin: left top;
}
</style>
