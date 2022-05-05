<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

body {
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

h2,
h3,
h4,
h5 {
  font-weight: normal;
}
// 设置h3基础字体大小
h3 {
  font-size: $base-h3;
}
</style>
