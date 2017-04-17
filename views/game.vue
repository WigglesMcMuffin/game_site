<template>
  <div>
    <h1>Game Page</h1>
    <div>
      <h2>{{ game.name }}</h2>
			<p>{{ game.description }}</p>
      <div id='canvas-wrapper'></div>
    </div>
  </div>
</template>

<script>
import p2 from 'p2';
import pixi from 'pixi';
import Phaser from 'phaser-ce';
window['Phaser'] = Phaser
export default {
	props: [
		'game_id'
	],
  mounted: function() {
		$.get('api/game/'+this.game_id, (data) => {
			this.inspection = data;
			this.game = data.game;
			this.entry = data.entry;
			console.log(this.entry);
			this.entry.initialize();
		})
  },
  data: function() {
    return {
			inspection: {},
			game: {},
      entry: '',
    }
  },
}
</script>
