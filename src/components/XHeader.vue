<template>
  <div>
    <el-row type="flex" class="header-app">
      <el-col :span="3" class="brand-logo" :push="1">
        <img src="../assets/logo.svg" alt="" height="50">
      </el-col>
      <el-col :span="20">
        <el-row type="flex" justify="end" align="middle" class="navbar-items">
          <el-col :span="3">crear evento</el-col>
          <el-col :span="3">notificaciones</el-col>
          <el-col :span="3">cerrar sesion</el-col>
        </el-row> 
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="hline-bottom"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "x-header",
};
</script>

<style scoped>
.header-app {
  display: flex;
  height: 80px;
  width: 100%;
  flex-wrap: wrap;
}
.brand-logo {
  margin: 10px;

  
}
.hline-bottom {
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
}
.navbar-items {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
