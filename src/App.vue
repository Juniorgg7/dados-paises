<template>
  <div id="app">
    <the-header />
    <the-input />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheInput from "./components/TheInput.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheInput,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  outline: #f5f5f5;
}

html,
body {
  height: 100%;
  background: #f5f5f5;
}

#app {
  width: 100%;
}
</style>
