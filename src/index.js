import './scss/main.scss'

let intervalHandler;
let intervalRunning = false;

let i = 0;
let rotateValue1 = 90;
let rotateValue2 = -90;

const intervalDelay = 2000;
const topFace = [
  '1px 6px 6px 1px',
  '1px 1px 6px 6px',
  '6px 1px 1px 6px',
  '6px 6px 1px 1px'
];
const side1 = ['1px 6px 6px 1px', '1px 1px 6px 6px', '1px', '1px'];
const side2 = ['1px', '1px', '1px 1px 6px 6px', '1px 6px 6px 1px'];
const side3 = ['1px 6px 6px 1px', '1px', '1px', '1px 1px 6px 6px'];
const side4 = ['1px', '1px 6px 6px 1px', '1px 1px 6px 6px', '1px'];
function webpackAnimation() {
  intervalRunning = true;

  document.querySelector('.cube1').style.transform =
    `rotateY(${rotateValue1}deg)`;
  if (i > 3) {
    i = 0;
  }

  document.querySelector('.cube1 .face_top').style.borderWidth = topFace[i];
  document.querySelector('.cube1 .face_side_1').style.borderWidth = side1[i];
  document.querySelector('.cube1 .face_side_2').style.borderWidth = side2[i];
  document.querySelector('.cube1 .face_side_3').style.borderWidth = side3[i];
  document.querySelector('.cube1 .face_side_4').style.borderWidth = side4[i];

  rotateValue1 += 90;
  i+=1;

  document.querySelector('.cube2').style.transform =
    `translate(-50%, -50%) scale3d(0.5, 0.5, 0.5) rotateY(${
    rotateValue2
    }deg)`;

  rotateValue2 -= 90;
}

let hidden; let visibilityChange;
if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
  hidden = 'mozHidden';
  visibilityChange = 'mozvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

function handleVisibilityChange() {
  if (document[hidden]) {
    clearInterval(intervalHandler);
    intervalRunning = false;
  } else {
    clearInterval(intervalHandler);
    if (!intervalRunning)
      intervalHandler = setInterval(webpackAnimation, intervalDelay);
  }
}

if (
  typeof document.addEventListener === 'undefined' ||
  typeof document[hidden] === 'undefined'
) {
  alert(
    'This demo requires a modern browser that supports the Page Visibility API.'
  );
} else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

document.querySelector('body').onload = function () {
  webpackAnimation();
  intervalHandler = setInterval(webpackAnimation, intervalDelay);
};

