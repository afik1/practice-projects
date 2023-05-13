import { createStore } from "vuex";

export default createStore({
  state: {
    activities: [
      {
        id: 1,
        title: "Work",
        iconName: "icon-work.svg",
        timeframes: {
          daily: {
            current: 5,
            previous: 7,
          },
          weekly: {
            current: 32,
            previous: 36,
          },
          monthly: {
            current: 103,
            previous: 128,
          },
        },
      },
      {
        id: 2,
        title: "Play",
        iconName: "icon-play.svg",
        timeframes: {
          daily: {
            current: 1,
            previous: 2,
          },
          weekly: {
            current: 10,
            previous: 8,
          },
          monthly: {
            current: 23,
            previous: 29,
          },
        },
      },
      {
        id: 3,
        title: "Study",
        iconName: "icon-study.svg",
        timeframes: {
          daily: {
            current: 0,
            previous: 1,
          },
          weekly: {
            current: 4,
            previous: 7,
          },
          monthly: {
            current: 13,
            previous: 19,
          },
        },
      },
      {
        id: 4,
        title: "Exercise",
        iconName: "icon-exercise.svg",
        timeframes: {
          daily: {
            current: 1,
            previous: 1,
          },
          weekly: {
            current: 4,
            previous: 5,
          },
          monthly: {
            current: 11,
            previous: 18,
          },
        },
      },
      {
        id: 5,
        title: "Social",
        iconName: "icon-social.svg",
        timeframes: {
          daily: {
            current: 1,
            previous: 3,
          },
          weekly: {
            current: 5,
            previous: 10,
          },
          monthly: {
            current: 21,
            previous: 23,
          },
        },
      },
      {
        id: 6,
        title: "Self Care",
        iconName: "icon-self-care.svg",
        timeframes: {
          daily: {
            current: 0,
            previous: 1,
          },
          weekly: {
            current: 2,
            previous: 2,
          },
          monthly: {
            current: 7,
            previous: 11,
          },
        },
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getActivityById: (state) => (id) => {
      return state.activities.find((activity) => activity.id === id);
    },
  },
});
