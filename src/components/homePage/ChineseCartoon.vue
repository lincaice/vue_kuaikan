<template>
  <!-- 国漫榜外部盒子 -->
  <div class="china-cartoon-box">
    <!-- 标题盒子 -->
    <div class="title-box">
      <h3>{{title}}</h3>
    </div>
    <!-- 主盒子 -->
    <ul class="chinese-main-box">
      <!-- 每一个item盒子 -->
      <li
        class="chinese-list-intro"
        v-for="(item, number) in chinaCartoonData"
        :key="item.id"
        @mousemove="detailShow = number+1"
        @mouseleave="detailShow = 1"
      >
        <!-- 详情显示/相对于覆盖后的盒子显示 -->
        <div class="chinese-detail-box" v-if="detailShow === number+1">
          <!-- 漫画图片盒子 -->
          <a href="javaScript:;" class="img-box">
            <img :src="item.vertical_image_url" class="detail-img" />
            <div class="number-show">{{number+1}}</div>
          </a>
          <!-- 详情介绍盒子 -->
          <div class="detail-info-box">
            <!-- 标题 -->
            <div class="detail-title">
              <a href="javaScript:;">{{item.title}}</a>
            </div>
            <!-- 标签 -->
            <div class="detail-tag">
              <span
                v-for="(itemTag,id) in item.tags.length > 3 ? item.tags.slice(0,3) :item.tags"
                :key="id"
              >{{itemTag}}</span>
            </div>
            <!-- 详情介绍 -->
            <div class="detail-intro">{{item.description}}</div>
            <!-- 更新章节 -->
            <div class="detail-renew">
              <span class="detail-update-size">更新至:</span>
              <a href="javaScript:;" class="detail-update-topic">{{item.latest_comic.title}}</a>
            </div>
          </div>
        </div>
        <!-- 简单显示的盒子/默认 -->
        <div class="chinese-easy-outer-box" v-else>
          <!--  排名+标题盒子 -->
          <div class="chinese-title-box">
            <span class="rank" :class="number > 2 ? '':'top-color'">{{number+1}}</span>
            <span class="chinese-title">{{item.title}}</span>
          </div>
          <!-- 更新章节盒子 -->
          <div class="latest-comic-box">
            <span class="update-size">更新至</span>
            <span class="update-topic">{{item.latest_comic.title}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChineseCartoon",
  props: ["chinaCartoonData"],
  data() {
    return {
      title: "国漫榜",
      detailShow: 1,
    };
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
// 国漫榜外部盒子
.china-cartoon-box {
  width: 356px;
  // 标题盒子
  .title-box {
    display: flex;
    height: 60px;
    align-items: center;
    h3 {
      font-size: $base-h3;
    }
  }
  // 主盒子
  .chinese-main-box {
    font-size: 14px;
    width: 100%;
    // 每一个item盒子
    .chinese-list-intro {
      width: 100%;
      // 简单显示的盒子/默认
      .chinese-easy-outer-box {
        display: flex;
        width: 100%;
        justify-content: space-between;
        height: 20px;
        padding-bottom: 16px;
        // 排名+标题盒子
        .chinese-title-box {
          width: 50%;
          display: flex;
          align-items: center;
          height: 20px;
          .rank {
            font-size: 16px;
            width: 20px;
            color: rgb(184, 184, 184);
          }
          .chinese-title {
            width: 65%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        // 更新章节盒子
        .latest-comic-box {
          width: 50%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          color: #f56c6c;
          // 更新章节
          .update-size {
            color: #999;
          }
          // 章节详情
          .update-topic {
            margin-left: 4px;
          }
        }
      }
      // 详情显示/相对于覆盖后的盒子显示
      .chinese-detail-box {
        display: flex;
        // 漫画图片盒子
        .img-box {
          width: 120px;
          height: 162px;
          position: relative;
          display: flex;
          padding-bottom: 20px;

          // 漫画图片
          .detail-img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
          .number-show {
            height: 26px;
            width: 26px;
            background-color: rgba($color: #000000, $alpha: 0.3);
            font-size: 18px;
            color: #fff;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            border-radius: 4px 0;
          }
        }
        // 详情介绍盒子
        .detail-info-box {
          width: 236px;
          padding-left: 12px;
          box-sizing: border-box;
          // 标题
          .detail-title {
            font-size: 18px;
            a {
              color: #1a1a1a;
            }
            a:hover {
              color: #6f93bd;
            }
          }
          // 标签
          .detail-tag {
            height: 20px;
            padding: 6px 0;
            font-size: 14px;
            span {
              padding-right: 10px;
            }
          }
          // 详情介绍
          .detail-intro {
            height: 40px;
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
            color: #999;
          }
          // 更新章节
          .detail-renew{
            font-size: 14px;
            display: flex;
            padding: 16px 0;
            .detail-update-size{
              color: #999;
              width: 56px;
            }
            .detail-update-topic{
              color: #f56c6c;
              width: 168px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}

.top-color {
  color: #f5a623 !important;
}
</style>