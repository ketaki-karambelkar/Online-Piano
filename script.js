const whiteKeys = document.querySelectorAll('.white');
const blackKeys = document.querySelectorAll('.black');

// to show or hide keys
keysCheckbox = document.querySelector('.keys-checkbox input');
const showHideKeys = (e) => {
    whiteKeys.forEach(key => key.classList.toggle("hide"));
    blackKeys.forEach(key => key.classList.toggle("hide"));
}
keysCheckbox.addEventListener('click',showHideKeys);

// on off button to enable and disable mouse or keyboard input
const Casio = document.querySelectorAll('.casio');
onOff = document.querySelector('.on-off input');
const enableCasio = () => {
    Casio.forEach(key => {
        key.classList.toggle("disabled")
        if (key.className == "casio")
            document.addEventListener('keydown',pressedKey);
        else
            document.removeEventListener('keydown',pressedKey)
    });
        
}
onOff.addEventListener('click',enableCasio);

// to play using mouse click or mouseenter
whiteKeys.forEach((white,index) => {
    white.addEventListener('click', () => {
        playWhite(index)
    });
});

blackKeys.forEach((black,index) => {
    black.addEventListener('click', () => {
        playBlack(index)
    });
});

// to play using keyboard keys
let audio = new Audio(`./white keys/0.mp3`);
const playBlack = (key) => {
    audio.src = `./black keys/${key}.mp3`;
    audio.play();
    const clickedKey = document.querySelector(`[value="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}
const playWhite = (key) => {
    audio.src = `./white keys/${key}.mp3`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}
const pressedKey = (e) => {
    if(e.code=='Digit1')
    {
        playBlack(3)
    }
    if(e.code=='Digit2')
    {
        playBlack(4)
    }
    if(e.code=='Digit4')
    {
        playBlack(5)
    }
    if(e.code=='Digit5')
    {
        playBlack(6)
    }
    if(e.code=='Digit7')
    {
        playBlack(7)
    }
    if(e.code=='Digit8')
    {
        playBlack(8)
    }
    if(e.code=='Digit9')
    {
        playBlack(9)
    }
    if(e.key=='-')
    {
        playBlack(10)
    }
    if(e.key=='=')
    {
        playBlack(11)
    }
    if(e.key=='Backspace')
    {
        playBlack(12)
    }
    if(e.key=='/')
    {
        playBlack(13)
    }
    if(e.key=='*')
    {
        playBlack(14)
    }

    if(e.key=='Tab')
    {
        playWhite(4)
    }
    if(e.key=='q')
    {
        playWhite(5)
    }
    if(e.key=='w')
    {
        playWhite(6)
    }
    if(e.key=='e')
    {
        playWhite(7)
    }
    if(e.key=='r')
    {
        playWhite(8)
    }
    if(e.key=='t')
    {
        playWhite(9)
    }
    if(e.key=='y')
    {
        playWhite(10)
    }
    if(e.key=='u')
    {
        playWhite(11)
    }
    if(e.key=='i')
    {
        playWhite(12)
    }
    if(e.key=='o')
    {
        playWhite(13)
    }
    if(e.key=='p')
    {
        playWhite(14)
    }
    if(e.key=='[')
    {
        playWhite(15)
    }
    if(e.key==']')
    {
        playWhite(16)
    }
    if(e.code=='Numpad7')
    {
        playWhite(17)
    }
    if(e.code=='Numpad8')
    {
        playWhite(18)
    }
    if(e.code=='Numpad9')
    {
        playWhite(19)
    }
    if(e.key=='+')
    {
        playWhite(20)
    }
}

// for volume control
const pianoKeys = document.querySelectorAll('.key');
const volumeSlider = document.querySelector('.volume-slider input');

const handleVolume = (e) => {
    audio.volume = e.target.value;
}
volumeSlider.addEventListener('input',handleVolume);
