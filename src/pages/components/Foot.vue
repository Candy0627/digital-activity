<template>
  <div class="footer">
    <img src="../../../static/images/index_07.jpg" alt class="img">
      <div class="footer_in">
        <a href="http://www.gamemorefun.com/front/introduce" class="intr">公司介绍</a>
        <a href="http://www.gamemorefun.com/front/relation" class="concat">联系我们</a>
        <a href="javascript:;" class="service">服务条款</a>
        <a href="http://www.gamemorefun.com/front/policy" class="private">隐私政策</a>
      </div>
    </div>
</template>

<script>
export default {
  name: "HomeFoot",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="stylus" scoped>
.footer
	position: relative
	width: 100%
	text-align: center
	.footer_in
		position: absolute;
		width: 3rem;
		margin: 0 auto;
		overflow: hidden;
		height: 0.3rem;
		left: 5rem;
		top: 0.4rem;
		/* background: pink;
		opacity: .4; */
		a
			width: 0.7rem
			height: 0.3rem
			position: absolute
			top: 0
			opacity: 1
			cursor: pointer
			text-indent: -9999px
			&.intr
				left:0
			&.concat
				left: .8rem
			&.service
				left: 1.5rem
			&.private
				left: 2.2rem
</style>

    
