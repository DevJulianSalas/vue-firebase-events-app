<template>
  <div>
      <el-row>
        <el-col :span="24">
          <x-header/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <x-search-event/>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <h2 class="event-text-home">Eventos</h2>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
  created() {
    if (this.$store.getters.layout !== "home-layout") {
      this.$store.commit("SET_LAYOUT", "home-layout");
    }
  }
};
</script>

<style scoped>
.event-text-home {
  color: #35495e;
  margin: 50px;
}
</style>
