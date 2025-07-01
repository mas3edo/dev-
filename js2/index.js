let arr = ["Designer", "Developer", "Photographer", "Freelancer"];
let p = document.getElementById("switch");

let wordIndex = 0;
let letterIndex = 0;

function typeWord() {
  if (letterIndex < arr[wordIndex].length) {
    p.innerText += arr[wordIndex][letterIndex];
    letterIndex++;
    setTimeout(typeWord, 100); // سرعة كتابة الحرف
  } else {
    // بعد ما يخلص الكلمة، يستنى 2 ثانية ويبدأ كلمة جديدة
    setTimeout(() => {
      p.innerText = "";
      wordIndex = (wordIndex + 1) % arr.length;
      letterIndex = 0;
      typeWord(); // ابدأ من جديد
    }, 2000); // مدة عرض الكلمة قبل المسح
  }
}

// تشغيل أول مرة فورًا
typeWord();

// تعريف العنصر اللي عايزين نراقبه
let h = document.getElementById("h-1");
let h2 = document.getElementById("h-2");
let h3 = document.getElementById("h-3");
let h4 = document.getElementById("h-4");

// تعريف العنصر اللي عايزين نراقبه

// إعداد الـ Intersection Observer
let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // لما العنصر يبقى مرئي
        for (let a = 0; a <= 450; a++) {
          setTimeout(() => {
            h.innerHTML = a;
          }, a * 10);
        }
        for (let a = 0; a <= 25; a++) {
          setTimeout(() => {
            h2.innerHTML = a;
          }, a * 10);
        }
        for (let a = 0; a <= 550; a++) {
          setTimeout(() => {
            h3.innerHTML = a;
          }, a * 10);
        }
        for (let a = 0; a <= 48; a++) {
          setTimeout(() => {
            h4.innerHTML = a;
          }, a * 10);
        }
        // إيقاف المراقبة بعد ما يشتغل مرة واحدة
        observer.unobserve(h);
      }
    });
  },
  {
    threshold: 0.5, // يشتغل لما 50% من العنصر مرئي
  }
);

// بدء المراقبة على العنصر
observer.observe(h);
// BTN
let btn = document.getElementById("up");
let body = document.body;
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});
