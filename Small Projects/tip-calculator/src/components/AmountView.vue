<template>
  <div class="amount-display">
    <div>
      <h2 v-if="isTotal" class="text-amount">Total</h2>
      <h2 v-else class="text-amount">Tip amount</h2>
      <h3 class="text-person">/ person</h3>
    </div>
    <h1 class="text-result">${{ amount }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    isTotal: Boolean,
    amount: Number,
  },
}
</script>

<style scoped>
.amount-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text-amount {
  color: hsl(185, 41%, 84%);
  font-size: 1.2rem;
}

.text-person {
  color: hsl(186, 14%, 43%);
  font-size: 1rem;
  margin-top: 5px;
}

.text-result {
  color: hsl(172, 67%, 45%);
  font-size: 3.2rem;
}

@media (max-width: 25em) {
  .text-result {
    font-size: 2rem;
  }
}
</style>
