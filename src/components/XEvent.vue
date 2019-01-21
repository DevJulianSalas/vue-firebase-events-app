<template>
  <div>
    <el-card>
      <img :src="image" alt="image-event">
      <div>
        <span>{{title}}</span>
        <div>
          <time class="time">{{datetime}}</time>
        </div>
        <div>
          <span>{{description}}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'x-event',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    datetime: {
      type: Date,
      required: true
    }
  }
}
</script>
<style scoped>

</style>
