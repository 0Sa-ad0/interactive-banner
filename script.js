document.addEventListener("DOMContentLoaded", function() {
    const videoBtn = document.querySelector(".video-btn");
    const overlay = document.getElementById("videoOverlay");
    const closeBtn = document.querySelector(".close-btn");
    const video = document.getElementById("adVideo");

    // Open video overlay
    videoBtn.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

    // Close video overlay
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        video.pause();
    });

    // Close overlay if user clicks outside the video
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.style.display = "none";
            video.pause();
        }
    });
});
