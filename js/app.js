const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    window.location.href = "levels.html";
});

function checkAnswer() {
    const answer = document.getElementById("answer").value.toUpperCase();
    const result = document.getElementById("result");

    if (answer === "HELLO") {
        result.innerHTML = "✅ Correct! Level Complete!";
    } else {
        result.innerHTML = "❌ Wrong answer. Try again.";
    }
}
