export default [{
  path: '/',
  component: (resolve) => {
    require(['../views/home.vue'], resolve)
  }
}, {
  path: '/game/:game_id',
  name: 'game',
  component: (resolve) => {
    require(['../views/game.vue'], resolve)
  }
}, ]
