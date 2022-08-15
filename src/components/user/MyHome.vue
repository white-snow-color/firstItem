<template>
  <el-container>
    <el-header>
      <!-- 头部组件 -->
      <Head></Head>
    </el-header>
    <!-- 内容组件 -->
    <el-container>
      <!-- 导航栏 -->
      <div style="min-height: 730px;" id="con">
        <el-aside>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- 人员管理 -->
            <el-submenu index="1" class="flexs">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span><router-link to="/eleIfor">员工信息</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="/ele">人员管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 员工权限菜单管理 -->
            <el-submenu index="2" class="flexs">
              <template slot="title">
                <i class="el-icon-eleme"></i>
                <span>
                  <router-link to="/rights">权限中心</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">权限管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 会员管理-->
            <el-submenu index="3" class="flexs">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>
                  <router-link to="/vips">会员中心</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">会员管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 菜单管理 -->
            <el-submenu index="4" class="flexs">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>
                  <router-link to="/goods">菜单中心</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">菜单管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 订单管理 -->
            <el-submenu index="5" class="flexs">
              <template slot="title">
                <i class="el-icon-document-delete"></i>
                <span>
                  <router-link to="/orders">订单中心</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">订单管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 采购管理 -->
            <el-submenu index="6" class="flexs">
              <template slot="title">
                <i class="el-icon-truck"></i>
                <span><router-link to="/pruc">采购中心</router-link> </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">采购管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 活动管理 -->
            <el-submenu index="7" class="flexs">
              <template slot="title">
                <i class="el-icon-medal"></i>
                <span> 
                  <router-link to="/active">活动中心</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1">活动管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 数据统计管理 -->
            <el-submenu index="8" class="flexs">
              <template slot="title">
                <i class="el-icon-coin"></i>
                <span>
                <router-link to="/dataes">数据统计管理</router-link>
                </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="8-1">员工离职率汇总</el-menu-item>
                <el-menu-item index="8-2">折扣汇总</el-menu-item>
                <el-menu-item index="8-3">日营业额报表</el-menu-item>
                <el-menu-item index="8-4">日销售报告</el-menu-item>
                <el-menu-item index="8-5">采购报表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
      </div>
      <!-- 内容区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Head from "@/components/homes/Headers.vue";

export default {
  components: {
    Head,
  },
};
</script>

<style scoped>
html,body{
  height: 100%;
}
.el-aside {
  min-height: 100%;
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: left;
  line-height: 200px;
  max-width: 200px;
}
.el-main {
  min-height: auto;
  background-color: #e6ebf0;
  color: #333;
  text-align: center;
}
#con{
  box-sizing: border-box;
}
.el-header {
  padding: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0;
}
.container-fluid {
  height: 60px;
}
span{
  color: #337ab7;
}
</style>
