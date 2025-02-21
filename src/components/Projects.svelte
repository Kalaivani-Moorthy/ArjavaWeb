<script>

     import { onMount } from "svelte";
     import { goto } from "$app/navigation";
   


// @ts-ignore
let projects = [
    { id: 1, title: "Project One", description: "This is the first project." },
    { id: 2, title: "Project Two", description: "This is the second project." },
  ];

  // @ts-ignore
  function viewProject(id) {
    goto(`/item/${id}`);
  }

    let portfolioItems = [
      { id:1 , img: "./images/img/gallery/findbed1.png", title: "FINDABED", description: "Findabed is a cross-platform app that helps locate and filter available hospital beds with real-time data.", category: "app" },

      { id:2 ,img: "./images/img/hope3-1.png", title: "Hope3 Foundation", description: "Hope3 Foundation, built with Svelte 5, empowers communities through education, healthcare, and social initiatives, showcasing projects, impact stories, and donation opportunities", category: "web" },

      { id:3 ,img: "./images/img/gallery/sehatuka.png", title: " SEHATUKA", description: "Sehatuka is a Medicare app for Android and iOS, providing health reminders and storing medical records.", category: "product" },
      { id:4 ,img: "./images/img/gallery/sangam1.png", title: "sangam chettinad", description: "Lorem ipsum, dolor sit", category: "web" },
      { id:5 ,img: "./images/img/gallery/shorting.png", title: "Sorting Analysis", description: "Sorting Analysis is a web app that visualizes sorting algorithms, compares performance, and displays graphs, code, and complexity analysis.", category: "app" },
      { id:6 ,img: "./images/img/gallery/grit.png", title: "Grit IAM solution", description: "Lorem ipsum, dolor sit", category: "product" },
   
    ];
    onMount(() => {
    
      import("aos").then((AOS) => {
        AOS.init();
      });
    });
    let activeFilter = "*";
</script>

