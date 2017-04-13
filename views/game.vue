<template>
  <div>
    <h1>Game Page</h1>
    <div>
      <h2>Single Game Loaded Here</h2>
      <h3>Currently Visiting Game: {{ $route.params.game_id }}</h3>
      <div id='canvas-wrapper'></div>
    </div>
  </div>
</template>

<script>
import p2 from 'p2';
import pixi from 'pixi';
import Phaser from 'phaser-ce';
import game from 'games/'+$route.params.game_id+'/js/main.js'
window['Phaser'] = Phaser
export default {
  mounted: function() {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'canvas-wrapper');
  },
  data: function() {
    return {
    }
  },
}
</script>
