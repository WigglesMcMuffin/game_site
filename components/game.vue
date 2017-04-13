<template>
  <div class='ui card'>
    <div class='content'>
      {{ game.name }}
      <!--<span class='right floated'>${{ game.price }}</span>-->
    </div>
    <div class='image'>
      <img>
    </div>
    <div class='content'>
      <p>{{ game.description }}</p>
    </div>
    <div class="ui green bottom attached button" @click='navigate'>
      <i class="play icon"></i>
      Play Game
    </div>
  </div>
</template>

<style scoped>
.thing {
  background: #ccc;
}
</style>

<script>
export default {
  props: ['game'],
  data: function() {
    return {
    }
  },
  methods: {
    navigate: function(event) {
      this.$router.push({name: 'game', params: { game_id: this.game.game_id }});
    }
  }
}
</script>
