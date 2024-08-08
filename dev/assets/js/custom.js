const burger = document.querySelector('.hamburger');
const mobileContainer = document.querySelector('.mobile-container') 
const body = document.querySelector('body')

function toggleClass() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('is-active')
    body.classList.toggle('overflow-hidden')
    
}

burger.addEventListener('click', toggleClass)

const swiper = new Swiper('.banner-slider', {
 
    loop: true,
    spaceBetween: 20,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      enabled: false
  },

  breakpoints: {
    1025: {
      spaceBetween: 50,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  } 
});

// const cats = [
// {
//   name:"Barsik",
//   old: 3,
//   color:"red",
// }
// ]

// console.table(cats[0].name);

// const halfsection = document.querySelector('.half-section h2')
//  halfsection.innerHTML = cats[0].name

// const fileInput = document.querySelector('#product-photo');
// const fileName = document.querySelector('#file-name')

// const h2 = document.querySelector('h2')
// const titlesArray = document.querySelectorAll('h2')



// titlesArray.forEach(item => {

//   item.addEventListener('click', ()=> item.closest('.container').classList.add('bg-warning'))
// })

// fileInput.addEventListener('change', () => {
//   fileName.innerHTML = fileInput.files[0].name;
// });

const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item=>{
  item.addEventListener('change', ()=> {
     const fileName = item.closest('.control-box').querySelector('.file-name')

     fileName.innerHTML = item.files[0].name;
    })
})
// typeFile.forEach(item=>{
//   item.addEventListener('change', ()=> {
//    const fileName = item.closest('.control-box').querySelector('.file-name')

//    fileName.innerHTML = 'имя файла'
//   })

// })

const advantagesSlideLendth = document.querySelectorAll('.advantages .swiper-slide').length

const swiperAdvantages = new Swiper('#advantages', {
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
     pagination: {
      el: '.swiper-pagination',
      clickable: true,
       enabled: true,
      
     },
  breakpoints: {
    1025: {
      spaceBetween: 0,
      loop: false,
      slidesPerGroup: 8,
      simulateTouch: false,
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
    }
   }
  }
});