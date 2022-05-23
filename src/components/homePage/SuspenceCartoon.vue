<template>
  <!-- 眉头一皱，发现事情并不简单！ -->
  <div class="suspence-box">
    <!-- 标题盒子 -->
    <div class="title-box">
      <h3>{{suspenceInfo.title}}</h3>
    </div>
    <!-- item盒子 -->
    <div class="suspence-cartoon-box">
      <CartoonTagItem
      class="suspence-cartoon-item"
        v-for="item in suspenceInfo.topics"
        :key="item.id"
        :cartoonInfo="item"
        :length="2"
        author
      ></CartoonTagItem>
    </div>
  </div>
</template>

<script>
import CartoonTagItem from "@/components/base/CartoonTagItem";
export default {
  name: "SuspenceCartoon",
  data() {
    return {};
  },
  props: ["suspenceInfo"],
  components: { CartoonTagItem },
};
</script>

<style scoped lang='scss'>
.suspence-box {
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
  .suspence-cartoon-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // 单个盒子
    .suspence-cartoon-item{
      margin-bottom: 18px;
    }
  }
}
</style>