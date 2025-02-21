<script>
    import { onMount } from "svelte";
  
    let details = [
      {
        img: "./images/img/details-1.png",
        title: "UI/UX Design Services",
        description: "UI (User Interface) and UX (User Experience) are crucial elements in the virtual world, ensuring seamless user interaction and engagement. A well-designed UI/UX enhances accessibility and elevates business success, even in offline scenarios. It involves designing both the visual and functional aspects of a product, making it essential for both hardware and software solutions.",
        reverse: false,
        delay: 100
      },
      {
        img: "./images/img/details-2.png",
        title: "Mobile Development Services",
        description: "Arjava Technology specializes in providing cutting-edge mobile solutions for all smart devices across prevalent operating systems. With years of experience in mobile development, we focus on delivering quality-rich, innovative solutions. Our services include iPhone/iPad/iOS application development, Android application development, BlackBerry application development, Windows Phone application development, and rich mobile web application development.",
       reverse: true,
        delay: 200
      },
      {
        img: "./images/img/details-3.png",
        title: "Software Development",
        description: "Software development follows a structured process that enables programmers to create computer programs, forming the phases of the software development life cycle. A deep understanding of this method opens vast opportunities in the IT industry.",
       
        reverse: false,
        delay: 0
      },
      {
        img: "./images/img/details-4.png",
        title: "Web Application Development",
        description: "Web application development is one of the core services of Arjava, specializing in engineering and migrating unique, secure, and tailor-made web solutions with modern design and user experience. We redefine business delivery with a value-based, customer-first approach, offering a full cycle of custom web development services, including vision generation, system architecture, UI/UX design, front-end testing, cloud migration, and seamless API integration..",
        points: [
          "Generation/brainstorming of web solution vision and requirements",
          "System architecture, security, web and user experience design.",
          "Automated front-end testing, QA under the most popular platforms and browsers"
        ],
        reverse: true,
        delay: 0
      },
      {
        img: "./images/img/details-1.png",
        title: "Software Maintenance and Evolution",
        description: " With new technologies increasing the complexity of software products, continuous evolution in product maintenance is inevitable. Minimizing failures and ensuring consistent performance is crucial. CIOs often face the challenge of maintaining mission-critical applications while reducing costs. By deploying effective software maintenance services throughout a product’s lifecycle, businesses can upgrade existing products, maintain market relevance, strengthen their brand, and enhance customer retention.",
       reverse: false,
        delay: 0
      }

    ];
  
    onMount(() => {
  import("aos").then((AOS) => {
    AOS.init({ 
      once: true // Ensures animations trigger only once
    });
    
    setTimeout(() => {
      AOS.refresh(); // Refresh AOS after navigation
    }, 500);
  });
});
  </script>
<section id="details" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-left mb-12" data-aos="fade-up">
        <h2 class="text-lg text-gray-600">What We Offer  <span class="text-green-400"> _______________</span></h2>
        <p class="  font-bold text-gray-900">
        <span class="font-bold text-4xl uppercase text-blue-950">Unlock Your Business Potential</span>
        </p>
      </div>
  
      {#each details as detail, index}
        <div
          class="flex flex-col md:flex-row {detail.reverse ? 'md:flex-row-reverse' : ''} gap-8 items-center mb-12"
          data-aos={detail.reverse ? "fade-left" : "fade-right"}
          data-aos-delay={detail.delay}
        >
          <!-- Image Section (Always first in mobile view) -->
          <div class="w-full flex justify-center" data-aos="zoom-out" data-aos-delay="100">
            <img src={detail.img} class="w-full max-w-md rounded-lg" alt="Detail Image" />
          </div>
  
          <!-- Content Section -->
          <div class="w-full space-y-4 text-center md:text-left">
            <h3 class="text-3xl font-semibold text-blue-900">{detail.title}</h3>
            <p class="italic text-gray-600">{detail.description}</p>
            {#if detail.points}
              <ul class="space-y-2">
                {#each detail.points as point}
                  <li class="flex items-center justify-center md:justify-start text-gray-700">
                    <i class="bi bi-check text-green-500 mr-2"></i> {point}
                  </li>
                {/each}
              </ul>
            {/if}
            
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  