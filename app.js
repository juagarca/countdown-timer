let duration = 0;
let interval;
const play = document.querySelector('.play');

const app = () => {
  const outline = setWhiteCircle();
  const timeDisplay = document.querySelector('.time-display');

  play.addEventListener(("click"), () => {
    if (duration !== 0) {
      runTimer(play, timeDisplay, outline);
    }
  });
}

const runTimer = (play, timeDisplay, outlineLength, outline) => {
  if (play.src == 'file:///Users/juagarca/code/juagarca/countdown-timer/images/play.svg') {
    play.src = './images/pause.svg';
    startTimer(timeDisplay, outlineLength, outline);
  } else {
    play.src = './images/play.svg';
    stopTimer();
  }
};

const startTimer = (timeDisplay, outline) => {
  let outlineLength = outline.getTotalLength();
  const part = outlineLength / duration;
  let progress = 0;

  interval = setInterval(function () {
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      duration -= 1;
      setTimer(timeDisplay);
      outlineLength -= part;

      // outlineLength -= outlineLength / timer;
      outline.style.strokeDashoffset = outlineLength;

      if (duration == 0) {
        stopTimer();
        setWhiteCircle();
      }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
  setPlayImage();
}

const setDuration = (seconds) => {
  duration = Number.parseInt(seconds, 10);;
}

const setPlayImage = () => {
  play.src = "./images/play.svg";
};

const setWhiteCircle = () => {
  const outline = document.querySelector('.moving-outline circle');
  const outlineLength = outline.getTotalLength();
  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;
  return outline;
}

const setTimer = (timeDisplay) => {
  if (Math.floor(duration % 60) < 10) {
    timeDisplay.textContent = `${Math.floor(duration / 60)}:0${Math.floor(duration % 60)}`;
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
  stopTimer();
  setWhiteCircle();

  const timeDisplay = document.querySelector('.time-display');
  setTimer(timeDisplay);
 });
});

app();

