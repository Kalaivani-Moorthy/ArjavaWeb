<section id="our-works" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-gray-900">Our Works</h2>
        <p class="text-lg text-gray-600">Explore our top projects in different domains</p>
      </div>
  
      <!-- Work Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each works as work}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
            <img src={work.img} class="w-full h-48 object-cover" alt="{work.title}" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">{work.title}</h3>
              <p class="text-gray-600 mt-2">{work.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <script>
    import { onMount } from "svelte";
  
    let works = [
      {
        img: "./images/img/mobile-app.png",
        title: "Mobile App Development",
        description: "Building intuitive and scalable mobile applications for Android and iOS."
      },
      {
        img: "./images/img/website.png",
        title: "Website Development",
        description: "Crafting responsive and high-performance websites for businesses and individuals."
      },
      {
        img: "./images/img/ui-ux.png",
        title: "UI/UX Design",
        description: "Designing user-centric interfaces that enhance engagement and accessibility."
      },
      {
        img: "./images/img/web-app.png",
        title: "Web Application",
        description: "Developing full-stack web applications with cutting-edge technology."
      }
    ];
  
    onMount(() => {
      // @ts-ignore
      import("aos").then((AOS) => {
        AOS.init();
      });
    });
  </script>
  