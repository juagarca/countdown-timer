let duration = 0;
const play = document.querySelector('.play');

const app = () => {
  const outline = document.querySelector('.moving-outline circle');
  const outlineLength = outline.getTotalLength();
  const timeDisplay = document.querySelector('.time-display');

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  play.addEventListener(("click"), () => {
    if (duration !== 0) {
      runTimer(play, timeDisplay);
    }
  });
}

const runTimer = (play, timeDisplay) => {
  if (play.src == 'file:///Users/juagarca/code/juagarca/countdown-timer/images/play.svg') {
    play.src = './images/pause.svg';
    startTimer(timeDisplay);
  } else {
    play.src = './images/play.svg';
  }
};

const startTimer = (timeDisplay) => {
  const interval = setInterval(function () {
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      duration -= 1;
      console.log(duration);
      setTimer(timeDisplay);
      if (duration == 0) {
        stopTimer(interval);
      }
  }, 1000);
};

const stopTimer = (interval) => {
  clearInterval(interval);
  setPlayImage();
}

const setDuration = (seconds) => {
  duration = Number.parseInt(seconds, 10);;
}

const setPlayImage = () => {
  play.src = "./images/play.svg";
};

const setTimer = (timeDisplay) => {
  if (duration <= 59) {
    timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
  } else if (Math.floor(duration % 60) === 0) {
    timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}0`;
  } else {
    timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
  }
};

const buttons = document.querySelectorAll('.time-select button');
buttons.forEach((button) => {
 button.addEventListener(('click'), (event) => {
  setDuration(event.currentTarget.getAttribute('data-time'));
  setPlayImage();

  const timeDisplay = document.querySelector('.time-display');
  setTimer(timeDisplay);
 });
});

app();

