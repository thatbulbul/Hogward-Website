
  document.getElementById("sortingQuiz").addEventListener("submit", function (e) {e.preventDefault();

    const form = new FormData(e.target);
    const answers = [...form.values()];

    const scores = {
      gryffindor: 0,
      slytherin: 0,
      ravenclaw: 0,
      hufflepuff: 0,
    };

    answers.forEach((house) => {
      scores[house]++;
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topHouse = sorted[0][0];

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = `<h3>You belong in <span class="${topHouse}">${topHouse.charAt(0).toUpperCase() + topHouse.slice(1)}!</span></h3>`;
  });

  document.querySelectorAll(".house").forEach(house => {
    house.addEventListener("click", () => {
      alert(`Welcome to ${house.querySelector("h3").innerText}!`);
    });
  });

  const spellCards = document.querySelectorAll('.spell-card');
  spellCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.boxShadow = '0 0 25px #ffffff88';
    });
    card.addEventListener('mouseout', () => {
      card.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.1)';
    });
  });

  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  let index = 0;
  const img = document.getElementById("hero-photo");

  img.addEventListener("click", () => {
    index = (index + 1) % images.length;
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[index];
      img.style.opacity = 1;
    }, 300);
  });






