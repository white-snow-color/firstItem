<template>
  <div class="login-container">
    <div id="wrapper" class="login-page">
      <div id="login_form" class="form shake_effect">
          <form class="login-form">
          <h2>管理登录</h2>
          <input type="text" placeholder="请输入工号"  id="user_name" v-model="username">
          <input type="password" placeholder="登录密码" id="password" v-model="password">
          <button id="login" @click="logbut"><router-link to="/home">登　录</router-link></button>
          </form>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      user:{}
    };
  },
  methods: {
    async logbut() {
      const {data:res} = await this.$http.post('http://43.142.57.112:8081/fat-sheep-back/n/user/login',{
        empNo:this.username,password:this.password
      })
      this.user = res.data;
      console.log(this.user);
      if(res.success == true){
        localStorage.setItem('user',JSON.stringify(this.user));
        localStorage.setItem('token','bearer xxxx');
        this.$router.push("/home");
        console.log(this.empId,'this.empId');
      }else{
        localStorage.removeItem('token')
        this.$alert(res.message, {
          confirmButtonText: '确定',
        });
      }
    },
  },
};
</script>

<style  scoped>
.login-container{
  min-height: 100%;
  background-color: gray;
  box-sizing: border-box;
  padding:100px
}
button {
    appearance: auto;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    box-sizing: border-box;
    margin: 0em;
}
input {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.login-page {
    width: 420px;
    height: 100%;
    padding: 0 0;
    margin:0 auto;
}
.form {
    background: #fff;
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 40px 50px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%), 0 5px 5px 0 rgb(0 0 0 / 24%);
}
input[type="password" i] {
    -webkit-text-security: disc !important;
}
.login-form h2 {
    font-size: 24px;
    color: #212121;
    font-weight: 600;
    text-align: left;
}
.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}

.form button {
    font-family: "Microsoft YaHei", "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #0dc316;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 15px;
    cursor: pointer;
}
</style>
