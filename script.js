function checkPassword() {

    const input = document.getElementById("passwordInput").value.trim();
    const error = document.getElementById("error");

    if (input === "30042026") {

        const container = document.getElementById("heartBurst");
        container.innerHTML = "";

        for (let i = 0; i < 18; i++) {

            const heart = document.createElement("div");
            heart.className = "burstHeart";
            heart.innerHTML = "❤️";

            heart.style.setProperty("--x", (Math.random() * 500 - 250) + "px");
            heart.style.setProperty("--y", (Math.random() * 500 - 250) + "px");

            container.appendChild(heart);

            setTimeout(() => heart.remove(), 1400);
        }

        setTimeout(() => {
            document.getElementById("passwordScreen").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
            
            const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;
        music.play().catch(error => {
            console.log("Music couldn't autoplay:", error);
        });
    }
        }, 1200);

    } else {
        error.textContent = "Wrong password. Try again ❤️";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startBtn");
    const nextBtn = document.getElementById("nextBtn");
    const passwordInput = document.getElementById("passwordInput");

    if (startBtn) {
        startBtn.onclick = () => {
            document.getElementById("mainContent").style.display = "none";
            document.getElementById("letterPage").style.display = "block";
        };
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            document.getElementById("letterPage").style.display = "none";
            document.getElementById("galleryPage").style.display = "block";

            const cards = document.querySelectorAll(".photo-card");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            }, {
                threshold: 0.25
            });

            cards.forEach(card => observer.observe(card));
        };
    }

    if (passwordInput) {
        passwordInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                checkPassword();
            }
        });
    }
const smileBtn = document.getElementById("smileBtn");

if (smileBtn) {
    smileBtn.onclick = () => {
        document.getElementById("galleryPage").style.display = "none";
        document.getElementById("finalPage").style.display = "block";
    };
}
const restartBtn = document.getElementById("restartBtn");
if (restartBtn) {
    restartBtn.onclick = () => {
        document.getElementById("finalPage").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    };
}
});