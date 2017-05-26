<style lang="scss" scoped> @import "./leftnav.scss"; </style>
<template>
	<div class="ASApp-leftnav">
		<Menu :theme="theme3" active-name="1">
			<Menu-group title="一级标题">
				<Menu-item name="1">
					<Icon type="document-text"></Icon>
					一级菜单
				</Menu-item>
			</Menu-group>
		</Menu>
	</div>
</template>
<script> import leftnav from './leftnav'; export default leftnav; </script>