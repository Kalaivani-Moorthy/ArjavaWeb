<script>
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  let showMore = false;
  onMount(() => {
    AOS.init({
      duration: 1000,
    });
  });
  function toggleReadMore() {
    showMore = !showMore; // Toggle content visibility
  }
</script>

<section id="about" class="py-32  bg-gray-100">
  <div class="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <h3 class="text-lg font-medium bg-green-100 text-green-600 px-4 py-2 rounded-lg inline-block">
          About Us
        </h3>
        <h2 class="text-2xl font-bold text-blue-900">
          Software and mobile product engineering services 
        </h2>
        <p class="text-gray-600">
          At Arjava, we specialize in cutting-edge software and mobile product engineering services tailored to the unique needs of businesses, educational institutions, financial organizations, healthcare providers, and government agencies. Our mission is to empower organizations by delivering cost-effective, high-quality software solutions that enhance efficiency, streamline operations, and drive productivity.
        </p>

        {#if showMore}
          <p class="text-gray-600 mt-4">
            From concept to deployment and beyond, we provide a full suite of software development services, ensuring that your solution is built using industry-best practices and proven methodologies. Whether you need a solution developed from scratch or require expert intervention at any stage of your project, we are here to deliver on time, with precision and excellence.
          </p>
        {/if}

        <button 
          on:click={toggleReadMore} 
          class="inline-flex items-center text-white bg-green-500 hover:bg-green-600 px-5 py-3 rounded-md transition mt-4"
        >
          {showMore ? "Read Less" : "Read More"}
          <i class="bi bi-arrow-right ml-2 "></i>
        </button>

      </div>

      <div class="grid md:grid-cols-2 gap-6">
        {#each [
          { icon: "bi-buildings", title: "End-to-End Software Development", text: "From initial ideation to final deployment, we guide you through every step of the development lifecycle, ensuring your vision is transformed into a high-performing digital solution." },
          { icon: "bi-clipboard-pulse", title: "Scalable & Future-Ready Engineering", text: "We build scalable, high-performance applications using modern frameworks and technologies, ensuring long-term reliability and adaptability to evolving business needs." },
          { icon: "bi-command", title: "Quality & Performance Assurance", text: "Your solution will be developed with rigorous testing standards to ensure security, efficiency, and optimal performance across all platforms." },
          { icon: "bi-graph-up-arrow", title: "Ongoing Support & Optimization", text: "We provide continuous maintenance, updates, and enhancements to keep your software running smoothly and adapted to new challenges." }
        ] as item, i}
          <div class="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300" data-aos="fade-up" data-aos-delay={(i+1) * 100}>
            <div class="group w-16 h-16 flex items-center justify-center bg-gray-100 hover:bg-green-600 rounded-full mb-4">
              <i class={item.icon + " text-2xl text-green-600 group-hover:text-white"}></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800">{item.title}</h3>
            <p class="text-gray-600">{item.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>


