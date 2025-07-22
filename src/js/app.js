// Testimonial Data
const testimonials = [
    
    {
        name: "Warren Burrows",
         location: "2023-07-18",
        rating: 4.5,
        comment: "Me and my family had our travel vaccines and yellow fever vaccines here at this muswell hill travel clinic.",
        image: "./images/search.png"
    },
    {
        name: "Carolyn Branco",
        location: "2023-09-05",
        rating: 5.0,
        comment: "Very helpful at getting hard to find prescriptions and working with our gp on recurring ones for the family.",
        image: "./images/search.png"
    },
    {
        name: "Laura White",
        location: "2023-07-18",
        rating: 4.8,
        comment: 'Travel vaccine service was very efficient. I can recommend it. I use it in a very efficient way and did it',
         image: "./images/search.png"
    },
    {
        name: "Michael Moore",
        location: "2023-07-08",
        rating: 4.7,
        comment: 'Had my travel vaccines, great service, will recommend but not too much efficient way i expexted it',
        image: "./images/search.png"
    },
];

// Initialize Swiper
const swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make pagination clickable
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    }

});


// Direction toggle logic (forward to backward and repeat)
let forward = true;
setInterval(() => {
  if (forward) {
    swiper.slideNext();
  } else {
    swiper.slidePrev();
  }
  forward = !forward;
}, 2000); // Every 2 seconds, toggle direction


// Generate testimonial slides
function generateTestimonials() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `

            <div class="p-8 border-1 bg-white border-gray-200 rounded-lg gap-2  transition-all h-60 w-90">
                <div class="flex items-center justify-between mb-8 ">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-5 h-5 rounded-full">
                        <div>
                            <h4 class="font-medium text-lg text-black">${testimonial.name}</h4>
                            <p class="text-[#8A8A8A]">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="./images/star.png" alt="star" class="w-4 h-4">
                    </div>

                </div>
                <p class="text-black">"${testimonial.comment}"</p>

                <a href="#more-info" class="text-[#8A8A8A] font-semibold hover:underline mt-2 inline-block
                absolute left-1/2 transform -translate-x-1/2">
                    <p class=" text-center"> Read More....</p>
               </a>

            </div>


        `;
        
        swiperWrapper.appendChild(slide);
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', generateTestimonials);






