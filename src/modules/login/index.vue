<style lang="scss" scoped> @import "./login.scss"; </style>
<template>
	<div class="ASLogin">
		<div class="ASLogin-container">
			<div class="header">登录</div>
			<div class="main">
				<Form ref="UserForm" :model="UserForm" :rules="UserFormRule">
					<Form-item label="用户名" prop="loginId" :label-width = "80">
						<Input type="text" v-model="UserForm.loginId" placeholder="请输入用户名"></Input>
					</Form-item>
					<Form-item label="密码" prop="passwd" class="input-password" :label-width = "80">
						<Input type="password" v-model="UserForm.passwd" placeholder="请输入密码"></Input>
					</Form-item>
					<Form-item class="input-message" :label-width = "80">
						<span class="input-message-content" v-if="tipMessage.showMessage">{{ tipMessage.message }}</span>
						<Button type="text" @click="changeMessage('请联系管理员，使用admin账号重置密码')">忘记密码</Button>
					</Form-item>
					<Form-item class="input-submit" :label-width = "35">
						<Button type="primary" @click="handleSubmit('UserForm')">登录</Button>
					</Form-item>
				</Form> 
			</div>
		</div>
	</div>
</template>
<script> import login from './login'; export default login; </script>