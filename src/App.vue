<template>
  <div id="app">
    <HelloWorld></HelloWorld>
	<router-view></router-view>
	<foot></foot>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
	foot: footer
  }
}
</script>

<style>
	#app{
		padding-top: 110px;
	}
ul,li,ol{
	list-style: none;
}
*{
	margin: 0;
	padding: 0;
}
</style>
