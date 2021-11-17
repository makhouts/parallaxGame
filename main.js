const layer1 = document.querySelector(".layer1");
const layer2 = document.querySelector(".layer2");
const layer3 = document.querySelector(".layer3");
const layer4 = document.querySelector(".layer4");
const layer5 = document.querySelector(".layer5");
const layer6 = document.querySelector('.layer6');

const keys = [];
const tic = 10;
let x = 0;

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft" && !keys.includes("ArrowLeft")) {
    keys.push("ArrowLeft");
  }
  if (event.key == "ArrowRight" && !keys.includes("ArrowRight")) {
    keys.push("ArrowRight");
  }
  if(event.key == ' ' && !keys.includes(" ")) {
    keys.push(" ");
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key == "ArrowLeft") {
    let index = keys.indexOf(event.key);
    if (index !== -1) {
      keys.splice(index, 1);
    }
  }
  if (event.key == "ArrowRight") {
    let index = keys.indexOf(event.key);
    if (index !== -1) {
      keys.splice(index, 1);
    }
  }
  if (event.key == " ") {
    let index = keys.indexOf(event.key);
    if (index !== -1) {
      keys.splice(index, 1);
    }
  }
});

const moveBg = () => {
    if(keys.includes('ArrowLeft')) {
        x += 5;
        layer1.style.backgroundPositionX = x+'px';
        layer2.style.backgroundPositionX = -x+'px';
        layer3.style.backgroundPositionX = x + 400+'px';
        layer4.style.backgroundPositionX = 100 + x+'px';
        layer5.style.backgroundImage = 'url(./assets/narutoRunning.gif)';
        layer5.style.transform = 'scaleX(-1)';
    } else if(keys.includes('ArrowRight')) {
        x -= 5;
        layer1.style.backgroundPositionX = x+'px';
        layer3.style.backgroundPositionX = x + 400+'px';
        layer4.style.backgroundPositionX = 100 + x +'px';
        layer2.style.backgroundPositionX = (x * -1)+'px';
        layer5.style.backgroundImage = 'url(./assets/narutoRunning.gif)';
        layer5.style.transform = 'scaleX(1)';
    } else {
      layer5.style.backgroundImage = 'url(./assets/naruto.gif)';
    }
}

const shoot = () => {
    if(keys.includes(' ')) {
      layer6.style.backgroundImage = 'url(./assets/shurinken.gif)';
    }
};


const recfunc = () => {
  moveBg();
  shoot();
    setTimeout(recfunc,tic)
};

recfunc();
