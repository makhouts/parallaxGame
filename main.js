const layer1 = document.querySelector(".layer1");
const layer2 = document.querySelector(".layer2");
const layer3 = document.querySelector(".layer3");
const layer4 = document.querySelector(".layer4");
const layer5 = document.querySelector(".layer5");
const layer7 = document.querySelector(".layer7");
const shuringens = document.querySelector(".shuringens");
const shurinken = {
  shurinkenBg: "./assets/shurinken.gif",
  speed: 10,
};

const enemy = {
  speed: 700
}

const keys = [];
const tic = 10;
let x = 0;
let y = 1800;

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft" && !keys.includes("ArrowLeft")) {
    keys.push("ArrowLeft");
  }
  if (event.key == "ArrowRight" && !keys.includes("ArrowRight")) {
    keys.push("ArrowRight");
  }
  if (event.key == " " && !keys.includes(" ")) {
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
  if (keys.includes("ArrowLeft")) {
    shurinken.speed = Math.abs(shurinken.speed);
    x += 4;
    layer1.style.backgroundPositionX = x + "px";
    layer2.style.backgroundPositionX = -x + "px";
    layer3.style.backgroundPositionX = x + 400 + "px";
    layer4.style.backgroundPositionX = 100 + x + "px";
    layer5.style.backgroundImage = "url(./assets/narutoRunning.gif)";
    layer5.style.transform = "scaleX(-1)";
  } else if (keys.includes("ArrowRight")) {
    shurinken.speed = -1 * Math.abs(shurinken.speed);
    x -= 4;
    layer1.style.backgroundPositionX = x + "px";
    layer3.style.backgroundPositionX = x + 400 + "px";
    layer4.style.backgroundPositionX = 100 + x + "px";
    layer2.style.backgroundPositionX = x * -1 + "px";
    layer5.style.backgroundImage = "url(./assets/narutoRunning.gif)";
    layer5.style.transform = "scaleX(1)";
  } else {
    layer5.style.backgroundImage = "url(./assets/naruto.gif)";
  }
};

const shoot = () => {
  if (keys.includes(" ")) {
    const speed = shurinken.speed;
    const createShuringen = document.createElement("div");
    createShuringen.classList.add("layer6");
    shuringens.appendChild(createShuringen);
    let x = 920;
    const shootShurinken = () => {
      x -= speed;
      createShuringen.style.backgroundPositionX = x + "px";
      if (!(x > window.innerWidth)) {
        setTimeout(shootShurinken, tic);
      } else {
        shuringens.removeChild(createShuringen);
      }
      if (x < 0) {
        createShuringen.remove();
      }
    };
    shootShurinken();
  }
};

const moveEnemy = () => {
  y = y-1; 
  if(keys.includes('ArrowRight')) {
    y -= 4;
    layer7.style.backgroundPositionX = y+'px';
  } else if(keys.includes('ArrowLeft')) {
    y += 2;
    layer7.style.backgroundPositionX = y+'px';
  } else {
    layer7.style.backgroundPositionX = y+'px';
  }
};

function checkCollision(elm1, elm2) {
  var elm1Rect = elm1.getBoundingClientRect();
  var elm2Rect = elm2.getBoundingClientRect();

  return (elm1Rect.right >= elm2Rect.left &&
      elm1Rect.left <= elm2Rect.right) &&
    (elm1Rect.bottom >= elm2Rect.top &&
      elm1Rect.top <= elm2Rect.bottom);
}


const recfunc = () => {
  moveBg();
  shoot();
  moveEnemy();
  setTimeout(recfunc, tic);
};

recfunc();
