const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000
    },
    speed: 2000,
    breakpoints: {
      0:{
        slidesPerView: 1,
        spaceBetween: 5
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1240: {
        slidesPerView: "auto",
        spaceBetween: 30
      }

    }
});
const swiper2 = new Swiper('.swiper-2', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3000
  },
  speed: 2000,
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 5
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1240: {
      slidesPerView: "auto",
      spaceBetween: 30
    }

  }
});
const lis = document.querySelectorAll('.arrivals .menu ul li')
lis.forEach((li, i) =>{
  li.addEventListener('click', ()=>{
    if(lis[i] === li){
      lis.forEach(el =>{
        el.classList.remove('active')
      })
      li.classList.add('active');
    }
  })
})
const as = document.querySelectorAll('a')
as.forEach(a =>{
  a.addEventListener('click', (e)=>{
    e.preventDefault()
  })
})
