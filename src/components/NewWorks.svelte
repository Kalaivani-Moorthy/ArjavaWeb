<script>
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { Pagination, Autoplay } from 'swiper/modules';
  
    let swiper;
  
    onMount(() => {
  new Swiper('.testimonials-swiper', {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: { delay: 5000 },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});
  
    const testimonials = [
      {
        name: 'Saul Goodman',
        role: 'CEO & Founder',
        img: './images/arlogo3.png',
        text: 'Proin iaculis purus consequat sem cure digni ssim donec...',
      },
      {
        name: 'Sara Wilsson',
        role: 'Designer',
        img: './images/arlogo3.png',
        text: 'Export tempor illum tamen malis malis eram quae irure...',
      },
      {
        name: 'Jena Karlis',
        role: 'Store Owner',
        img: './images/arlogo3.png',
        text: 'Enim nisi quem export duis labore cillum quae magna enim...',
      },
      {
        name: 'Matt Brandon',
        role: 'Freelancer',
        img: './images/arlogo3.png',
        text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa...',
      },
      {
        name: 'John Larson',
        role: 'Entrepreneur',
        img: './images/arlogo3.png',
        text: 'Quis quorum aliqua sint quem legam fore sunt eram irure...',
      },
    ];
  </script>
  
  <section id="testimonials" class="bg-blue-950 text-white py-12 relative">
    <img src="./images/testimonials-bg.jpg" class="absolute inset-0 w-full h-full object-cover opacity-10" alt="" />
    <div class="container mx-auto px-6 relative" data-aos="fade-up" data-aos-delay="100">
      <div class="testimonials-swiper">
        <div class="swiper-wrapper">
          {#each testimonials as testimonial}
            <div class=" swiper-slide " style="display: flex; justify-content: center; align-items: center;">
              <div class=" p-6 rounded-lg shadow-lg max-w-md text-center">
                <img src={testimonial.img} class="w-20 h-20 mx-auto rounded-full border-2 border-gray-700 mb-4" alt={testimonial.name} />
                <h3 class="text-lg font-semibold">{testimonial.name}</h3>
                <h4 class="text-sm text-gray-400">{testimonial.role}</h4>
                <div class="flex justify-center mt-2 text-yellow-400">
                  {#each Array(5) as _}
                    <i class="bi bi-star-fill"></i>
                  {/each}
                </div>
                <p class="mt-4 text-gray-300 italic">“{testimonial.text}”</p>
              </div>
            </div>
          {/each}
        </div>
        <div class="swiper-pagination mt-4"></div>
      </div>
    </div>
  </section>
  

  