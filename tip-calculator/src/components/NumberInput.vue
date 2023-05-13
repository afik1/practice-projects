<template>
  <div class="input-container">
    <div class="input-labels">
      <label v-bind:for="this.componentId" class="input-label">{{
        inputTitle
      }}</label>
      <label v-bind:for="this.componentId" class="error-label">{{
        errorText
      }}</label>
    </div>

    <input
      v-bind:id="this.componentId"
      class="input"
      v-model="userInput"
      v-bind:class="[inputIcon, isValid ? 'input-valid' : 'input-error']"
      type="text"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputTitle: String,
    inputIcon: String,
    resetTrigger: Boolean,
  },
  data: () => {
    return {
      isValid: true,
      errorText: '',
      userInput: '',
    }
  },
  methods: {
    reset() {
      this.isValid = true
      this.errorText = ''
      this.userInput = ''
    },
  },
  watch: {
    userInput: function (value) {
      if (parseInt(value) === 0) {
        this.isValid = false
        this.errorText = "can't be zero"
      } else if (!value.match(/^\d+$/) && value !== '') {
        this.isValid = false
        this.errorText = 'must be a number'
      } else {
        this.isValid = true
        this.errorText = ''
        if (this.inputIcon === 'icon-people') {
          this.$store.dispatch('setPeopleCount', value)
        } else {
          this.$store.dispatch('setBill', value)
        }
      }
    },
    resetTrigger: function () {
      this.reset()
    },
  },
}
</script>

<style scoped>
.input-container {
  width: 100%;
}

.input {
  background-color: hsl(189, 41%, 97%);
  width: 100%;
  height: 4rem;
  border-radius: 5px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
  padding-right: 10px;
  margin-top: 0.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: right;
}

.input:focus {
  outline: none;
  border: 2px solid aqua;
}

.icon-people {
  background-image: url('../assets/icon-person.svg');
}

.icon-dollar {
  background-image: url('../assets/icon-dollar.svg');
}

.input-error {
  border: 2px solid orangered;
}

.input-valid {
  border: 0;
}

.input-label {
  font-weight: 700;
  font-size: 1.2rem;
  color: hsl(186, 14%, 43%);
}

.error-label {
  font-weight: 700;
  font-size: 1.2rem;
  color: orangered;
}

.input-labels {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
