<template>
  <div>
    <el-row type="flex" class="header-app">
      <el-col :span="3" class="brand-logo" :push="1">
        <img src="../assets/logo.svg" alt="" height="50">
      </el-col>
      <el-col :span="20">
        <el-row type="flex" justify="end" align="middle" class="navbar-items">
          <el-menu 
            mode="horizontal"
            class="el-menu-demo"
            router
          >
            <el-menu-item 
              v-for="(item, index) in items" 
              :key="index"
              :index="item.path" 
            >
              <span>{{item.name}}</span>
            </el-menu-item>
          </el-menu>
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
  data: function () {
    return {
      items: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Crear evento',
          path: 'create-event'
        },
        {
          name: 'Notificaciones',
          path: 'notifications'
        },
        {
          name: 'Cerrar sesion',
          path: 'logout'
        }
      ]
    }
  },
  methods: {
    onNavigation() {
      console.log("shit")
    }
  }
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

.el-menu-demo {
  border-bottom: None !important;

}
</style>
