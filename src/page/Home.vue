<template>
  <div>
    <LookHeader></LookHeader>
    <div>
      <router-view></router-view>
    </div>
    <LookFooter></LookFooter>
  </div>
</template>

<script>
// 头部
import LookHeader from '@/components/main/LookHeader.vue'
// 尾部
import LookFooter from '@/components/main/LookFooter'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  components:{LookHeader,LookFooter},
  methods: {
    
  },
  mounted(){
  }
}
</script>

<style>

</style>