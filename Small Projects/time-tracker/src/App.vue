<template>
  <activityTracker></activityTracker>
</template>

<script>
import activityTracker from "./components/activityTracker.vue";

export default {
  name: "App",
  components: {
    activityTracker,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* font-size: 10px; */
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  font-size: 62.5%;
}

@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap");

body {
  font-family: "Rubik", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: hsl(226, 43%, 10%);
}
</style>
