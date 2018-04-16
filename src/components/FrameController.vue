<template>
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="frame" :min="min" :max="max"></el-slider>
    <el-input-number size="mini" v-model="frame" :min="min" :max="max"></el-input-number>
  </div>
</template>

<script>
export default {
  name: 'FrameController',
  props: ['uicontroller'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      frame: 0,
      min: 0,
      max: 0
    }
  },
  methods: {
    formatTooltip (val) {
      return val / 100
    }
  },
  watch: {
    frame: function () {
      this.uicontroller.setFrame(this.frame)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
