<template>
  <div id="app">
    <!-- 路由占位符 -->
    <div class="Body-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.h1 {
  height: 50px;
}
.Body-container {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  flex: 1;
  border: 1px solid gray;
}
</style>
