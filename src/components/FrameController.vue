<template>
  <div class="frame-controller">
    <span class="demonstration">Default value</span>
    <el-slider v-model="frame" :min="min" :max="max"></el-slider>
    <el-input-number size="mini" v-model="frame" :min="min" :max="max"></el-input-number>
    <el-button v-on:click="togglePlay"></el-button>
    <el-input v-model="playInterval"></el-input>
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
      max: 100,
      playIsOn: false,
      playTimer: undefined,
      playInterval: 100
    }
  },
  methods: {
    formatTooltip (val) {
      return val / 100
    },
    incrementSlider (increment) {
      this.frame = this.frame + increment
      console.log('incrementing slider')
    },
    togglePlay () {
      if (!this.playIsOn) {
        this.playTimer = window.setInterval(() => { this.incrementSlider(1) }, this.playInterval)
        this.playIsOn = true
        console.log('playTimer: ', this.playTimer)
      } else {
        clearInterval(this.playTimer)
        this.playIsOn = false
      }
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
