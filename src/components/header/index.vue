<style lang="scss" scoped> @import "./header.scss"; </style>
<template>
	<Row class="ASHeader" type="flex">
		<Col span="12" class="ASHeader-logo">
			<Icon type="stats-bars"></Icon>
			Dashboard
		</Col>
		<Col span="12" class-name="ASHeader-user">
			<div v-if="LoginStatus">
				<Dropdown trigger="click" class="user-info" placement="bottom-end">
					<a href="javascript:void(0)">
						Hello，{{UserInfo.nickName}}
						<Icon type="arrow-down-b"></Icon>
					</a>
					<Dropdown-menu slot="list">
						<Dropdown-item>
							<span><Icon type="android-settings"></Icon>设置</span>
						</Dropdown-item>
						<Dropdown-item divided>
							<span @click="setLoginOut()"><Icon type="log-out"></Icon>注销账户</span>
						</Dropdown-item>
					</Dropdown-menu>
				</Dropdown>
				<div class="user-headimg">
					<span>
						<img :src="UserInfo.headIcon">
					</span>
				</div>
			</div>
		</Col>
	</Row>
</template>
<script> import header from './header'; export default header; </script>