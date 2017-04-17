<template>
	<div>
		<h1 v-show='games.length > 0'>Games</h1>
		<div class='ui cards'>
			<game :game='game' v-for='game in games' :key='game.id'></game>
		</div>
	</div>
</template>

<script>
import game from '../components/game.vue';
export default {
	mounted: function() {
		console.log('Mounted')
		console.log('Requesting ajax call now')
		$.get('api/game', (data) => {
			this.games = data;
		});
	},
	data: function() {
		return {
			games: []
		}
	},
	components: {
		game,
	}
}
</script>
