<template>
<!-- 发现漫画组件 -->
  <div class="discovery-box">
    <div class="title-box">
      <h3>{{discoveryLike.title}}</h3>
    </div>
    <div class="discovery-inner-box">
      <div v-for="item in discoveryLike.topics" :key="item.id">
        <CartoonTagItem :length='2' :cartoonInfo='item' author type='small'></CartoonTagItem>
      </div>
    </div>
  </div>
</template>

<script>
import CartoonTagItem from '@/components/base/CartoonTagItem'
export default {
  name: 'DiscoveryCartoon',
  // 获取推荐的数据
  props:['discoveryLike'],
  components: { CartoonTagItem },
  data() {
    return {

    }
  },
  methods: {
    
  },
}
</script>

<style scoped lang='scss'>
.discovery-box{
  width: 784px;
  .title-box {
    display: flex;
    height: 60px;
    align-items: center;
    h3{
      font-size: $base-h3;
    }
  }
  .discovery-inner-box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>