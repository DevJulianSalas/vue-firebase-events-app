<template>
  <el-row justify="center" type="flex" align="bottom">
    <el-col :span="10" :xs="24" class="col-card">
      <el-form ref="form" :model="payload">
        <el-card class="box-card">
          <div slot="header" class="card-header">
            <span>Card name</span>
          </div>
          <el-row gutter="50" class="group-input" type="flex">
            <el-col :span="24">
              <el-input placeholder="Enter username" v-model="payload.username"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="50" class="group-input" type="flex">
            <el-col :span="24">
              <el-input type="password" placeholder="Enter password" v-model="payload.password"></el-input>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="4" :xs="7">
              <span @>Registrarse</span>
            </el-col>
            <el-col
              :span="5"
              :xs="{span:4, offset:9}"
              :sm="{span:4, offset:11}"
              :md="{span:4, offset:15}"
              :lg="{span:4, offset:15}"
            >
              <el-button type="primary" @click="perfomLogin">Ingresar</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { db } from '../settings/index.js'
export default {
  name: 'Login',
  created() {
      if (this.$store.getters.layout !== 'login-layout') {
          this.$store.commit('SET_LAYOUT', 'login-layout')
      }
      console.log(this.eventos)
  },
  data: () => ({
      payload : {
          username: '',
          password: '',
      },
      eventos: []
  }),
  firestore: () => ({
      eventos: db.collection('eventos')
  })
}

</script>

<style scoped>
.el-container {
  margin: 0%;
  flex-flow: row wrap;
  height: calc(100vh - 16px);
}

.el-aside {
  background-color: #42b883;
  color: #333;
  text-align: center;
  line-height: 200px;
  flex: 0.5;
}
.col-card {
  padding-top: 14%;
}
.card-header {
  text-align: center;
  height: 50px;
}

.group-input {
  margin: 10px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
  flex: 0.5;
}
</style>
