<template>
<div class='pusher'>
  <div class="ui inverted vertical masthead center aligned segment">
    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <router-link class='item' active-class='active' to='/'>Home</router-link>
        <div class="right item">
          <a class="ui inverted primary button">Log in<i class="chevron right icon"></i></a>
          <a class="ui inverted secondary button">Sign Up</a>
        </div>
      </div>
    </div>
    <div class="ui text container">
      <h1 class="ui inverted header">
        Games Site
      </h1>
      <h2>A Simple Site For Hosting Some Games</h2>
    </div>
  </div>
  <div class='ui vertical stripe segment' id="main">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      active: 'home'
    }
  }
}
</script>

<style>

</style>
