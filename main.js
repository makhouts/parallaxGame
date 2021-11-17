const layer1 = document.querySelector('.layer1');
const keys = [];


window.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowLeft'){
        keys.push(event.key);
    }
    if(event.key == 'ArrowRight'){
        keys.push(event.key);
    }
});

window.addEventListener('keyup', (event) => {
    if(event.key == 'ArrowLeft') {
        let index = keys.indexOf('ArrowLeft');
        if (index !== -1) {
        keys.splice(index, 1);
        }
    };
    if(event.key == 'ArrowRight'){
        let index = keys.indexOf('ArrowRight');
        if (index !== -1) {
        keys.splice(index, 1);
        }
    }

    console.log(keys);
});