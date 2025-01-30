document.addEventListener("DOMContentLoaded", function () {
  const videoBtn = document.querySelector(".video-btn");
  const overlay = document.getElementById("videoOverlay");
  const closeBtn = document.querySelector(".close-btn");
  const video = document.getElementById("adVideo");

  videoBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    video.pause();
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      video.pause();
    }
  });
});
