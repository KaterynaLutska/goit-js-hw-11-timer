import refs from "./refs.js";
const { days, hours, min, secs } = refs;

class CountdownTimer {
  constructor(date, obj) {
    this.date = date;
    this.refs = obj;
    console.log(this.refs.days);
  }
  count() {
    let date = this.updateClockface(this.date - Date.now());

    this.refs.days.textContent = date.days;
    this.refs.hours.textContent = date.hours;
    this.refs.mins.textContent = date.mins;
    this.refs.secs.textContent = date.secs;
  }
  start() {
    setInterval(() => {
      this.count();
    }, 1000);
  }
  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

let day = new Date("Dec 31, 2020");
const timer = new CountdownTimer(day, refs);

const timer = new CountdownTimer({
  targetDate: new Date("Dec 31, 2020"),
  selector: "#timer-1",
});

timer.start();

// function updateClockface(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { days, hours, mins, secs };
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

// == без класу ===

// const timer = {
//   start() {
//     const startTime = new Date("Dec 31, 2020");
//     setInterval(() => {
//       const currenTime = Date.now();
//       const deltaTime = startTime - currenTime;
//       updateClockface(deltaTime);
//     }, 1000);
//   },

//   stop() {},
// };

// timer.start();

// function updateClockface(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;

//   console.log(`${days}:${hours}:${mins}:${secs}`);
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }
