<template>
  <div>
    <h1 v-show='games.length > 0'>Games</h1>
    <div class='ui cards'>
      <game :game='game' v-for='game in games'></game>
    </div>
  </div>
</template>

<script>
import game from '../components/game.vue';
export default {
  data: function() {
    return {
      games: [
       {name: 'Mario Clone', description: 'A basic mario clone game', game_id: 1},
      ]
    }
  },
  components: {
    game,
  }
}
</script>
