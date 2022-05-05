<template>
  <div>
    <header class="top-banner">
      <div class="base-inner-box">
        <div class="pic">
          <img src="../../assets/icon.png" />
        </div>
        <div >
          <ul class="base-var">
            <li v-for="(item, id) in topBase" :key="id">
              <a href="javaScript:;">{{item.text}}</a>
            </li>
          </ul>

        </div>
        <div id="search-box-outer">
          <input type="text" placeholder="搜索作品，作者名" id="search-box" />
        </div>
        <div class="user-opera">
          <a id="login" href="javaScript:;">登录</a>
          <span>|</span>
          <a id="register" href="javaScript:;">注册</a>
        </div>
        <div>
          <ul class="base-var">
            <li>
              <a href="javaScript:;">我要投稿</a>
            </li>
            <li>
              <a href="javaScript:;">开放平台</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "lookHeader",
  data() {
    return {
      topBase: [
        { text: "首页" },
        { text: "分类" },
        { text: "排行榜" },
        { text: "世界" },
        { text: "原创投稿" },
        { text: "APP下载" },
        { text: "营销合作" },
        { text: "条漫大赛" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
// 全体样式
* {
  margin: 0;
  padding: 0;
  color: #fff;
  list-style: none;
  font-size: 14px;
}

a {
  text-decoration: none;
}
// 最外层黑色层
.top-banner {
  width: 100%;
  height: 64px;
  background-color: $top-base-color;
  // 包裹内容层
  .base-inner-box {
    height: 100%;
    margin: 0 auto;
    width: $base-max-width;
    display: flex;
    align-items: center;
    .pic {
      img {
        width: 64px;
      }
      padding-right: 40px;
    }
    .base-var {
      display: flex;
      align-items: center;
      li {
        opacity: $base-opacity;
        padding-right: 24px;
        &:hover {
          opacity: 1;
          filter: alpha(opacity=100);
        }
        &:nth-child(7),
        &:nth-child(8) {
          position: relative;
          margin-right: 8px;
        }
        &:nth-child(7) {
          &:after {
            content: "";
            border: 4px solid;
            width: 0;
            height: 0;
            border-color: #fff transparent transparent;
            position: absolute;
            top: 8px;
            right: 14px;
          }

          &:hover {

          }
        }
        &:nth-child(8):after {
          content: "";
          display: block;
          background: url("../../assets/hot.png");
          width: 28px;
          height: 13px;
          background-size: contain;
          position: absolute;
          top: -8px;
          right: 0;
        }
      }
    }
    #search-box-outer {
      position: relative;
      #search-box {
        border: none;
        outline: none;
        height: 14px;
        padding: 9px 18px 9px 16px;
        border-radius: 16px;
        color: gray;
        // width: 100px;
      }
      &::after {
        content: "\e6d9";
        font-family: "iconfont";
        position: absolute;
        right: 10px;
        top: 9px;
        color: gray;
      }
    }
    .user-opera {
      #login {
        margin: 0 14px;
      }
      #register {
        margin: 0 24px 0 14px;
      }
    }
  }
}
</style>