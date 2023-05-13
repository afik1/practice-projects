import { createStore } from 'vuex'

export default createStore({
  state: {
    peopleCount: Number,
    bill: Number,
    tipPercent: Number,
  },
  mutations: {
    SET_PEOPLE_COUNT(state, peopleCount) {
      state.peopleCount = peopleCount
    },
    SET_BILL(state, bill) {
      state.bill = bill
    },
    SET_TIP_PERCENT(state, tipPercent) {
      state.tipPercent = tipPercent
    },
  },
  actions: {
    setPeopleCount(context, peopleCount) {
      context.commit('SET_PEOPLE_COUNT', parseFloat(peopleCount))
    },
    setBill(context, bill) {
      context.commit('SET_BILL', parseFloat(bill))
    },
    setTipPercent(context, tipPercent) {
      context.commit('SET_TIP_PERCENT', parseFloat(tipPercent))
    },
    resetFields(context) {
      context.commit('SET_PEOPLE_COUNT', 0)
      context.commit('SET_BILL', 0)
      context.commit('SET_TIP_PERCENT', 0)
    },
  },
})
