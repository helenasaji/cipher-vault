function checkAnswer() {
    const answer = document.getElementById("answer").value.toUpperCase();
    const result = document.getElementById("result");

    if (answer === "HELLO") {
        localStorage.setItem("level1Completed", "true");

        result.innerHTML = "✅ Correct! Level 2 Unlocked!";

        setTimeout(() => {
            window.location.href = "levels.html";
        }, 2000);

    } else {
        result.innerHTML = "❌ Wrong answer. Try again.";
    }
}
