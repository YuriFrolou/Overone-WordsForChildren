const formInput = document.querySelector(".form__input");
const form = document.querySelector(".form");
const rightMessage = document.querySelector(".right");
const formBtn = document.querySelector(".form__btn");

formBtn.disabled = true;

function preventBackspace(e) {
    let evt = e || window.event;
    if (evt) {
        let keyCode = evt.charCode || evt.keyCode;
        if (keyCode === 8 || keyCode === 46) {
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
            }
        }
    }
  }

function congratulate() {
    let audio = new Audio('../audio/applaud.mp3');
    audio.play();
    rightMessage.classList.toggle("active");
    setTimeout(function () {
        rightMessage.classList.toggle("active");
    }, 1000);
    formBtn.disabled = true;
}

function activateFormBtn() {
    formBtn.disabled = false;
    formBtn.classList.add("active");
}

function error(value) {
    formInput.value = value.substring(0, value.length - 1);
    result = "";
    let audio = new Audio('../audio/fail.mp3');
    audio.play();
    form.classList.toggle("error");
    setTimeout(function () {
        form.classList.toggle("error");
    }, 1000);

}

function checkLetter(value) {
    const letter = value[value.length - 1].toLowerCase();
    const word = words[index];

    if (indexLetter >= words[index].length - 1 && letter === word[indexLetter]) {
        formInput.disabled = true;
        return value;
    }

    if (letter === word[indexLetter]) {
        indexLetter++;
        return "";
    }
    error(value);
    return "";
}

function getQuestion(index) {
    if (index >= words.length) {
        return words[index - 1];
    }
    formInput.focus();
    return words[index];

}



