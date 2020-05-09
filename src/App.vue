<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import footer from "./components/footer.vue";
import experience from "./components/experience.vue";
import passageway from "./components/passageway.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    foot: footer
  }
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
