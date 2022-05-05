<template>
  <div class="cartoon-box" :class="typeStyle[dtype][0]">
    <!-- 图片框架 -->
    <div class="img-wrap"  :class="typeStyle[dtype][1]" >
      <a href="javaScript:;">
        <img :src="cartoonInfo.vertical_image_url" />
      </a>
      <!-- 标签 -->
      <div class="foot-text">
        <span class="tags" v-for="(item, index) in tags" :key="index">{{item}}</span>
      </div>
    </div>
    <!-- 底部漫画名称 -->
    <div class="foot-title-wrap" :class="typeStyle[dtype][2]">
      <a href="javaScript:;">{{cartoonInfo.title}}</a>
    </div>
    <!-- 作者+点赞标签 -->
    <div class="foot-like-wrap" v-if="authorShow">
      <span class="author-text">{{cartoonInfo.user.nickname}}</span>
      <span class="number-like-people">{{cartoonInfo.likes_count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartoonTagItem",
  // 渲染带标签漫画的item项数据，tag标签最多显示个数
  props: ["cartoonInfo", "length", "author", "type"],
  data() {
    return {
      // 渲染的标签数组
      tags: [],
      // 标签数组的长度，默认是4
      myLength: 4,
      // 第部作者+点赞栏是否渲染
      authorShow: false,
      // 样式
      dtype: 'normal',
      typeStyle: {
        normal:['','',''],
        small:['cartoon-small-box','img-small-wrap','foot-small-title-wrap']
      }
    };
  },
  mounted() {
    if (this.author === true || this.author === "") {
      this.authorShow = true;
    }
    if(this.type === "small"){
      this.dtype = this.type
    }
  },
  watch: {
    cartoonInfo: {
      deep: true,
      immediate: true,
      handler(newVal) {
        if (this.length) {
          this.myLength = this.length;
        }
        newVal?.tags?.length > this.myLength
          ? (this.tags = newVal.tags.slice(0, this.myLength))
          : (this.tags = newVal.tags);
      },
    },
  },
};
</script>

<style scoped lang='scss'>
// 组件外部容器
.cartoon-box {
  display: inline-block;
  width: 184px;
  // 图片容器
  .img-wrap {
    position: relative;
    width: 184px;
    height: 244px;
    border-radius: 5px;
    overflow: hidden;
    &:hover {
      opacity: 0.8;
      transition: 0.2s;
    }
    &:hover + .foot-title-wrap a {
      color: #6f93bd;
    }
    img {
      width: 100%;
    }
    // 标签样式
    .foot-text {
      width: 100%;
      display: flex;
      position: absolute;
      padding: 9px 6px 4px 0px;
      bottom: 0;
      box-sizing: border-box;
      span {
        color: #fff;
        font-size: 10px;
        padding: 0 4px;
        height: 16px;
        background: rgba($color: #000000, $alpha: 0.5);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 4px;
      }
      .number-like-people::before {
        content: "\e613";
        font-family: "iconfont";
      }
    }
  }
  // 漫画名称容器
  .foot-title-wrap {
    padding: 4px 6px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
    cursor: pointer;
    a {
      color: #333;
    }
    &:hover a {
      color: #6f93bd;
    }
  }
  // 作者+点赞栏
  .foot-like-wrap {
    width: 100%;
    height: 18px;
    padding: 0 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #999;
    box-sizing: border-box;
    .author-text {
      width: 50%;
      overflow: hidden; /*超出部分隐藏*/
      white-space: nowrap; /*不换行*/
      text-overflow: ellipsis; /*超出部分文字以...显示*/
    }
    // 点赞小图标渲染
    .number-like-people::before {
      content: "\e613";
      font-family: "iconfont";
    }
  }
}
// type为small时显示的样式
.cartoon-small-box {
  width: 144px !important;
}
.img-small-wrap {
  width: 144px !important;
  height: 192px !important;
}
.foot-small-title-wrap{
  font-size: 14px !important;
}

</style>