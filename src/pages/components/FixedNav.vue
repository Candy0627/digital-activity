<template>
    <div class="slideBarNav">
        <img src="../../../static/images/fix-nav.png" alt="" class="img">
        <a href="javascript:;" class="btn_appontNow" @click="btn_appontNow"></a>
        <a href="#" class="btn_gameDownload"></a>
        <a href="javascript:;" class="btn_scrollTop" @click="backTop()"></a>
    </div>
</template>

<script>
export default {
    name:'HomeFixedNav',
    data () {
        return {

        }
    },
    methods: {
        backTop () {
            let back = setInterval(() => {
                if(document.body.scrollTop||document.documentElement.scrollTop){
                    document.body.scrollTop-=100;
                    document.documentElement.scrollTop-=100;
                }else {
                    clearInterval(back)
                }
            });
        },
        btn_appontNow () {
            document.querySelector('#appointNow').scrollIntoView(true);
        }
    }
}
</script>

<style lang="stylus" scoped>
.slideBarNav
    position :fixed
    right :0
    top:20%
    a
        display :block
        position :absolute
        right:26px
        width :145px
        &.btn_appontNow
            top:156px
            height :129px
        &.btn_gameDownload
            top:287px
            height :129px
        &.btn_scrollTop
            bottom:0
            height :48px

</style>

    
