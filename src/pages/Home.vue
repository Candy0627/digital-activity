<template>
    <div>
        <home-nav></home-nav>
        <home-banner></home-banner>
        <home-gameInfo></home-gameInfo>
        <home-activity></home-activity>
        <home-priceGet :list="priceList"></home-priceGet>
        <home-foot></home-foot>
        <home-fixedNav></home-fixedNav>        
    </div>
</template>

<script>
import HomeNav from '@/pages/components/Nav'
import HomeBanner from '@/pages/components/Banner'
import HomeGameInfo from '@/pages/components/GameInfo'
import HomeActivity from '@/pages/components/Activity'
import HomePriceGet from '@/pages/components/PriceGet'
import HomeFoot from '@/pages/components/Foot'
import HomeFixedNav from '@/pages/components/FixedNav'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        HomeNav,
        HomeBanner,
        HomeGameInfo,
        HomeActivity,
        HomePriceGet,
        HomeFoot,
        HomeFixedNav
    },
    data () {
        return {
            priceList:[]
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data;
            if(res.ret && res.data){
                this.priceList = res.data.priceList;
            }            
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>

    
