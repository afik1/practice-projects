<template>
  <div class="container">
    <h1 class="logo">SPLI<br />TTER</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'App',
  components: {
    Calculator,
  },
  mixins: [
    {
      data() {
        return {
          componentId: uuidv4(),
        }
      },
    },
  ],
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Space Mono', monospace;
  font-size: 62.5%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: hsl(185, 41%, 84%);
  padding: 5rem 0 5rem 0;
}

.logo {
  font-size: 2rem;
  letter-spacing: 5px;
  margin: 6rem;
  color: hsl(186, 14%, 43%);
}

@media (max-height: 54em) and (max-width: 55em) {
  .logo {
    margin: 2rem;
  }

  .container {
    padding: 1rem;
  }
}

@media (max-height: 41em) {
  .logo {
    display: none;
  }

  .container {
    padding: 2rem;
  }
}
</style>
