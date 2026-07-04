function checkAnswer() {
    const answer = document.getElementById("answer").value.toUpperCase();
    const result = document.getElementById("result");

    if (answer === "HELLO") {
        localStorage.setItem("level1Completed", "true");

        result.innerHTML = "✅ Correct! Level 2 Unlocked!";
        const achievement = document.getElementById("achievement");
achievement.classList.add("show");

setTimeout(() => {
    achievement.classList.remove("show");
}, 3000);

        setTimeout(() => {
            window.location.href = "levels.html";
        }, 3500);

    } else {
        result.innerHTML = "❌ Wrong answer. Try again.";
    }
}
