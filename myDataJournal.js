const weekData = [
  {
    day: "Monday",
    sleepHours: 7,
    screenTime: 4,
    mood: "relaxed",
    caffeineIntake: 1,
    focusLevel: 5,
  },
  {
    day: "Tuesday",
    sleepHours: 7,
    screenTime: 7,
    mood: "relaxed",
    caffeineIntake: 0,
    focusLevel: 4,
  },
  {
    day: "Wednesday",
    sleepHours: 7,
    screenTime: 7,
    mood: "normal",
    caffeineIntake: 0,
    focusLevel: 4,
  },
  {
    day: "Thursday",
    sleepHours: 7,
    screenTime: 7,
    mood: "stressed",
    caffeineIntake: 1,
    focusLevel: 8,
  },
  {
    day: "Friday",
    sleepHours: 7,
    screenTime: 5,
    mood: "stressed",
    caffeineIntake: 1,
    focusLevel: 8,
  },
  {
    day: "Saturday",
    sleepHours: 7,
    screenTime: 8,
    mood: "stressed",
    caffeineIntake: 1,
    focusLevel: 8,
  },
  {
    day: "Sunday",
    sleepHours: 7,
    screenTime: 9,
    mood: "stressed",
    caffeineIntake: 1,
    focusLevel: 10,
  },
];

//Predictions:
/*
- Sunday has the most screen time
- Best focus day is Sunday
- More caffeine does help a little bit 
*/

function findHighestScreenTime(data) {
  let maxTime = 0;
  for (let entry of data) {
    if (entry.screenTime > maxTime) {
      maxTime = entry.screenTime;
    }
  }
}

function averageSleep(data) {
  let totalSleep = 0;
  for (let entry of data) {
    totalSleep += entry.sleepHours;
  }
  return totalSleep / 7;
}

function mostFrequentMood(data) {
  const moodCounts = {};
  for (let entry of data) {
    if (!moodCounts[entry.mood]) {
      moodCounts[entry.mood] = 1;
    } else {
      moodCounts[entry.mood]++;
    }
  }
  let maxMood = null;
  let maxCount = 0;
  for (let mood in moodCounts) {
    if (moodCounts[mood] > maxCount) {
      maxMood = mood;
      maxCount = mookCounts[mood];
    }
  }
  return maxMood;
}
