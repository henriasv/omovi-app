<template>
  <div ref="omovi-container" v-bind:style="containerStyle">
    <canvas ref="omovi-scene" v-bind:style="containerStyle">
    </canvas>
    <frame-controller ref="frame-controller" :uicontroller="this"></frame-controller>
  </div>
</template>

<script>
import FrameController from './FrameController'
import OMOVIScene from 'omovi'
import * as THREE from 'three'
export default {
  name: 'UIController',
  data: function () {
    return {
      msg: 'This is the container',
      value1: 3,
      containerStyle: {
        width: '100%',
        height: '100%'
      },
      sphere: undefined,
      omoviScene: undefined,
      omoviCanvas: undefined
    }
  },
  methods: {
    setFrame: function (value) {
      this.omoviScene.setFrame(value)
      console.log('Setting frame to ' + value)
    },
    setSize: function (width, height) {
      this.containerStyle = {width: width, height: height}
    },
    setCanvasFullscreen: function (width, height) {
      this.setSize(window.innerWidth + 'px', window.innerHeight + 'px')
    },
    createTestSphere: function () {
      var geometry = new THREE.SphereGeometry(5, 32, 32)
      var material = new THREE.MeshBasicMaterial({color: 0xffff00})
      this.sphere = new THREE.Mesh(geometry, material)
      this.omoviScene.add(this.sphere)
    }
  },
  components: {
    FrameController
  },
  mounted: function () {
    this.container = this.$refs['omovi-container']
    this.omoviCanvas = this.$refs['omovi-scene']
    this.omoviScene = new OMOVIScene(this.omoviCanvas)
    this.omoviScene.loadUrl('https://dl.dropboxusercontent.com/s/84btil2gfe9vzbi/faceted_cube.xyz?dl=0')
    // this.omoviScene.loadUrl('/static/example_files/faceted_cylinder.xyz')
    this.omoviScene.animate()
    this.setCanvasFullscreen()
    addEventListener('resize', this.setCanvasFullscreen)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame-controller {
  position: relative;
  bottom: +10vw;
  background: #efe;
}
</style>
