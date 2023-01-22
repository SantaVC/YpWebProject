

let btn_to_projects = document.querySelector('#menu_to_projects');
let el_to_projects = document.querySelector('#scroll_to_projects');

let btn_to_about_us = document.querySelector('#menu_to_our_team');
let el_to_about_us = document.querySelector('#scroll_to_our_team');

btn_to_projects.addEventListener('click', function () {
    el_to_projects.scrollIntoView({behavior:"smooth", block: "start"});
});
btn_to_about_us.addEventListener('click', function () {
    el_to_about_us.scrollIntoView({behavior:"smooth", block: "start"});
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

const sectionsWithCarousel = document.querySelectorAll(
    ".section-with-carousel"
  );
  for (const section of sectionsWithCarousel) {
    let slidesPerView = [1, 2, 3];
    if (section.classList.contains("section-with-left-offset")) {
      slidesPerView = [1.5, 1.5, 2.5];
    }
    const swiper = section.querySelector(".swiper");
    new Swiper(swiper, {
      slidesPerView: slidesPerView[0],
      spaceBetween: 15,
      loop: true,
      lazyLoading: true,
      centeredSlides: true,
      keyboard: {
        enabled: true
      },
      navigation: {
        prevEl: section.querySelector(".carousel-control-left"),
        nextEl: section.querySelector(".carousel-control-right")
      },
      breakpoints: {
        768: {
          slidesPerView: slidesPerView[2]
        },
        1200: {
          slidesPerView: slidesPerView[2]
        }
      }
    });
  }