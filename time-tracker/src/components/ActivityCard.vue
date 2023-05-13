<template>
  <div class="activity-container">
    <div class="background card" v-bind:class="backgroundColor">
      <img
        class="background-icon"
        :src="require('../assets/images/' + this.activity.iconName)"
        alt="icon image"
      />
    </div>
    <div class="activity-info card">
      <div class="activity-header">
        <h4 class="activity-title">{{ activity.title }}</h4>
        <ion-icon class="activity-icon" name="more"></ion-icon>
      </div>
      <div>
        <h1 class="activity-time">{{ this.currentTime }}hrs</h1>
        <h5 class="activity-reminder">
          last week - {{ this.previousTime }}hrs
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activityId: Number,
    timeFrame: String,
  },
  created() {
    this.activity = this.$store.getters.getActivityById(this.activityId);
    console.log(this.activity);
  },
  data: () => {
    return {
      activity: Object,
    };
  },
  computed: {
    currentTime: function () {
      return this.activity.timeframes[this.timeFrame].current;
    },
    previousTime: function () {
      return this.activity.timeframes[this.timeFrame].previous;
    },
    backgroundColor: function () {
      return {
        "color-work": this.activityId === 1,
        "color-play": this.activityId === 2,
        "color-study": this.activityId === 3,
        "color-exercise": this.activityId === 4,
        "color-sociel": this.activityId === 5,
        "color-selfcare": this.activityId === 6,
      };
    },
  },
};
</script>

<style scoped>
.activity-container {
  position: relative;
  z-index: 0;
  margin-top: 5rem;
}

.activity-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: hsl(235, 46%, 20%);
  padding: 3rem;
  cursor: pointer;
}

.activity-info:hover {
  background-color: hsl(236, 41%, 32%);
}

.card {
  width: 26rem;
  height: 20rem;
  border-radius: 15px;
}

.background {
  position: absolute;
  transform: translateY(-5rem);
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  padding-right: 1.5rem;
}

.background-icon {
  position: absolute;
}

.activity-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.activity-icon {
  height: 2.4rem;
  width: 2.4rem;
  color: white;
  transform: rotate(90deg);
}

.activity-title {
  font-size: 1.8rem;
  font-weight: 400;
  color: white;
}

.activity-time {
  font-size: 4.4rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 300;
}

.activity-reminder {
  font-size: 1.4rem;
  font-weight: 400;
  color: hsl(235, 45%, 61%);
}

.color-work {
  background-color: hsl(15, 100%, 70%);
}

.color-play {
  background-color: hsl(195, 74%, 62%);
}

.color-study {
  background-color: hsl(348, 100%, 68%);
}

.color-exercise {
  background-color: hsl(145, 58%, 55%);
}

.color-sociel {
  background-color: hsl(264, 64%, 52%);
}

.color-selfcare {
  background-color: hsl(43, 84%, 65%);
}
</style>
