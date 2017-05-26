<template>
  <Row type="flex" id="ASApp">
  	<HeaderMenu></HeaderMenu>
  	<router-view></router-view>
  </Row>
</template>
<style lang="scss">
	#ASApp{
		flex-direction: column;
		min-height: 100vh;
	}
</style>
<script>
	import HeaderMenu from 'components/header'
	export default {
		components: {
			HeaderMenu
		}
	}
</script>