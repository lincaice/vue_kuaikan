<template>
  <div class="daily-outer-box">
    <!-- 标题盒子 -->
    <div class="title-box">
      <div class="left-title-box">
        <h3>每日更新</h3>
        <h4
          v-for="(item, index) in dailyData.week_days"
          :key="index"
          :style="index === titleIndex ? {color:'#f5a623'}:''"
          @click="changeTitleIndex(index)"
        >{{item}}</h4>
      </div>
    </div>
    <!-- 漫画主盒子 -->
    <div class="daily-inner-box">
      <!-- 每个左右切换的盒子(遍历循环切换盒子并定位) -->
      <div
        class="daily-item-box"
        v-for="(itemList,index) in dailyItemList"
        :key="index"
        :style="{left:(index+1-currentPage)*1184+'px'}"
      >
        <CartoonBaseItem
          class="daily-item"
          v-for="(item) in itemList"
          :key="item.id"
          :cartoonInfo="item"
          type="cross"
        ></CartoonBaseItem>
      </div>
      <!-- 左右切换按钮 -->
      <div id="left-button" @click="currentPage--" v-show="currentPage !== 1">
        <span class="iconfont icon-zuo"></span>
      </div>
      <div id="right-button" @click="currentPage++" v-show="currentPage !== maxPage">
        <span class="iconfont icon-you"></span>
      </div>
    </div>
  </div>
</template>

<script>
import CartoonBaseItem from "@/components/base/CartoonBaseItem.vue";
export default {
  name: "DailyCartoon",
  components: { CartoonBaseItem },
  data() {
    return {
      // 星期切换
      titleIndex: 0,
      dailyData: {},
      // 星期漫画分页数组
      dailyItemList: [],
      // 当前在几页
      currentPage: 1,
      // 总页数
      maxPage: 0,
    };
  },
  methods: {
    // 获取每天更新数据
    async getDailyCartoonData() {
      const { data: res } = await this.$axios.get(
        `/v2/pweb/daily/topics?pos=${this.titleIndex}`
      );
      this.dailyData = res.data;
      this.maxPage = Math.ceil(this.dailyData.topics.length / 10);
      this.dailyItemList = [];
      for (let index = 0; index < this.maxPage; index++) {
        if (index === this.maxPage - 1) {
          this.dailyItemList.push(this.dailyData.topics.slice(index * 10));
        } else {
          this.dailyItemList.push(
            this.dailyData.topics.slice(index * 10, (index + 1) * 10)
          );
        }
      }
    },
    // 改变标题的index
    changeTitleIndex(index) {
      this.titleIndex = index;
      this.getDailyCartoonData();
      this.currentPage = 1;
    },
  },
  mounted() {
    // 进行获取数据操作
    this.getDailyCartoonData();
  },
};
</script>

<style scoped lang='scss'>
// 外部主盒子
.daily-outer-box {
  width: 100%;
  // 标题盒子
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
  }
  //漫画主盒子
  .daily-inner-box {
    width: 100%;
    height: 360px;
    overflow: hidden;
    position: relative;
    // 左右切换盒子
    .daily-item-box {
      display: flex;
      position: absolute;
      width: 100%;
      transition: 0.3s;
      top: 0;
      left: 50px;
      justify-content: space-between;
      flex-wrap: wrap;
      // 每个漫画item项
      .daily-item {
        padding-bottom: 14px;
      }
    }
    // 左右切换按钮
    #left-button,
    #right-button {
      cursor: pointer;
      width: 31px;
      height: 96px;
      z-index: 999;
      background-color: rgba($color: #999, $alpha: 0.3);
      position: absolute;
      top: 110px;
      display: none;
      align-items: center;
      justify-content: center;
      // 中间图标
      span {
        font-size: 28px !important;
        color: #fff;
      }
      &:hover {
        background-color: rgba($color: #999, $alpha: 0.5);
      }
    }
    #left-button {
      left: 0;
    }
    #right-button {
      right: 0;
    }
    &:hover #left-button,
    &:hover #right-button {
      display: flex;
    }
  }
}
</style>