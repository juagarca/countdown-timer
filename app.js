const app = () => {
  const outline = document.querySelector('.moving-outline circle');
  const outlineLength = outline.getTotalLength();

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  let duration = 100;

  const play = document.querySelector('.play');
  play.addEventListener(("click"), () => {
    // checkPlaying(song);
  });
}

const buttons = document.querySelectorAll('.time-select button');
buttons.forEach((button) => {
 button.addEventListener(('click'), (event) => {
  duration = event.currentTarget.getAttribute('data-time');

  const timeDisplay = document.querySelector('.time-display');
  if (duration > 59) {
    timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}0`;
  } else {
    timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
  }
 });
});


// const checkPlaying = (song) => {
//   if(song.paused) {
//     play.src = './images/pause.svg'
//   } else {
//     play.src = './images/play.svg'
//   }
// }

app();
