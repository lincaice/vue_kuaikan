<template>
  <div class="adaptation-box">
    <!-- 标题盒子 -->
    <div class="title-box">
      <h3>{{adaptationInfo.title}}</h3>
    </div>
    <!-- item盒子 -->
    <div class="adaptation-cartoon-box">
      <BigDetailItem class="big-detail-item" v-for="item in adaptationInfo.topics" :key="item.id" :cartoonDetailInfo="item"></BigDetailItem>
    </div>
  </div>
</template>

<script>
import BigDetailItem from "@/components/base/BigDetailItem";
export default {
  name: "AdaptationCartoon",
  props: ["adaptationInfo"],
  data() {
    return {};
  },
  components: { BigDetailItem },
};
</script>

<style scoped lang='scss'>
.adaptation-box {
  width: 100%;
  // 标题盒子
  .title-box {
    display: flex;
    height: 60px;
    align-items: center;
    h3 {
      font-size: $base-h3;
    }
  }
  // item盒子
  .adaptation-cartoon-box {
    display: flex;
    padding-bottom: 38px;
    .big-detail-item{
      margin-right: 16px;
      margin-top: 10px;
    }
  }
}
</style>