<template>
  <el-form ref="form" status-icon :rules="rules" :model="form" class="form-content">
    <el-card class="card-content">
      <div slot="header" class="header-form">
        <span>Login</span>
      </div>
      <div>
        <el-form-item prop="email">
          <el-input v-model="form.email" placeholder="email"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="password"></el-input>
        </el-form-item>
      </div>
      <el-row type="flex">
        <el-col :span="3" class="register-form">Registrarse</el-col>
        <el-col :span="8" class="sign-up-form">
          <el-button type="primary" @click="perfomLogin('form')">Ingresar</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-form></el-form>
  </el-form>
</template>

<script>
import { db } from "../settings/index.js";
import firebase from 'firebase/';
export default {
  name: "Login",
  created() {
    if (this.$store.getters.layout !== "login-layout") {
      this.$store.commit("SET_LAYOUT", "login-layout");
    }
    console.log(this.eventos);
  },
  data: () => ({
    form: {
      email: "",
      password: ""
    },
    rules: {
      password: [{
        required: true,
        message: "Please input the password",
        tigger: "blur"
      }],
      email: [
        {
          required: true,
          message: "Please input the email",
          tigger: "blur"
        },
        {
          type: "email",
          message: "Please input correct email address",
          trigger: ["blur", "change"]
        }
      ]
    }
  }),
  methods: {
    perfomLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          console.log(firebase)
          firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
            .then((user) => {
              this.$store.commit('SET_AUTH', true)
              this.$router.replace({name:'home'})
            }).catch((error) => console.log(error))
        }
      })
    }
  },
  firestore: () => ({
    eventos: db.collection("eventos")
  })
};
</script>

<style scoped>
.form-content {
  display: flex;
  margin: 0%;
  flex-flow: row wrap;
  justify-content: center;
  height: calc(100vh -10px);
}

.card-content {
  width: 37%;
}

.register-form {
  flex: 0;
}

.sign-up-form {
  flex: 1;
  text-align: right;
}

/* Header form */
.el-card__header .el-card__header {
  flex: 1;
  background: linear-gradient(120deg, #42b883, #35495e);
}
.header-form {
  flex: 1;
  text-align: center;
  padding: 0%;
  height: 40px;
}
</style>
