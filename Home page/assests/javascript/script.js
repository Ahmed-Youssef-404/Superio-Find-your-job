const swiper = new Swiper(".swiper", {
  grabCursor: true,
  initialSlide: 0, // Start from the first slide
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 14,
  loop: true, // Enables continuous looping
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  on: {
    click(e) {
      swiper.slideTo(swiper.clickedIndex); // Navigate to the clicked slide
    },
  },
});

//about

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter span");

  const animateCount = (element, start, end, duration) => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const startCounters = () => {
    counters.forEach((counter) => {
      const endValue = parseInt(counter.getAttribute("data-count"));
      animateCount(counter, 0, endValue, 2000);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
          observer.disconnect(); // Stop observing after the animation starts
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(document.querySelector(".counters"));
});


// cards

document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for Cards Section
  const cards = document.querySelectorAll(".card-wrapper");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });

  // Intersection Observer for App Promotion Section
  const appPromotionImage = document.querySelector("#app-promotion .image");
  const appPromotionTextWrapper = document.querySelector(
    "#app-promotion .text-wrapper"
  );

  const appPromotionObserverCallback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        appPromotionImage.style.opacity = 1;
        appPromotionImage.style.transform = "translateX(0)";

        appPromotionTextWrapper.style.opacity = 1;
        appPromotionTextWrapper.style.transform = "translateX(0)";
      }
    });
  };

  const appPromotionObserver = new IntersectionObserver(
    appPromotionObserverCallback,
    observerOptions
  );

  if (appPromotionImage && appPromotionTextWrapper) {
    appPromotionObserver.observe(appPromotionImage);
    appPromotionObserver.observe(appPromotionTextWrapper);
  } else {
    console.log("App Promotion elements not found.");
  }

  // Scroll to Top Button functionality
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.log("Scroll to Top Button not found.");
  }
});
