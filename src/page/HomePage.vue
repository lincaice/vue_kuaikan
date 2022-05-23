<template>
  <div class="homePage-box">
    <!-- 头部栏 + 轮播图 -->
    <div class="recommend-box">
      <SlideShow :slideArr="bannerArr"></SlideShow>
      <div class="categories">
        <a
          v-for="(item,index) in categoriesArr"
          :key="index"
          href="javaScript:;"
          class="categories-item"
        >{{item.title}}</a>
        <a href="javaScript:;" id="my-all">全部</a>
      </div>
    </div>
    <!-- 原创投稿 -->
    <div class="origin-box">
      <OriginalContribute title="原创投稿" :originContriData="originContriData"></OriginalContribute>
    </div>
    <!-- 这漫画令我上头+国漫榜 -->
    <div class="discovery-all">
      <DiscoveryCartoon :discoveryLike="discoveryModules.discoveryLike"></DiscoveryCartoon>
      <ChineseCartoon :chinaCartoonData="chineseCartoonData"></ChineseCartoon>
    </div>
    <!-- 每日更新 -->
    <div class="daily-box">
      <DailyCartoon></DailyCartoon>
    </div>
    <!-- 标签热门漫画 -->
    <div class="tag-hot-box">
      <TagHotCartoon></TagHotCartoon>
    </div>
    <!-- 漫改作品 -->
    <div class="adation-cartoon-box">
      <AdaptationCartoon :adaptationInfo="discoveryModules.adaptationInfo"></AdaptationCartoon>
    </div>
    <!-- 榜单漫画 -->
    <div class="list-rank-box">
      <ListCartoon :rankData="listRankData"></ListCartoon>
    </div>
    <!-- 眉头一皱(悬疑)漫画 -->
    <div class="suspence-outer-box">
      <SuspenceCartoon :suspenceInfo="discoveryModules.suspenceInfo"></SuspenceCartoon>
    </div>
  </div>
</template>

<script>
// 轮播图
import SlideShow from "@/components/homePage/SlideShow.vue";
// 原创投稿
import OriginalContribute from "@/components/homePage/OriginalContribute.vue";
// 这漫画令我上头
import DiscoveryCartoon from "@/components/homePage/DiscoveryCartoon";
// 国漫版
import ChineseCartoon from "@/components/homePage/ChineseCartoon";
// 每日更新
import DailyCartoon from "@/components/homePage/DailyCartoon";
// 热门标签漫画展示
import TagHotCartoon from "@/components/homePage/TagHotCartoon";
// 漫改作品展示
import AdaptationCartoon from "@/components/homePage/AdaptationCartoon";
// 榜单漫画
import ListCartoon from "@/components/homePage/ListCartoon";
// 眉头一皱(悬疑)漫画
import SuspenceCartoon from "@/components/homePage/SuspenceCartoon";
export default {
  name: "HomePage",
  data() {
    return {
      // 轮播图数据
      bannerArr: [],
      // 漫画分类数据
      categoriesArr: [],
      // 原创投稿的数据
      originContriData: {
        // 类型
        pageTitle: ["编辑推荐", "最新上架"],
        // 原创投稿的编辑推荐数组
        recTopics: [],
        // 原创投稿的最新上架数组
        ugcTopics: [],
        // 推荐模块数据(这漫画令我上头)
      },
      // 推荐漫画数据
      discoveryModules: {
        discoveryLike: {},
        adaptationInfo: {},
        suspenceInfo: {},
      },
      // 国漫版数据
      chineseCartoonData: [],
      // 榜单数据
      listRankData: [],
    };
  },
  components: {
    SlideShow,
    OriginalContribute,
    DiscoveryCartoon,
    ChineseCartoon,
    DailyCartoon,
    TagHotCartoon,
    AdaptationCartoon,
    ListCartoon,
    SuspenceCartoon,
  },
  methods: {
    // 获取首页全部数据
    async getHomeMessage() {
      const { data: res } = await this.$axios.get("/v2/pweb/home");
      // 获取轮播图数据
      this.bannerArr = res.data.banners;
      // 获取漫画分类数据
      this.categoriesArr =
        res.data.categories.length > 14
          ? res.data.categories.slice(0, 14)
          : res.data.categories;
      // 获取原创投稿的编辑推荐数组
      this.originContriData.recTopics =
        res.data.rec_topics.length > 6
          ? res.data.rec_topics.slice(0, 6)
          : res.data.rec_topics;
      // 获取原创投稿的最新上架数组
      this.originContriData.ugcTopics =
        res.data.ugc_topics.length > 6
          ? res.data.ugc_topics.slice(0, 6)
          : res.data.ugc_topics;
      // 获取推荐(上头)模块数据
      this.discoveryModules.discoveryLike = res.data.discovery_modules[0];
      this.discoveryModules.adaptationInfo = res.data.discovery_modules[1];
      this.discoveryModules.suspenceInfo = res.data.discovery_modules[2];
      // 获取国漫榜数据
      this.chineseCartoonData = res.data.popularity_topics;
      // 获取榜单数据
      this.listRankData = res.data.ranks;
    },
  },
  mounted() {
    this.getHomeMessage();
  },
};
</script>

<style scoped lang='scss'>
.homePage-box {
  .recommend-box {
    width: 100%;
    overflow: hidden;
    padding-top: 30px;
    background-color: #333240;
    // 标签推荐
    .categories {
      display: flex;
      width: $base-max-width;
      margin: 0 auto;
      padding: 20px 0;
      font-size: 14px;
      justify-content: space-around;
      .categories-item {
        color: $base-font-color;
        opacity: $base-opacity;
      }
      #my-all {
        color: $base-font-color;
      }
      #my-all::after {
        content: "\e629";
        font-family: "iconfont";
      }
    }
  }
  // 原创投稿盒子
  .origin-box {
    width: $base-max-width;
    margin: 0 auto;
    padding-top: 8px;
  }
  // 漫画令人上头+国漫版
  .discovery-all {
    width: $base-max-width;
    margin: 0 auto;
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
  }
  // 每日更新盒子
  .daily-box {
    width: $base-max-width;
    margin: 0 auto;
    padding-top: 8px;
  }
  // 标签推荐的盒子
  .tag-hot-box {
    margin-top: 20px;
  }
  // 漫改作品盒子
  .adation-cartoon-box {
    width: $base-max-width;
    margin: 0 auto;
    padding-top: 12px;
  }
  .suspence-outer-box{
    width: $base-max-width;
    margin: 0 auto;
    padding-top: 18px;
  }
}
</style>