const watchBox = document.getElementById("box2");
const sideBtn = document.getElementById("onoff");
const lockScreen = document.getElementById("lock-screen");
const lockIcon = document.getElementById("lock-icon");
const unlockText = document.getElementById("unlock-text");
const body = document.body;
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
 document.getElementById("item_1").addEventListener("click",function(){
        document.getElementById("item_1").style.cursor="grabbing";
    })
    document.getElementById("item_2").addEventListener("click",function(){
        document.getElementById("item_2").style.cursor="grabbing";
    })
    document.getElementById("item_3").addEventListener("click",function(){
        document.getElementById("item_3").style.cursor="grabbing";
    })
    document.getElementById("item_4").addEventListener("click",function(){
        document.getElementById("item_4").style.cursor="grabbing";
    })
    document.getElementById("item_5").addEventListener("click",function(){
        document.getElementById("item_5").style.cursor="grabbing";
    })
    document.getElementById("item_6").addEventListener("click",function(){
        document.getElementById("item_6").style.cursor="grabbing";
    })
    document.getElementById("item_7").addEventListener("click",function(){
        document.getElementById("item_7").style.cursor="grabbing";
    })
    document.getElementById("item_8").addEventListener("click",function(){
        document.getElementById("item_8").style.cursor="grabbing";
    })
    document.getElementById("item_9").addEventListener("click",function(){
        document.getElementById("item_9").style.cursor="grabbing";
    })
sideBtn.addEventListener("click", () => {
  if (watchBox.classList.contains("watch-off")) {
    watchBox.classList.remove("watch-off");
    watchBox.classList.add("watch-locked");
    lockIcon.textContent = "🔒";
    unlockText.textContent = "Swipe right to unlock →";
  } else {
    watchBox.className = "watch-off";
    body.classList.remove("watch-active");
  }
});
let startX = 0;
let isSwiping = false;
const handleStart = (e) => {
  if (!watchBox.classList.contains("watch-locked")) return;
  if (e.type === "mousedown") e.preventDefault();
  startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  isSwiping = true;
};
const handleMove = (e) => {
  if (!isSwiping) return;
  const currentX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  const diffX = currentX - startX;

  if (diffX > 25) {
    isSwiping = false;
    unlockWatch();
  }
};
const handleEnd = () => {
  isSwiping = false;
};
function unlockWatch() {
  lockIcon.textContent = "🔓";

  setTimeout(() => {
    watchBox.classList.remove("watch-locked");
    watchBox.classList.add("watch-unlocked");
    body.classList.add("watch-active");
  }, 250);
}
lockScreen.addEventListener("mousedown", handleStart);
window.addEventListener("mousemove", handleMove);
window.addEventListener("mouseup", handleEnd);
lockScreen.addEventListener("touchstart", handleStart, { passive: true });
window.addEventListener("touchmove", handleMove, { passive: true });
window.addEventListener("touchend", handleEnd);
document.querySelectorAll('.characters img, .realistic img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
      });
    });
lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
window.addEventListener("load", function(){
  document.getElementById("preloader").style.display="none";
})