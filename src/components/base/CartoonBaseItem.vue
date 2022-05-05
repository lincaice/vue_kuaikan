<template>
  <div class="cartoon-box">
    <div class="img-wrap">
      <a href="javaScript:;"><img :src="cartoonInfo.vertical_image_url"></a>
      <div class="foot-text">
        <span class="author-text">{{cartoonInfo.user.nickname}}</span>
        <span class="number-like-people">{{cartoonInfo.likes_count}}</span>
      </div>
    </div>
    <div class="foot-title-wrap">
      <a href="javaScript:;">{{cartoonInfo.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartoonBaseItem',
  props:['cartoonInfo'],
  data() {
    return {
      width:184
    }
  },
}
</script>

<style scoped lang='scss'>
.cartoon-box{
  display: inline-block;
  .img-wrap{
    position: relative;
    width: 184px;
    height: 244px;
    border-radius: 5px;
    overflow: hidden;
    &:hover{
      opacity: .8;
      transition: .2s;
    }
    &:hover+.foot-title-wrap a{
      color: #6f93bd;
    }
    img{
      width: 100%;
    }
    .foot-text{
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      padding: 9px 6px 4px;
      bottom: 0;
      box-sizing: border-box;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 98%);
      span{
        color: #fff;
        font-size: 10px;
      }
      .number-like-people::before{
        content: '\e613';
        font-family: 'iconfont';
      }
    }
  }
  .foot-title-wrap{
    padding: 4px 6px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
    a{
      color: #333;
    }
    &:hover a{
      color: #6f93bd;
    }
  }
}
</style>