<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Container-Purchase">
    <el-descriptions
      class="margin-top"
      title="采购清单"
      :column="3"
      :size="size"
      border
    >
      <template slot="extra">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button type="primary" size="small">添加</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          收货人
        </template>
        xxx
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          收货人电话
        </template>
        18888800000
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          门店地址
        </template>
        上海市
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          送货人
        </template>
        xxx
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          送货人电话
        </template>
        10088888000
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          供应商地址
        </template>
        苏州市
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          供应商名称
        </template>
        <el-tag size="small">xxx</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        江苏省苏州市吴中区吴中大道 1188 号
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-edit"></i>
          订单详情
        </template>
        <a href="#">点击查看详情</a>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
