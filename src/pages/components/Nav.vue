<template>
    <div class="nav">
        <div class="left">
            <img src="../../../static/images/logo.png" alt="" class="img">
        </div>
        <div class="right">
            <a href="#" class="fb active">Facebook粉絲頁</a>
            <a href="javascript:;" class="gift_get" @click="returnPriceGet()">獎勵領取<em></em></a>
            <em class="music"></em>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeNav',
    methods: {
        returnPriceGet () {
            document.querySelector('#priceGet').scrollIntoView(true);
        }
    }
}
</script>

<style lang="stylus" scoped>
.nav
    position :fixed
    z-index :2
    width :100%
    height :85px
    background :rgba(7,16,40,.8)
    .left
        position :absolute
        top:5px
        left:23px
    .right
        width :402px
        float :right
        a
            float :left
            width :40%
            height :85px
            line-height :85px
            display :inline-block
            font-size:20px
            color:#fff
            &.fb
            &.active
                border-bottom:3px solid #fff
            &.gift_get
                margin-left :5.5%
                em
                    display :inline-block
                    width :38px
                    height :38px
                    vertical-align :sub
                    background :url('../../../static/images/icon-gift.png') no-repeat
        .music
            display :inline-block
            margin-top :6.7%
            margin-right :3%
            width :21px
            height :21px
            background :url('../../../static/images/btn-music.png') no-repeat
</style>

    
