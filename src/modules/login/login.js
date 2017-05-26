export default {
	data () {
		return {
			// 表单信息
			UserForm: {
				loginId: '',
				passwd: ''
			},
			tipMessage: {
				showMessage: false,
				message: ''
			},
			UserFormRule: {
				loginId: [
					{ required: true, message: '请填写用户名', trigger: 'blur' },
					{ type: 'string', min: 6, message: '用户名长度不能小于6位', trigger: 'blur' },
					{ type: 'string', max: 20, message: '用户名长度不能大于20位', trigger: 'blur' }
				],
				passwd: [
					{ required: true, message: '请填写密码', trigger: 'blur' },
					{ type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
					{ type: 'string', max: 20, message: '密码长度不能大于20位', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		handleSubmit(name){
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$store.dispatch('user/setLoginIn', this.UserForm);
					this.changeMessage("提交成功！");
					this.$router.push('/realtime');
				}
			})
		},
		changeMessage(string){
			this.tipMessage.message = string;
			this.tipMessage.showMessage = true;
		}
	}
}