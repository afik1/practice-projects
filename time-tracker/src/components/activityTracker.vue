<template>
  <div class="container">
    <div class="user-report">
      <div class="user-details">
        <img
          class="user-hero"
          src="../assets/images/image-jeremy.png"
          alt="user image temporary"
        />
        <div>
          <span class="small-text"> Report for </span>
          <br />
          <br />
          <span class="header"> Jeremy Robson </span>
        </div>
      </div>
      <div class="timeframes">
        <div
          class="timeframe"
          :class="{ 'white-text': pressedTimeFrame['daily'] }"
          @click="setTimeFrame('daily')"
        >
          Daily
        </div>
        <div
          class="timeframe"
          :class="{ 'white-text': pressedTimeFrame['weekly'] }"
          @click="setTimeFrame('weekly')"
        >
          Weekly
        </div>
        <div
          class="timeframe"
          :class="{ 'white-text': pressedTimeFrame['monthly'] }"
          @click="setTimeFrame('monthly')"
        >
          Monthly
        </div>
      </div>
    </div>
    <ActivityCard :activityId="1" :timeFrame="timeFrame"></ActivityCard>
    <ActivityCard :activityId="2" :timeFrame="timeFrame"></ActivityCard>
    <ActivityCard :activityId="3" :timeFrame="timeFrame"></ActivityCard>
    <ActivityCard :activityId="4" :timeFrame="timeFrame"></ActivityCard>
    <ActivityCard :activityId="5" :timeFrame="timeFrame"></ActivityCard>
    <ActivityCard :activityId="6" :timeFrame="timeFrame"></ActivityCard>
  </div>
</template>

<script>
import ActivityCard from "./ActivityCard.vue";

export default {
  name: "ActivityTracker",
  components: {
    ActivityCard,
  },
  data: () => {
    return {
      timeFrame: "daily",
      pressedTimeFrame: {
        daily: true,
        Weekly: false,
        monthly: false,
      },
    };
  },
  methods: {
    setTimeFrame(timeFrame) {
      this.timeFrame = timeFrame;
      for (let key in this.pressedTimeFrame) {
        this.pressedTimeFrame[key] = false;
      }

      this.pressedTimeFrame[timeFrame] = true;
    },
  },
};
</script>

<style>
.container {
  max-width: 144rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;
  gap: 2rem;
}

.user-report {
  height: auto;
  position: relative;
  z-index: 0;
  grid-row: 1 / 5;
}

.user-details {
  position: absolute;
  width: 26rem;
  height: 35rem;
  border-radius: 15px;
  background-color: hsl(235, 45%, 61%);
  z-index: 1;
  padding: 3rem;
}

.timeframes {
  width: 26rem;
  height: 20rem;
  border-radius: 15px;
  transform: translateY(32rem);
  background-color: hsl(235, 46%, 20%);
  padding: 5rem 0 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.timeframe {
  font-size: 1.6rem;
  color: hsl(235, 45%, 61%);
  cursor: pointer;
}

.timeframe:hover {
  color: white;
}

.user-hero {
  width: 8rem;
  border-radius: 50%;
  border: 0.3rem solid white;
  margin-bottom: 4.8rem;
}

.small-text {
  font-size: 1.4rem;
  font-weight: 400;
  word-spacing: 0.2rem;
  color: white;
}

.header {
  font-size: 3.6rem;
  font-weight: 300;
  color: white;
}

.white-text {
  color: white;
}

@media (max-width: 72em) {
  .container {
    max-width: 144rem;
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    gap: 2rem;
    padding: 1rem;
  }

  .user-report {
    height: auto;
    position: relative;
    z-index: 0;
    grid-row: 1;
    margin-bottom: 32rem;
  }

  .timeframes {
    height: 10rem;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 0 2.5rem 0;
  }
}
</style>
