let event = require('../../core/event');
let config = require('../../core/config');

Page.P('index', {
	data: {},
	onAppLaunch: function (opts) {
		console.log('[pages/index]  程序启动：', opts)
	},
	onLoad: function() {
		// this.$preload('/pages/user/user?cid=123');
	},
	onReady: function () {

	},
	onPlay: function () {
		wx.setStorageSync('user', {name:555,age:777});
		event.emit('change');
		// this.$route('/pages/user/user?cid=123')
	},
	onPlayNav: function () {
		wx.navigateTo({
			url: '/pages/play?cid=abcd'
		})
	},
	onShow: function () {
		console.log('[pages/index] 页面展示')
	},
	onAwake: function (t) {
		console.log('[pages/index] 程序被唤醒：', t)
	},
	onClickBefore: function (e) {
		console.log('## On click before')
	},
	onClickAfter: function (e) {
	},
	onTouchend: function (e) {
	},
	onTTap: function () {
	},
	callFromComponent: function (name) {
		console.log('!!! call from component:', name)
	}
})