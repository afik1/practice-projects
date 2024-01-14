<template>
  <div class="calculator">
    <div class="tip-input">
      <NumberInput
        :inputTitle="'Bill'"
        :inputIcon="'icon-dollar'"
        :resetTrigger="resetTrigger"
      ></NumberInput>
      <TipOptions :resetTrigger="resetTrigger"></TipOptions>
      <NumberInput
        :inputTitle="'Number of People'"
        :inputIcon="'icon-people'"
        :resetTrigger="resetTrigger"
      ></NumberInput>
    </div>
    <div class="result">
      <div class="amount-view-container">
        <AmountView :isTotal="false" :amount="tipAmount"></AmountView>
        <AmountView :isTotal="true" :amount="Total"></AmountView>
      </div>
      <button class="btn" @click="reset()">RESET</button>
    </div>
  </div>
</template>

<script>
import AmountView from '../components/AmountView.vue'
import NumberInput from '../components/NumberInput.vue'
import TipOptions from '../components/TipOptions.vue'
import { mapState } from 'vuex'

export default {
  name: 'Calculator',
  components: {
    AmountView,
    NumberInput,
    TipOptions,
  },
  data: () => {
    return {
      resetTrigger: false,
    }
  },
  methods: {
    reset() {
      this.resetTrigger = !this.resetTrigger
      this.$store.dispatch('resetFields')
    },
  },
  computed: {
    ...mapState(['peopleCount', 'bill', 'tipPercent']),
    tipAmount() {
      let tip = (this.bill * (this.tipPercent / 100)) / this.peopleCount || 0
      return (Math.round(tip * 100) / 100).toFixed(2)
    },
    Total() {
      let total = this.bill / this.peopleCount + parseFloat(this.tipAmount) || 0
      return (Math.round(total * 100) / 100).toFixed(2)
    },
  },
}
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 80rem;
  height: 40rem;
  padding: 30px;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
}

.result {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: hsl(183, 100%, 15%);
  border-radius: 1.6rem;
  padding: 3rem;
}

.tip-input {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.btn {
  padding: 0.8rem;
  color: hsl(183, 100%, 15%);
  background-color: hsl(172, 67%, 45%);
  border-radius: 0.5rem;
  border-width: 0;
  font-size: 1.6rem;
  cursor: pointer;
}

.btn:hover {
  background-color: hsl(172, 62%, 56%);
}

.amount-view-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.amount-view-container:first-child {
  margin-bottom: 10rem;
}

@media (max-width: 55em) {
  .calculator {
    grid-template-columns: 1fr;
    height: fit-content;
    width: 95%;
  }

  .tip-input {
    gap: 1.6rem;
  }
}

@media (max-height: 48em) {
  .amount-view-container:first-child {
    margin-bottom: 2rem;
  }
}
</style>
