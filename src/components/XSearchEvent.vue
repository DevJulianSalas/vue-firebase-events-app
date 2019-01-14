<template>
  <div class="search-event">
    <el-row type="flex" justify="center">
      <el-col 
        class="event-search-title" 
        :span="6">
        <h2>Buscar por un evento</h2>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col 
        :span="6" 
        class="input-event-search">
        <el-input placeholder="eventos.." v-model="event"></el-input>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'x-search-event',
  data: () => ({
    event: ''
  })
}
</script>

<style scoped>
.search-event {
  background: #35495e;
  height: 170px;
}

.event-search-title {
  margin-top: 20px;
  color: #ffffff;
  /* font-size: 20px; */
}

.input-event-search{
  margin-top: 20px;
}

</style>

