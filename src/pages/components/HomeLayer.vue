<template>
  <div class="layer-wrap" v-if="layerShow" @click="layerShow = !layerShow">
    <div class="appointSuccessPop">
      <i class="close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "layer",
  data () {
      return {
        layerShow:false
      }
  }
};
</script>

<style lang="stylus" scoped>
.layer-wrap
        position:fixed
        z-index:9
        top:0
        left:0
        right:0
        bottom:0
        width :100%
        height :100%
        background:rgba(0,0,0,0.4)
        .appointSuccessPop
            position :absolute
            left:50%
            top:30%
            margin-left:-435.5px
            width :871px
            height :453px
            background :url('../../../static/images/pop-bg.png') no-repeat
            background-size:100% 100%
            .close
                position :absolute
                top:-20px
                right:-20px
                width :57px
                height :57px
                cursor: pointer
                background :url('../../../static/images/btn-close.png') no-repeat
                background-size:100% 100%
</style>
        