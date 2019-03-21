<template>
    <div class="wrapper">
        <img src="../../../static/images/index_02.jpg" alt="" class="img">
        <em class="btn_video" @click="openVideo()" v-show="show"></em>
        <div class="video">
            <video controls id="myvideo" :src="videoSrc">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeGameInfo',
    data () {
        return {
            _dom:'',
            show:true,
            videoSrc:"../../../static/images/n_video.mp4"
        }
    },
    methods: {
        openVideo () {
            this._dom = document.getElementById('myvideo');
            this.show = !this.show;
            this._dom.play();
            let _this = this;
            setTimeout(function(){
                _this.flag = _this._dom.paused;
                if(!_this.flag){
                    this.show = this.show
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    position :relative
    .btn_video
        width: 6.6%
        height: 18.75%
        background: url('../../../static/images/g-video.png') no-repeat
        background-size: 100% 100%
        position: absolute
        z-index: 1
        top: 40%
        left: 50%
        margin-left: -63px
        cursor: pointer
    .video
        position :absolute
        left:50%
        margin-left -25%
        top : 20% 
        width :50.2%
        height :59.1%
        video
            width :100%
            height :100%
</style>

    
