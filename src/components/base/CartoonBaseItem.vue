<template>
  <div class="cartoon-box" :class="typeStyle[dtype][0]">
    <div class="img-wrap" :class="typeStyle[dtype][1] +' '+(fontStyle === 'white'?' white-img':'')">
      <a href="javaScript:;">
        <img :src="cartoonInfo.vertical_image_url" />
      </a>
      <div class="foot-text">
        <span class="author-text">{{cartoonInfo.user.nickname}}</span>
        <span class="number-like-people">{{cartoonInfo.likes_count}}</span>
      </div>
    </div>
    <div class="foot-title-wrap" :class="typeStyle[dtype][2]">
      <a href="javaScript:;" :class="fontStyle === 'white'?'white-color':''">{{cartoonInfo.title}}</a>
      <span class="small-tag" v-if="dtype==='cross'">{{cartoonInfo.tags[0]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartoonBaseItem",
  props: ["cartoonInfo", "type", "fontStyle"],
  data() {
    return {
      width: 184,
      // 基本item显示类型
      dtype: "normal",
      typeStyle: {
        normal: ["", "", "over-text"],
        cross: ["cartoon-cross-box", "img-cross-wrap", "foot-cross-title-wrap"],
      },
    };
  },
  mounted() {
    if (this.type === "cross") {
      this.dtype = this.type;
    }
  },
};
</script>

<style scoped lang='scss'>
.cartoon-box {
  display: inline-block;
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
    .foot-text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      padding: 9px 6px 4px;
      bottom: 0;
      box-sizing: border-box;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.72) 98%
      );
      span {
        color: #fff;
        font-size: 10px;
      }
      .author-text {
        width: 50%;
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
  // 底部标题盒子
  .foot-title-wrap {
    padding: 4px 6px;
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
    a {
      color: #333;
    }
    &:hover a {
      color: #6f93bd;
    }
    .small-tag {
      color: #999;
    }
  }
}
// 设置横向模式的样式
.cartoon-cross-box {
  width: 224px !important;
}
.img-cross-wrap {
  width: 224px !important;
  height: 140px !important;
}
.foot-cross-title-wrap {
  font-size: 14px !important;
}

// 设置白色标题模式
.white-color {
  color: rgba($color: #fff, $alpha: 0.8) !important;
}
.white-color:hover {
  color: #fff !important;
}

.white-img:hover + .foot-title-wrap a {
  color: #fff !important;
}

// 设置normal模式下标题过长的换行问题
.over-text {
  width: 184px !important;
  a{
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/

  }
}
</style>