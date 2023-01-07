let videos = document.querySelectorAll(".fa-brands.fa-youtube");
let articles = document.querySelectorAll(".article");

for (const video of videos) {
  video.addEventListener("click", () => {
    window.open("https://www.youtube.com/");
  });
}

for (const article of articles) {
  article.addEventListener("click", () => {
    window.open("https://habr.com/ru/all/");
  });
}
