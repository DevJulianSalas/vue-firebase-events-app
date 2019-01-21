<template>
<div>
  <el-row>
    <el-col class="create-event" :span="23">
      <h4>Crear un Evento<i class="icon-event el-icon-date"></i></h4>
    </el-col>
    <el-col :span="24">
      <div class="hline-bottom"></div>
    </el-col>
  </el-row>
  <el-row type="flex" justify="center" style="padding-top: 50px;">
    <el-col :span="12">
      <el-card class="create-event-card" :body-style="{ padding: '10px', width: '100%' }">
        <div slot="header" style="text-align: center">
          <span>Event</span>
        </div>
        <div>
          <el-form 
            :model="event" 
            label-position="top"
            ref="form" 
            label-width="50px"
          >
            <el-form-item label="Event Name">
              <el-input v-model="event.name"></el-input>
            </el-form-item>
            <el-form-item label="Tag line">
              <el-input v-model="event.name"></el-input>
            </el-form-item>
            <div style="display: flex; justify-content: space-around">
              <el-form-item label="Start date" label-width="100" class="datetime-picker-event">
                <el-date-picker
                  v-model="event.startDate"
                  type="datetime"
                  size="large"
                  style="width: 90%"
                  placeholder="Start datetime to event">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="end date" label-width="100" class="datetime-picker-event">
                <el-date-picker
                  v-model="event.endDate"
                  type="datetime"
                  size="large"
                  style="width: 90%"
                  placeholder="End datetime to event">
                </el-date-picker>
              </el-form-item>
            </div>
            <el-form-item label="Location">
              <el-input v-model="event.location"></el-input>
            </el-form-item>
            <el-form-item label="Stree">
              <el-input v-model="event.street"></el-input>
            </el-form-item>
            <el-form-item label="City/Town">
              <el-input v-model="event.street"></el-input>
            </el-form-item>
            <el-form-item label="Phone">
              <el-input v-model="event.street"></el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="event.street"></el-input>
            </el-form-item>
            <el-form-item height="">
              <el-upload
                class="upload-demo"
                ref="upload"
                :limit="1"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">select file</el-button>
                <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="Description">
              <el-input style="height: 100px;" type="textarea" v-model="event.description"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create Event</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>

</template>
<script>
export default {
  name: 'Create-Event',
  data: function () {
    return {
      event: {}
    }
  },
  created() {
    if (this.$store.getters.layout !== "home-layout") {
      this.$store.commit("SET_LAYOUT", "home-layout");
    }
  },
  methods: {
    onSubmit() {

    }
  } 
     
}
</script>
<style scoped>
.create-event {
  margin: 50px;
}

.create-event-card {
  width: 100%;
}
.icon-event {
  margin:10px;
  font-size: 20px;
}

.datetime-picker-event {
  flex: 1
}
</style>


