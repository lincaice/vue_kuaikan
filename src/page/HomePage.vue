<template>
  <div class="homePage-box">
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
    <div class="origin-box">
      <OriginalContribute title="原创投稿" :originContriData="originContriData"></OriginalContribute>
    </div>
    <div class="discovery-all">
      <DiscoveryCartoon :discoveryLike='discoveryModules.discoveryLike'></DiscoveryCartoon>
      <ChineseCartoon :chinaCartoonData='ChineseCartoonData'></ChineseCartoon>
    </div>
  </div>
</template>

<script>
import SlideShow from "@/components/homePage/SlideShow.vue";
import OriginalContribute from "@/components/homePage/OriginalContribute.vue";
import DiscoveryCartoon from '@/components/homePage/DiscoveryCartoon';
import ChineseCartoon from '@/components/homePage/ChineseCartoon'
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
        ugcTopics:[],
        // 推荐模块数据(这漫画令我上头)
      },
      // 推荐漫画数据
      discoveryModules:{
        discoveryLike:{}
      },
      // 国漫版数据
      ChineseCartoonData: []
    };
  },
  components: { SlideShow, OriginalContribute,DiscoveryCartoon,ChineseCartoon },
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
      this.originContriData.recTopics = res.data.rec_topics.length > 6
          ? res.data.rec_topics.slice(0, 6)
          : res.data.rec_topics;
      // 获取原创投稿的最新上架数组
      this.originContriData.ugcTopics = res.data.ugc_topics.length > 6
          ? res.data.ugc_topics.slice(0, 6)
          : res.data.ugc_topics;
      // 获取推荐(上头)模块数据
      this.discoveryModules.discoveryLike = res.data.discovery_modules[0];
      // 获取国漫榜数据
      this.ChineseCartoonData = res.data.popularity_topics;
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
  .origin-box {
    width: $base-max-width;
    margin: 0 auto;
    padding-top: 8px;
  }
  .discovery-all{
    width: $base-max-width;
    margin: 0 auto;
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
  }
}
</style>