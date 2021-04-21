<template>
  <PageScaleContainer class="page-wrapper" :options="{ width: 1920, height: 1080 }">
    <div class="header">大数据可视化模板(支持等比缩放)</div>
    <div class="container">
      <div class="flex-row row-top">
        <div class="flex-cell flex-cell-1">
          <div class="chart-title">图表</div>
          <div class="chart-box">
            <img src="./assets/logo.png" alt="" />
          </div>
        </div>
        <div class="flex-cell flex-cell-2">
          <div class="chart-title">图表</div>
          <div class="chart-box">
            <div class="loading"></div>
          </div>
        </div>
        <div class="flex-cell flex-cell-1">
          <div class="chart-title">图表</div>
          <div class="chart-box">
            喵语言本质上是一种文本编码、解码算法，其原理为使用零宽字符将原文编码，并隐藏于若干“喵”之中。目前版本中所用到的零宽字符有
            \u200b、\u200c、\u200d 。 其中编码流程如下： 生成 Base64 字符与零宽字符的对照表；
            将原文转为 Base64 编码； 使用对照表将 Base64
            编码后的内容转为由零宽字符组成的不可见的新编码；
            根据一定规则，在新编码的最前、最后以及中间位置，插入若干“喵”以及标点符号； 完成。
          </div>
        </div>
      </div>
      <div class="flex-row row-bottom">
        <div class="flex-cell flex-cell-3">
          <div class="chart-title">图表</div>
          <div class="chart-box"></div>
        </div>
        <div class="flex-cell flex-cell-1">
          <div class="chart-title">图表</div>
          <div class="chart-box"></div>
        </div>
      </div>
    </div>
  </PageScaleContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageScaleContainer from "./components/PageScaleContainer.vue"

export default defineComponent({
  name: "App",
  components: {
    PageScaleContainer
  }
})
</script>

<style lang="scss">
.page-wrapper {
  background: url("./assets/bg01.png") 0 0 / 100% 100% no-repeat;
}
.header {
  height: 90px;
  line-height: 90px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  background: url("./assets/header01.png") 0 0 / 100% 100% no-repeat;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.flex-row {
  flex: 1;
  display: flex;
}
.flex-cell {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  &-1 {
    flex: 1;
  }
  &-2 {
    flex: 2;
  }
  &-3 {
    flex: 3;
  }
}
.chart-title {
  padding: 10px;
  font-size: 26px;
  color: #fff;
}
.chart-box {
  position: relative;
  flex: 1;
  border-style: solid;
  border-width: 26px 27px 27px;
  border-image: url(./assets/chart01.png) 26 27 27 fill / 1 / 0 repeat;

  img {
    width: 100px;
    height: 100px;
  }

  & .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    margin-left: -25px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: deepskyblue;
    z-index: 10;
    animation: spin 2s infinite linear;

    &::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border: 3px solid transparent;
      border-top-color: #e74c3c;
      border-radius: 50% !important;
      animation: spin 3s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: 9px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border: 3px solid transparent;
      border-top-color: #e74c3c;
      border-radius: 50% !important;
      animation: spin 1.5s linear infinite;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
