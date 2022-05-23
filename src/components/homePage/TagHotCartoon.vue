<template>
  <!-- 外部大盒子 -->
  <div class="tag-info-outer-box" :class="'back'+ tagID">
    <!-- 内部内容区 -->
    <div class="tag-info-inner-box">
      <!-- 上边标题区 -->
      <div class="tag-title-box">
        <!-- 标签区域 -->
        <div class="title-left-box">
          <span
            v-for="item in tagTitleList"
            :key="item.tag_id"
            class="title-item"
            :class="item.tag_id === tagID ? 'important-select': ''"
            @click="renewTagData(item.tag_id)"
          >{{item.title}}</span>
        </div>
        <!-- 右侧按钮 -->
        <button id="more-action">更多分类</button>
      </div>
      <!-- 漫画显示区 -->
      <div class="tag-cartoon-box">
        <!-- 每一个可移动盒子 -->
        <div
          class="tag-inner-cartoon-box"
          v-for="(itemList, index) in tagCartoonList"
          :style="{left:(index+1-currentPage)*1184+'px'}"
          :key="index"
        >
          <!-- 每一个小item -->
          <CartoonBaseItem
            class="tag-item"
            v-for="item in itemList"
            :key="item.id"
            :cartoonInfo="item"
            fontStyle='white'
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
  </div>
</template>

<script>
import CartoonBaseItem from "@/components/base/CartoonBaseItem";
export default {
  name: "TagHotCartoon",
  components: { CartoonBaseItem },
  data() {
    return {
      // 当前标签对应id
      tagID: 20,
      // 标签数组(用于显示标题)
      tagTitleList: [],
      // 漫画数组
      tagCartoonList: [],
      // 当前页数
      currentPage: 1,
      // 最大页数
      maxPage: 4,
    };
  },
  methods: {
    async getTagCartoonInfo() {
      const { data: res } = await this.$axios.get(
        `/v1/search/by_tag?since=0&count=24&f=3&tag=${this.tagID}&sort=1`
      );
      this.tagTitleList = res.data.tags.slice(1, 7);
      this.tagCartoonList = [];
      for (let index = 0; index < this.maxPage; index++) {
        this.tagCartoonList.push(
          res.data.topics.slice(index * 6, (index + 1) * 6)
        );
      }
    },
    // 更新数据
    renewTagData(id) {
      this.tagID = id;
      this.currentPage = 1;
      this.getTagCartoonInfo();
    },
  },
  mounted() {
    this.getTagCartoonInfo();
  },
};
</script>

<style scoped lang='scss'>
// 外部大盒子
.tag-info-outer-box {
  width: 100%;
  // 内部内容区
  .tag-info-inner-box {
    width: $base-max-width;
    margin: 0 auto;
    // 标题区
    .tag-title-box {
      padding-top: 32px;
      height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // 标签区
      .title-left-box {
        height: 100%;
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        font-size: 24px;
        font-weight: 100;
        cursor: pointer;
        span {
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
        border: 1px solid rgba($color: #fff, $alpha: 0.5);
        background-color: transparent;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
          color: rgba($color: #fff, $alpha: 0.5);
          border: 1px solid rgba($color: #fff, $alpha: 0.8);
        }
      }
    }
    // 漫画显示区
    .tag-cartoon-box {
      width: 100%;
      height: 273px;
      padding: 24px 0;
      position: relative;
      overflow-x: hidden;
      // 每一个可移动盒子
      .tag-inner-cartoon-box {
        position: absolute;
        top: 24px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        transition: 0.3s;
        .tag-item:hover {
          transition: 0.2s;
          transform: translateY(-10px);
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
        top: 94px;
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
}
// 选择后样式
.important-select {
  font-size: 30px;
  font-weight: 400 !important;
  opacity: 1 !important;
}

.back20{
  background: url('@/assets/tagBackgroundImg/1.jpg');
}
.back46{
  background: url('@/assets/tagBackgroundImg/2.jpg');
}
.back80{
  background: url('@/assets/tagBackgroundImg/3.jpg');
}
.back77{
  background: url('@/assets/tagBackgroundImg/4.jpg');
}
.back47{
  background: url('@/assets/tagBackgroundImg/5.jpg');
}
.back22{
  background: url('@/assets/tagBackgroundImg/6.jpg');
}
</style>