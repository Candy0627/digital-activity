<template>
    <div class="wrapper" id="priceGet">
        <img src="../../../static/images/index_04.jpg" alt="" class="img">
        <div class="powerList">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <span>{{item.rank}}</span>
                    <span>{{item.name}}</span>
                    <span>{{item.military}}</span>
                </li>
            </ul>
        </div>        
    </div>
</template>

<script>
export default {
    name:'HomePriceGet',
    props:{
        list:Array
    },
    data () {
        return {
            show:true,
            // priceList:[{
            //     id:'001',
            //     rank:'第一名',
            //     name:'角色名称2',
            //     military:'战力'
            // },{
            //     id:'002',
            //     rank:'第二名',
            //     name:'角色名称2',
            //     military:'战力'
            // },{
            //     id:'003',
            //     rank:'第三名',
            //     name:'角色名称2',
            //     military:'战力'
            // },{
            //     id:'004',
            //     rank:'第四名',
            //     name:'角色名称2',
            //     military:'战力'
            // },{
            //     id:'005',
            //     rank:'第五名',
            //     name:'角色名称2',
            //     military:'战力'
            // },{
            //     id:'006',
            //     rank:'第六名',
            //     name:'角色名称2',
            //     military:'战力'
            // },{
            //     id:'007',
            //     rank:'第七名',
            //     name:'角色名称2',
            //     military:'战力'
            // },{
            //     id:'008',
            //     rank:'第八名',
            //     name:'角色名称2',
            //     military:'战力'
            // }]
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
    position: relative
    .powerList
        position:absolute
        z-index :3
        top:72%
        left:50%
        width :50%
        margin-left :-25%
        line-height :170%
        ul
            width :100%
            height :230px
            overflow-y :auto
            &::-webkit-scrollbar-track-piece
                background-color :rgba(255,255,255,0)
            &::-webkit-scrollbar
                width :2px
                height : 1px
            &::-webkit-scrollbar-thumb
                border-radius :10px
                background-color:#04f8ff
                background-clip:padding-box
                min-height:20px
            li
                display: flex
                width :100%
                span
                    flex:1
                    width: 33.333333%
                    text-align :center
                    font-size:18px
                    color:#fff
</style>