<template>
  <frame-controller :uicontroller="this"></frame-controller>
</template>

<script>
import FrameController from './FrameController'
export default {
  name: 'UIController',
  data () {
    return {
      msg: 'This is the container',
      value1: 3
    }
  },
  methods: {
    setFrame (value) {
      // this.omoviScene.setFrame(value)
      console.log('omoviscene.setFrame call shall be implemented here')
    }
  },
  components: {
    FrameController
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
