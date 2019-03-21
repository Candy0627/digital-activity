<template>
    <div class="wrapper">
        <img src="../../../static/images/index_01.jpg" alt="" class="img">
        <div class="download">
            <a href="#" class="btn_download"></a>
            <a href="#" class="btn_appoint"></a>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeBanner',
}
</script>

<style lang="stylus" scoped>
.wrapper
    position :relative
    .img
        width :100%
    .download
        position :absolute
        bottom:10.3%
        left:50%
        margin-left :-14%
        width :28%
        height :71px
        a
            position :absolute
            width :46%
            height :69px
            /* background :pink
            opacity :0.6 */
            &.btn_download
                left:0
            &.btn_appoint
                right:0
</style>

    
