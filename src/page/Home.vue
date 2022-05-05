<template>
  <div>
    <LookHeader></LookHeader>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LookHeader from '@/components/main/LookHeader.vue'

export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  components:{LookHeader},
  methods: {
    
  },
  mounted(){
  }
}
</script>

<style>

</style>