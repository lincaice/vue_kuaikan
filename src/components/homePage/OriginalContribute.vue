<template>
  <div class="origin-box">
    <div class="title-box">
      <div class="left-title-box">
        <h3>{{title}}</h3>
        <h4
          v-for="(item, index) in originContriData.pageTitle"
          :key="index"
          :style="index === titleIndex ? {color:'#f5a623'}:''"
          @click="changeTitleIndex(index)"
        >{{item}}</h4>
      </div>
      <button id="more-btn">更多</button>
    </div>
    <ul class="cartoon-list">
      <li class="img-outer-wrap" v-for="item in cartoonData" :key="item.id">
        <CartoonBaseItem :cartoonInfo="item" v-if="titleIndex === 0"></CartoonBaseItem>
        <CartoonTagItem :cartoonInfo="item" v-else ></CartoonTagItem>
      </li>
    </ul>
  </div>
</template>

<script>
import CartoonBaseItem from "@/components/base/CartoonBaseItem";
import CartoonTagItem from '@/components/base/CartoonTagItem'
export default {
  name: "OriginalContribute",
  props: ["title", "originContriData"],
  components: { CartoonBaseItem,CartoonTagItem },
  data() {
    return {
      // 选中的标题栏
      titleIndex: 0,
      cartoonData:[]
    };
  },
  methods: {
    changeTitleIndex(index) {
      this.titleIndex = index;
      if(this.titleIndex === 0){
        this.cartoonData = this.originContriData.recTopics;
        }else{
          this.cartoonData = this.originContriData.ugcTopics;
        }
    }
  },
  watch: {
    originContriData: {
      immediate: true,
      deep:true,
      handler(newVal){
        if(this.titleIndex === 0){
          this.cartoonData = newVal.recTopics;
        }else{
          this.cartoonData = newVal.ugcTopics;
        }
      }
    }
  },
};
</script>

<style scoped lang='scss'>
.origin-box {
  width: 100%;
  .title-box {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    .left-title-box {
      display: flex;
      align-items: center;
      h3,
      h4 {
        margin-right: 30px;
      }
      h4 {
        font-size: 16px;
        cursor: pointer;
      }
    }
    #more-btn {
      width: 60px;
      height: 30px;
      background-color: #fff;
      color: #92939b;
      border: 1px solid rgb(240, 240, 240);
      &:hover {
        cursor: pointer;
        border-color: rgb(230, 230, 230);
      }
    }
  }
  .cartoon-list {
    display: flex;
    justify-content: space-between;
  }
}
</style>