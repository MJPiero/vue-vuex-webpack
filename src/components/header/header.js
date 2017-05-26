import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			LoginStatus: 'user/returnLoginStatus',
			UserInfo: 'user/returnUserInfo'
		})
	},
	methods: {
		setLoginOut (){
			this.$store.dispatch('user/setLoginOut');
			this.$router.push('/login');
		}
	}
}