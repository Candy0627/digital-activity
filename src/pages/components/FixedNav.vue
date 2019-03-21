<template>
    <div class="fixed">
        <div class="slideBarNav">
            <img src="../../../static/images/fix-nav.png" alt="" class="img">
            <a href="javascript:;" class="btn_appontNow" @click="btn_appontNow"></a>
            <a href="javascript:;" class="btn_gameDownload" @mouseenter="enter()" @mouseleave="leave()"></a>
            <a href="javascript:;" class="btn_scrollTop" @click="backTop()"></a>
        </div>
        <div class="code" v-show="seen">
            <img src="../../../static/images/code.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeFixedNav',
    data () {
        return {
            seen: false,
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
        },
        enter () {
            this.seen = true;
        },
        leave () {
            this.seen = false;
        }
    },
    mounted () {
        // this.$layer.alert('你是猪啊');
    }
}
</script>

<style lang="stylus" scoped>
.fixed
    position :fixed
    right :0
    top:20%
    .slideBarNav
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
    .code
        position :absolute
        right:89%
        top:61%
        width :68%
</style>

    
