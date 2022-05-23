<template>
  <!-- 外部整体 -->
  <div class="list-rank-outer-box" :class="'b'+rankID">
    <!-- 内部内容区 -->
    <div class="list-rank-inner-box">
      <!-- 上边标题区 -->
      <div class="list-title-box">
        <!-- 标签区域 -->
        <div class="title-left-box">
          <span
            v-for="item in rankData"
            :key="item.rank_id"
            class="title-item"
            :class="item.rank_id === rankID ? 'important-select': ''"
            @click="renewRankData(item.rank_id)"
          >{{item.title}}</span>
        </div>
        <!-- 右侧按钮 -->
        <button id="more-action">更多榜单</button>
      </div>
      <!-- 排名漫画区 -->
      <div class="rank-cartoon-box">
        <SmallDetailItem
          v-for="(item,index) in rankInfoList"
          :key="item.id"
          :rankInfo="item"
          :rankId="index+1"
          class="detail-item"
        ></SmallDetailItem>
      </div>
    </div>
  </div>
</template>

<script>
import SmallDetailItem from "@/components/base/SmallDetailItem";
export default {
  name: "ListCartoon",
  props: ["rankData"],
  components: { SmallDetailItem },
  data() {
    return {
      // 排名榜id
      rankID: 7,
      // 排名榜item信息数组
      rankInfoList: [],
    };
  },
  methods: {
    // 更新数据
    renewRankData(id) {
      this.rankID = id;
    },
    getrankInfoList(val) {
      val.forEach((item) => {
        if (item.rank_id === this.rankID) {
          this.rankInfoList = item.topics;
          return;
        }
      });
    },
  },
  watch: {
    rankData: {
      immediate: true,
      handler(newVal) {
        this.getrankInfoList(newVal);
      },
    },
    rankID(newVal) {
      this.getrankInfoList(this.rankData);
    },
  },
};
</script>

<style scoped lang='scss'>
.list-rank-outer-box {
  width: 100%;
  .list-rank-inner-box {
    width: $base-max-width;
    margin: 0 auto;
    // 标题区
    .list-title-box {
      padding-top: 32px;
      height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // 标签区
      .title-left-box {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 24px;
        font-weight: 100;
        cursor: pointer;
        span {
          margin-right: 42px;
          opacity: 0.8;
        }
        span:hover {
          opacity: 1;
        }
      }
      // 更多按钮
      #more-action {
        width: 83px;
        height: 30px;
        font-size: 16px;
        color: rgba($color: #fff, $alpha: 0.8);
        border: 1px solid rgba($color: #fff, $alpha: 0.6);
        background-color: transparent;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          color: rgba($color: #fff, $alpha: 0.6);
          border: 1px solid rgba($color: #fff, $alpha: 0.6);
        }
      }
    }
    // 排名内容区
    .rank-cartoon-box {
      padding: 22px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .detail-item{
        margin-bottom: 16px;
      }
    }
  }
}

// 选择后样式
.important-select {
  font-size: 30px;
  font-weight: 400 !important;
  opacity: 1 !important;
}
// 设置背景
.b7{
  background: url('@/assets/tagRank/b1.jpg');
}
.b11{
  background: url('@/assets/tagRank/b2.jpg');
}
.b12{
  background: url('@/assets/tagRank/b3.jpg');
}
</style>