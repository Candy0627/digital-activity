<template>
    <div class="wrapper" id="appointNow">
        <img src="../../../static/images/index_03.jpg" alt="" class="img">
        <div class="number">
            <span>2</span>
            <span>8</span>
            <span>6</span>
            <span>5</span>
            <span>0</span>
        </div>
        <div class="activity_txt">
            [二十年再相遇《數碼世界》戰力比拼贏豪禮]<br>
2019年3月25日—3月31日下載遊戲進入活動指導伺服器XXXXX，<br>
參與戰力比拼活動綜合排名前50的玩家可獲得限量豪禮。
        </div>
        <div class="appoint">
            <div class="tab">
                <a href="javascript:;" class="animated fadeIn" v-for="(item,index) in items" :key="item.id" :class="{active:curId==index}" @click="tab(index)">{{item.nav}}</a>
            </div>
            <div class="content">
                <div v-for="(item,index) in items" :key="item.id" v-show="index===curId">
                    <form action="">
                        <div class="c_width">
                            <span>+{{item.areaCode}}</span>
                            <input type="text" placeholder="请输入电话号码" class="phone" v-model="phone">
                        </div>
                        <div class="c_width">
                            <input type="text" placeholder="请输入email" class="email" v-model="email">
                        </div>
                    </form>
                </div>
                <span class="btn">
                    <layer ref="layer"></layer>
                    <a href="javascript:;" class="btn_appoint" @click="layerShow = !layerShow"></a>
                    <a href="javascript:;" class="btn_fb" @click="fbShare()"></a>
                </span>
            </div>
        </div>
        <div class="part_way_txt">
            1.點擊預約界面填寫聯繫方式預約報名；<br>
2.活動伺服器XXX將於4月1日09:00開啟，預約完成后可預先下載遊戲；<br>
4.預約活動截止時間為3月31日；<br>
5.戰力比拼活動為期七天，4月7日10:00正式結束；<br>
注：參與活動請務必填寫正確的行動電話號碼和E-mail，確認提交后不可再次修改，避免漏接信息。
        </div>
        <!-- layer弹出层 -->
        <div class="layer-wrap" v-if="layerShow" @click="layerShow = !layerShow">
            <div class="appointSuccessPop">
            <i class="close"></i>
            </div>
        </div>
        <!-- facebook 分享 -->
        <div id="fb-root"></div>
    </div>
</template>

<script>
import layer from '@/pages/components/HomeLayer'
export default {
    name:'HomeActivity',
    components:{
        layer
    },
    data () {
        return {
            layerShow:false,
            show:true,
            curId:0,
            phone:'',
            email:'',
            items:[{
                id:"001",
                nav:"台灣",
                areaCode:'886',
                phone:'18896600951',
                email:'1234@qq.com'
            },{
               id:"002",
                nav:"香港",
                areaCode:'852',
                phone:'18896600951',
                email:'12345@qq.com'
            },{
                id:"003",
                nav:"澳門",
                areaCode:'853',
                phone:'18896600951',
                email:'12346@qq.com'
            },{
                id:"004",
                nav:"新加坡",
                areaCode:'65',
                phone:'18896600951',
                email:'12347@qq.com'
            },{
                id:"005",
                nav:"馬來西亞",
                areaCode:'60',
                phone:'18896600951',
                email:'12348@qq.com'
            }]
        }
    },
    methods: {
        tab (index) {
            this.curId = index;
        },
        // appointSuccessPop() {
        //     var that = this;
        //     let layer = that.$refs.layer;
        //     layer.open({
        //         type:1,
        //         content:'nihao',
        //         shadeClose:true
        //     })
        // },
        fbShare () {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/zh_CN/sdk.js#xfbml=1&version=v2.12&appId=你的APPID&autoLogAppEvents=1';
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            // 初始化
            FB.init({
                appId:'',
                autoLogAppEvents:true,
                xfbml: true,
                version: "v2.12"
            });
            FB.ui({
                method: 'share',
                href:'',
            }, function (response) {
               
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    position :relative
    .number
        position :absolute
        top:12%
        left:47%
        margin-left :-16%
        width :38%
        height :16%
        // background :pink
        // opacity :.6
        span
            float :left
            width 18%
            height :100%
            margin-right :2%
            display :block
            color:#00ccff
            font-size:571%
            padding-top:5%
            background :url('../../../static/images/n-border.png') no-repeat
            background-size:100% 100%
            &.last-child
                margin-right :0
    .activity_txt
        position: absolute
        top: 35%
        left: 47%
        margin-left: -16%
        width: 38%
        text-align :center
        color:#00ccff
        font-size :57%
        line-height :170%
    .part_way_txt
        position: absolute
        top: 81%
        left: 53%
        margin-left: -25%
        width: 50%
        text-align :left
        color:#00ccff
        font-size :64%
        line-height :180%
    .appoint
        position: absolute
        top: 47.7%
        left: 56.1%
        margin-left: -16%
        width: 26.3%
        text-align :center
        color:#00ccff
        font-size :57%
        .tab
            display :flex
            width: 100%
            line-height :219%
            background :#084189
            a
                flex:1
                color:#fff
                font-size :121%
                &.active
                    color:#000000
                    background :#00d8ff
        .c_width
            display:inline-block
            width: 100%
            line-height :216%
            margin-top :8.75%
            padding-left:3%
            /* background :pink
            opacity:.6 */
            span
                float: left
                color:#000
                font-size :110%
            input
                width :100%
                height :100%
                color:#000
                font-size :105.73%
                &.phone
                    float: left
                    width: 86%
                    padding-top :1.1%
                &:-webkit-input-placeholder
                    color:#000
                &:-moz-placeholder
                    color:#000
                &::-moz-placeholder
                    color:#000
                &:-ms-input-placeholder
                    color:#000
        .btn
            display :block
            position :absolute
            width :84%
            height :35%
            left:38%
            top:128%
            margin-left:-42%
            /* background :pink
            opacity :.6 */
            a
                display :block
                float: left
                width :40%
                height :100%
                color:#fff
                cursor: pointer
                &.btn_appoint
                    left:0
                &.btn_fb
                    right:0
                    margin-left:18%
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

    
