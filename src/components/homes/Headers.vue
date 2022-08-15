<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Myhome-container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" @click="Return"> 小肥羊后台管理系统 </a>
        </div>
        <button class="navbar-link" @click="logout" >
          退出
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$confirm('确定要退出登录?',  {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          localStorage.removeItem('token');
          this.$router.push('/login');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
    },
    Return(){
      this.$router.push("/eleIfor");
    }
  }
};
</script>

<style  scoped>
.navbar-link {
  text-align: center;
  float: right;
  background-color: rgb(194, 196, 207);
  border: 0;
  border-radius: 5px;
  margin-top: 15px;
}
.navbar {
  height: 50px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background-color: rgb(6, 95, 85);
}
.navbar-link{
  width: 50px;
  height: 30px;
  font-size: 12px;
  background-color:#409EFF;
}
</style>
