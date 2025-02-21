<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

 

let showFirstText = true;
// @ts-ignore
import AOS from "aos";
  import "aos/dist/aos.css";
onMount(() => {
    setInterval(() => {
      showFirstText = !showFirstText;
    }, 4000); // Switch text every 3 seconds
  });
  onMount(() => {
    AOS.init({
      duration: 1000,
    });
  });
  let show = false;
  onMount(() => {
    show = true; // Set show to true when component is mounted
  });
</script>



<section id="hero" class="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-white pt-45">

  <div class="absolute inset-0 bg-black bg-opacity-40"></div>

  <div class="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center  mb-12">
    <div class="w-full lg:w-1/3 order-last lg:order-last " transition:fade data-aos="zoom-out" data-aos-delay="100">
      <img src="./images/img/hero-bgs1.png" class="w-full  mx-auto animate-slow-bounce" alt="Hero Image" />
    </div>

    <div class="w-full lg:w-2/3 text-center lg:text-left space-y-4 animated-text">
      <div class="relative text-center lg:text-left space-y-4">
        {#if showFirstText}
          <h1 class="text-4xl md:text-5xl font-bold title fade-out">
            Full Stack IT Solutions with  
            <br> <span class="text-blue-700 border-b-4 border-blue-500">Arjava Technologies</span>
          </h1>
          <p class="text-lg text-gray-300 subtitle fade-out">
            Software & mobile solutions for business, education, finance, healthcare, and government.
          </p>
        {:else}
          <h1 class="text-2xl text-gray-300  subtitle slide-in">
            At Arjava, we develop software and mobile product engineering services for businesses, 
            educational and financial institutions, healthcare, and government organizations 
            to help them achieve their valued objectives and targets.
          </h1>
        {/if}
      </div>
    </div>
  </div>
   <!-- Waves -->
   <svg class="absolute bottom-0 left-0 w-full h-16" viewBox="0 24 150 28" preserveAspectRatio="none">
    <defs>
      <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
    </defs>
    <g class="wave1">
      <use xlink:href="#wave-path" class="animate-wave" x="50" y="3" fill="white" opacity="0.6"></use>
    </g>
    <g class="wave2">
      <use xlink:href="#wave-path" class="animate-wave" x="50" y="0" fill="white" opacity="0.4"></use>
    </g>
    <g class="wave3">
      <use xlink:href="#wave-path" class="animate-wave" x="50" y="9" fill="white"></use>
    </g>
  </svg>
</section>

<style>


.wave1 use {
  animation: move-forever1 10s linear infinite;
  animation-delay: -2s;
 
  opacity: 0.6;
}

 .wave2 use {
  animation: move-forever2 8s linear infinite;
  animation-delay: -2s;

  opacity: 0.4;
}

 .wave3 use {
  animation: move-forever3 6s linear infinite;
  animation-delay: -2s;
  
}
@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}
 @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes slideIn {
    0% { opacity: 0; transform: translateX(-50px); }
    100% { opacity: 1; transform: translateX(0); }
  }

  .fade-out {
    animation: fadeOut 1s ease-in-out forwards;
  }

  .slide-in {
    animation: slideIn 1.5s ease-out forwards;
  }



.animated-text {
  animation: fadeInOut 8s infinite;
}
  @keyframes wave {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100px); }
    }
    .animate-wave {
      animation: wave 20s linear infinite;
    }
  @keyframes slow-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  .animate-slow-bounce {
    animation: slow-bounce 3s ease-in-out infinite;
  }
  /* Keyframe Animation */
  @keyframes fadeUp {
    0% { 
      opacity: 0; 
      transform: translateY(10px); 
    }
    100% { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  .fade-up {
    animation: fadeUp 1s ease-in-out forwards;
  }

  /* Staggered Animation */
  .title {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    opacity: 0;
    animation: fadeUp 1s ease-in-out forwards;
  }

  .subtitle {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    opacity: 0;
    animation: fadeUp 1s ease-in-out forwards;
    animation-delay: 0.5s; /* Delay to appear after Arjava */
  }
</style>