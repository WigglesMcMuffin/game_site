export default [{
  path: '/',
  component: (resolve) => {
    require(['../views/home.vue'], resolve)
  }
}, {
  path: '/game/:game_id',
  name: 'game',
	props: true,
  component: (resolve) => {
    require(['../views/game.vue'], resolve)
  }
}, ]
