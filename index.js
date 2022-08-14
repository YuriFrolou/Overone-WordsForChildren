const workspaceTask = document.querySelector(".workspace__task");
const workspaceResults = document.querySelector(".workspace__results");
const winnerShow = document.querySelector(".winner");

workspaceTask.innerHTML = "Напиши слово <span>" + getQuestion(0) + "</span>";

formInput.addEventListener("input", (event) => {
    event.preventDefault();
    formBtn.disabled = true;
    const value = event.target.value;
    result = checkLetter(value);
    if (result.toLowerCase() === words[index]) {
        activateFormBtn();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formBtn.disabled = true;
    if (countQuestions >= words.length - 1) {
        winnerShow.classList.add("active");
        let audio = new Audio('../audio/victory.mp3');
        audio.play();
        audio.loop = true;

    }
    if (result.toLowerCase() === words[index]) {
        congratulate();
        formBtn.disabled = true;
    }

    form.reset();
    formInput.disabled = false;
    indexLetter = 0;
    result = "";
    workspaceTask.innerHTML = "Напиши слово <span>" + getQuestion(++index) + "</span>";
    countQuestions++;
    formBtn.classList.remove("active");

});

