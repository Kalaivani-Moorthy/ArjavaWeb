<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
  
    let portfolioItems = [
      { img: "./images/img/gallery/findbed1.png", title: "App 1", description: "Lorem ipsum, dolor sit", category: "filter-app" },
      { img: "./images/img/hope3-1.png", title: "Branding 1", description: "Lorem ipsum, dolor sit", category: "filter-branding" },
      { img: "./images/img/gallery/sehatuka.png", title: "Product 2", description: "Lorem ipsum, dolor sit", category: "filter-product" },
      { img: "./images/img/gallery/sangam1.png", title: "Branding 2", description: "Lorem ipsum, dolor sit", category: "filter-branding" },
      { img: "./images/img/gallery/shorting.png", title: "App 3", description: "Lorem ipsum, dolor sit", category: "filter-app" },
      { img: "./images/img/gallery/grit.png", title: "Product 3", description: "Lorem ipsum, dolor sit", category: "filter-product" },
    ];
  
    let activeFilter = "*";
  
    onMount(() => {
      import("aos").then((AOS) => {
        AOS.init();
      });
    });
  </script>
  
  <section id="portfolio" class="portfolio section py-12 flex flex-col items-center justify-center text-center">
    <div class="text-center mb-12" data-aos="fade-up">
      <h2 class="text-lg text-gray-600 top-8">Our Work, Our Passion</h2>
      <h1 class="text-green-400"> _______________</h1>
      <p class="font-bold text-gray-900">
        <span class="font-bold text-4xl uppercase text-blue-950 py-9">Discover the projects that define our expertise.</span>
      </p>
    </div>
  
    <!-- Portfolio Filters -->
    <ul class="portfolio-filters flex justify-center space-x-4 gap-2" data-aos="fade-up" data-aos-delay="200">
      <li class={`cursor-pointer ${activeFilter === "*" ? "filter-active" : ""}`} on:click={() => activeFilter = "*"}>All</li>
      <li class={`cursor-pointer ${activeFilter === "filter-app" ? "filter-active" : ""}`} on:click={() => activeFilter = "filter-app"}>App</li>
      <li class={`cursor-pointer ${activeFilter === "filter-product" ? "filter-active" : ""}`} on:click={() => activeFilter = "filter-product"}>Card</li>
      <li class={`cursor-pointer ${activeFilter === "filter-branding" ? "filter-active" : ""}`} on:click={() => activeFilter = "filter-branding"}>Web</li>
    </ul>
  
    <!-- Portfolio Grid -->
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {#each portfolioItems.filter(item => activeFilter === "*" || item.category === activeFilter) as item}
          <div class="portfolio-card" in:fly={{ y: 20, duration: 300 }} out:fly={{ y: -20, duration: 200 }}>
            <div class="card">
              <img src={item.img} alt={item.title} class="card-image" />
              <div class="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .portfolio-card {
      position: relative;
      cursor: pointer;
      width: 100%;
      max-width: 300px;
      height: 200px;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }
  
    .portfolio-card:hover {
      transform: scale(1.05);
    }
  
    .card {
      position: relative;
      width: 100%;
      height: 100%;
    }
  
    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  
    .portfolio-card:hover .card-image {
      transform: scale(1.1);
    }
  
    .card-overlay {
      position: absolute;
      bottom: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(44, 115, 223, 0.8);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: bottom 0.5s ease;
    }
  
    .portfolio-card:hover .card-overlay {
      bottom: 0;
    }
  
    .card-overlay h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    .card-overlay p {
      font-size: 14px;
      padding: 0 10px;
    }
  </style>
  