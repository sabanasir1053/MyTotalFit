function goTo(id) {
    const target = document.getElementById(id);

    if (!target) return;

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    target.classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("returnToGender") === "true") {
        sessionStorage.removeItem("returnToGender");
        goTo("s4");
        return;
    }

    goTo("s1");

    setTimeout(() => {
        goTo("s2");
    }, 2000);
});

function pick(gender) {
    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("selected");
    });

    const selected = document.getElementById(gender);

    if (selected) {
        selected.classList.add("selected");
    }

    sessionStorage.setItem("returnToGender", "true");

    setTimeout(() => {
        location.href = gender === "male" ? "male.html" : "female.html";
    }, 300);
}

function pickGoal(cardId, nextScreen) {
    document.querySelectorAll(".goal-card").forEach(card => {
        card.classList.remove("selected");
    });

    const selected = document.getElementById(cardId);

    if (selected) {
        selected.classList.add("selected");
    }

    setTimeout(() => {
        goTo(nextScreen);
    }, 300);
}

function goBackToGender() {
    sessionStorage.setItem("returnToGender", "true");
    location.href = "index.html";
}
window.addEventListener("DOMContentLoaded", () => {

    if (sessionStorage.getItem("returnToGender") === "true") {
        sessionStorage.removeItem("returnToGender");
        goTo("s4");
        return;
    }

    if (document.getElementById("s1")?.classList.contains("active")) {
        setTimeout(() => {
            goTo("s2");
        }, 2000);
    }

});