<template>
  <!-- 外部大盒子 -->
  <div class="big-detail-item">
    <!-- 整个可点击标签容器 -->
    <a href="javaScript:;" class="big-detail-wrap">
      <!-- 图片和图片内嵌文字容器 -->
      <div class="detail-img-wrap">
        <!-- 图片 -->
        <img :src="cartoonDetailInfo.vertical_image_url" class="cartoon-img" />
        <!-- 内嵌文字 -->
        <div class="foot-text">
          <span class="author-text">{{cartoonDetailInfo.user.nickname}}</span>
          <span class="number-like-people">{{cartoonDetailInfo.likes_count}}</span>
        </div>
      </div>
      <!-- 标题及简介 -->
      <div class="title-detail-foot">
        <!-- 标题 -->
        <div class="big-title">{{cartoonDetailInfo.title}}</div>
        <!-- 简介 -->
        <div class="big-intro">{{cartoonDetailInfo.description}}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "BigDetailItem",
  props: ["cartoonDetailInfo"],
};
</script>

<style scoped lang='scss'>
.big-detail-item {
  width: 284px;
  height: 483px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px #ccc;
  transition: .2s;
  &:hover {
    box-shadow: 0 0px 30px #ccc;
  }
  // 图片和图片内嵌文字容器
  .detail-img-wrap {
    width: 100%;
    height: 375px;
    position: relative;
    .cartoon-img {
      width: 100%;
      height: 100%;
    }
    // 标题栏样式
    .foot-text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      padding: 36px 12px 8px;
      bottom: 0;
      box-sizing: border-box;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.72) 98%
      );
      span {
        color: #fff;
        font-size: 14px;
      }
      .author-text {
        width: 70%;
        overflow: hidden; /*超出部分隐藏*/
        white-space: nowrap; /*不换行*/
        text-overflow: ellipsis; /*超出部分文字以...显示*/
      }
      .number-like-people::before {
        content: "\e613";
        font-family: "iconfont";
      }
    }
  }
  // 标题及简介
  .title-detail-foot {
    width: 100%;
    height: 108px;
    background-color: #fff;
    padding: 12px 12px 16px;
    box-sizing: border-box;
    .big-title {
      font-size: 20px;
      color: #4f4f53;
    }
    .big-intro {
      padding-top: 12px;
      font-size: 14px;
      color: #b8b8b8;
      width: 100%;
      // 多行省略效果
      overflow: hidden;
      text-overflow: ellipsis;
      // 将对象作为弹性伸缩盒子模型显示
      display: -webkit-box;
      // 显示的文本的行数
      -webkit-line-clamp: 2;
      // 设置或检索伸缩盒对象的子元素的排列方式
      -webkit-box-orient: vertical;
    }
  }
}
</style>