<section id="portfolio" class="portfolio section py-12 flex flex-col items-center justify-center text-center">
 
    <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-lg text-gray-600  top-8">Our Work, Our Passion  </h2>
        <h1 class="text-green-400"> _______________</h1>
        <p class="  font-bold text-gray-900">
        <span class="font-bold text-4xl uppercase text-blue-950 py-9">Discover the projects that define our expertise.</span>

        </p>
      </div>

    <div class="container">
      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
        <!-- Portfolio Filters -->
        <ul class="portfolio-filters isotope-filters flex justify-center space-x-4 gap-2" data-aos="fade-up" data-aos-delay="200">
        
       
          <li class={`cursor-pointer ${activeFilter === "*" ? "filter-active" : ""}`} on:click={() => activeFilter = "*"}>All</li>
       
          <li class={`cursor-pointer ${activeFilter === "app" ? "filter-active" : ""}`} on:click={() => activeFilter = "app"}>App</li>
          <li class={`cursor-pointer ${activeFilter === "product" ? "filter-active" : ""}`} on:click={() => activeFilter = "product"}>Website</li>
          <li class={`cursor-pointer ${activeFilter === "web" ? "filter-active" : ""}`} on:click={() => activeFilter = "web"}>WebApp</li>
        </ul><!-- End Portfolio Filters -->

        <div class="row gy-4  isotope-container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" >
          {#each portfolioItems.filter(item => activeFilter === "*" || item.category === activeFilter) as item}
            <div class="col rounded-lg port portfolio-item isotope-item {item.category}" >
              <div class="card">
                <img src={item.img} class="img-fluid card-image" alt={item.title}>  
                <div class="portfolio-info card-overlay">
                  <h4 class="uppercase">{item.title}</h4>
                  <p>{item.description}</p>
                  <button 
                  on:click={() => window.location.href = `/Details/${item.id}`}
                  class="inline-flex items-center  text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md transition mt-4"
                >
                 ReadMore
                  <i class="bi bi-arrow-right ml-2 "></i>
                </button>
                </div>
              </div>
             
             
            </div><!-- End Portfolio Item -->
          {/each}
        </div><!-- End Portfolio Container -->
      </div>
    </div>
</section>

  
<style>
    :root {
  --default-font: "Roboto",  system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Raleway",  sans-serif;
  --nav-font: "Nunito",  sans-serif;
}

/* Global Colors - The following color variables are used throughout the website. Updating them here will change the color scheme of the entire website */
:root { 
  --background-color: #ffffff; /* Background color for the entire website, including individual sections */
  --default-color: #444444; /* Default color used for the majority of the text content across the entire website */
  --heading-color: #111111; /* Color for headings, subheadings and title throughout the website */
  --accent-color: #1bbd36; /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
  --surface-color: #ffffff; /* The surface color is used as a background of boxed elements within sections, such as cards, icon boxes, or other elements that require a visual separation from the global background. */
  --contrast-color: #ffffff; /* Contrast color for text, ensuring readability against backgrounds of accent, heading, or default colors. */
}

/* Nav Menu Colors - The following color variables are used specifically for the navigation menu. They are separate from the global colors to allow for more customization options */
:root {
  --nav-color: #444444;  /* The default color of the main navmenu links */
  --nav-hover-color: #1bbd36; /* Applied to main navmenu links when they are hovered over or active */
  --nav-mobile-background-color: #ffffff; /* Used as the background color for mobile navigation menu */
  --nav-dropdown-background-color: #ffffff; /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
  --nav-dropdown-color: #444444; /* Used for navigation links of the dropdown items in the navigation menu. */
  --nav-dropdown-hover-color: #1bbd36; /* Similar to --nav-hover-color, this color is applied to dropdown navigation links when they are hovered over. */
}

/* Color Presets - These classes override global colors when applied to any section or element, providing reuse of the sam color scheme. */

.light-background {
  --background-color: #f7f7f7;
  --surface-color: #ffffff;
}

.dark-background {
  --background-color: #060606;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #252525;
  --contrast-color: #ffffff;
}

.accent-background {
  --background-color: #1bbd36;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --accent-color: #ffffff;
  --surface-color: #2ae149;
  --contrast-color: #ffffff;
}
.port:hover {
  transform: scale(1.05);
            /* transform: translateY(20px); */
        }
        .port:hover::before {
            opacity: 1;
        }

.port{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.port:hover .card-image {
      transform: scale(1.1);
    }
.port::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            background: rgba(0, 6, 54, 0.6);
            backdrop-filter: blur(8px);
            z-index: 2;
            transition: 0.5s;
            opacity: 0;
        }

        .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }      
   
h2
{
  color: var(--heading-color);
  font-family: var(--heading-font);
}
    .portfolio .portfolio-filters {
  padding: 0;
  margin: 0 auto 20px auto;
  list-style: none;
  text-align: center;
}

.portfolio .portfolio-filters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 20px 10px 20px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  font-family: var(--heading-font);
}

.portfolio .portfolio-filters li:hover,
.portfolio .portfolio-filters li.filter-active {
    
  color: var(--contrast-color);
  background-color: var(--accent-color);
}

.portfolio .portfolio-filters li:first-child {
  margin-left: 0;
}

.portfolio .portfolio-filters li:last-child {
  margin-right: 0;
}

@media (max-width: 575px) {
  .portfolio .portfolio-filters li {
    font-size: 14px;
    margin: 0 0 10px 0;
  }
}

.portfolio .portfolio-item {
  position: relative;
  overflow: hidden;
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: -50%;
  text-align: left;
  z-index: 3;
  transition: all ease-in-out 0.5s;
  
 color: #f7f7f7;
  padding: 15px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 30px;
  font-weight: 600;
  padding-right: 50px;
}

.portfolio .portfolio-item .portfolio-info p {
  color: rgba(255, 255, 255, 0.685);
  font-size: 14px;
  margin-bottom: 0;
  padding-right: 50px;
}

.portfolio .portfolio-item .portfolio-info .preview-link,
.portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 50px;
  font-size: 24px;
  top: calc(50% - 14px);
  color: white;
  transition: 0.3s;
  line-height: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: var(--accent-color);
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 14px;
  font-size: 28px;
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
  bottom: 0;
}
</style>