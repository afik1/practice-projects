<template>
  <div class="options-container">
    <label class="options-label">Select Tip %</label>
    <div class="tip-options">
      <div
        v-for="(option, index) in options"
        :key="index"
        v-bind:class="[option.style, 'option']"
        @click="setPercent(option.percent, index)"
      >
        {{ option.percent }}%
      </div>
      <input
        type="text"
        v-model="userInput"
        placeholder="Custom"
        class="option percent-input"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resetTrigger: Boolean,
  },
  data: () => {
    return {
      userInput: '',
      options: [
        { percent: 5, style: 'option-style' },
        { percent: 10, style: 'option-style' },
        { percent: 15, style: 'option-style' },
        { percent: 20, style: 'option-style' },
        { percent: 25, style: 'option-style' },
      ],
    }
  },
  methods: {
    setPercent(percent, index) {
      this.$store.dispatch('setTipPercent', percent)
      this.resetDefaults()
      this.userInput = ''
      this.options[index].style = 'picked-option-style'
    },
    resetDefaults() {
      this.options.map((option) => {
        option.style = 'option-style'
        return option
      })
    },
  },
  watch: {
    userInput: function (value) {
      if (parseInt(value) !== 0 && value.match(/^\d+$/)) {
        this.$store.dispatch('setTipPercent', value)
        this.resetDefaults()
      }
    },
    resetTrigger: function () {
      this.reset()
    },
  },
}
</script>

<style scoped>
.options-container {
  width: 100%;
}

.options-label {
  font-weight: 700;
  font-size: 1.2rem;
  color: hsl(186, 14%, 43%);
}

.tip-options {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 0.8rem;
  margin-top: 10px;
}

.option {
  width: 90%;
  height: 3.6rem;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
}

.option:hover {
  background-color: hsl(172, 62%, 56%);
}

.percent-input {
  text-align: center;
  background-color: hsl(189, 41%, 97%);
  color: hsl(183, 100%, 15%);
  border: 0;
}

.percent-input:focus {
  outline: none;
  border: 2px solid aqua;
}

.picked-option-style {
  background-color: hsl(172, 67%, 45%);
  color: hsl(183, 100%, 15%);
}

.option-style {
  background-color: hsl(183, 100%, 15%);
  color: hsl(189, 41%, 97%);
}
</style>
