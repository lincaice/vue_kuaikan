<template>
  <!-- 整个小型item -->
  <div class="small-item-box">
    <!-- 标签栏 -->
    <a href="javaScript:;" class="small-item-click-box">
      <!-- 图片盒子 -->
      <div class="img-box">
        <img
          :src="rankInfo.square_image_url ?rankInfo.square_image_url:rankInfo.vertical_image_url"
        />
      </div>
      <!-- 详情盒子 -->
      <div class="detail-box">
        <!-- 排名 -->
        <div class="rank-box">
          <div class="rank-num">TOP.{{rankId}}</div>
          <!-- 排名介绍 -->
          <div class="rank-detail">
            <!-- 图标 -->
            <span class="detail-icon" :class="'rankIcon'+rankInfo.rank_change_type"></span>
            <!-- 介绍 -->
            <span class="detail-intro">{{rankInfo.rank_change_value}}</span>
          </div>
        </div>
        <!-- 标题 -->
        <div class="title-box">{{rankInfo.title}}</div>
        <!-- 作者 -->
        <div class="author-box">{{rankInfo.user.nickname}}</div>
        <!-- 介绍 -->
        <div class="detail-box">{{rankInfo.description}}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["rankInfo", "rankId"],
  data() {
    return {};
  },
};
</script>

<style scoped lang='scss'>
// 整个小型item
.small-item-box {
  width: 384px;
  height: 180px;
  border-radius: 4px;
  overflow: hidden;
  // 标签栏
  .small-item-click-box {
    width: 100%;
    height: 100%;
    display: flex;
    // 图片盒子
    .img-box {
      width: 180px;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    // 详情盒子
    .detail-box {
      width: 180px;
      padding: 0 12px;
      background-color: rgba($color: #000, $alpha: 0.2);
      // 排名盒子
      .rank-box {
        padding-top: 18px;
        height: 22px;
        display: flex;
        // 排名
        .rank-num {
          width: 66px;
          height: 100%;
          background-color: #ffd806;
          border-radius: 4px;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }
        // 排名介绍
        .rank-detail{
          font-size: 14px;
          color: #fff;
          margin-left: 12px;
          height: 100%;
          display: flex;
          align-items: center;
          // 图标
          .detail-icon{
            width: 16px;
            height: 100%;
            margin-right: 2px;
          }
          // 介绍
          .detail-intro{
            opacity: .8;
          }
        }
      }
      // 标题
      .title-box {
        padding-top: 8px;
        font-size: 20px;
        height: 28px;
        display: flex;
        align-items: center;
        color: #fff;
        &:hover{
          opacity: .8;
        }
      }
      // 作者
      .author-box {
        padding-top: 2px;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        color: rgba($color: #fff, $alpha: .8);
      }
      // 详情
      .detail-box {
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        // 将对象作为弹性伸缩盒子模型显示
        display: -webkit-box;
        // 显示的文本的行数
        -webkit-line-clamp: 2;
        // 设置或检索伸缩盒对象的子元素的排列方式
        -webkit-box-orient: vertical;
        background-color: transparent;
        padding-top: 26px;
        color: rgba($color: #fff, $alpha: .8);
        font-size: 14px;
      }
    }
  }
}

.rankIcon1{
  background: url('@/assets/tagRank/1.png') center center no-repeat;
}
.rankIcon2{
  background: url('@/assets/tagRank/2.png') center center no-repeat;
}
.rankIcon3{
  background: url('@/assets/tagRank/3.png') center center no-repeat;
}
</style>