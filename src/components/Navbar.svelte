<script>
   import { base } from '$app/paths';
  let {active,img}=$props();
  import { onMount } from "svelte";
console.log(active);
  let isOpen = $state(false);
  let isScrolled = false;

  onMount(() => {
      window.addEventListener("scroll", () => {
          isScrolled = window.scrollY > 50;
      });
  });

  function toggleMenu() {
      isOpen = !isOpen;
  }

  function closeMenu() {
      isOpen = false;
  }
</script>

<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300
   {isScrolled ? 'backdrop-blur-md bg-blue-950/100 shadow-md' : 'bg-gray-900'}">
 <div class="container mx-auto flex items-center justify-between px-6">
   
   <!-- Logo Section -->
   <a href="index.html" class="flex items-start space-x-2">
     <img src={img? "../images/logo-ar.png": "./images/logo-ar.png"} alt="Logo" class="h-20">
   </a>

   <!-- Desktop Navigation -->
   <nav class="hidden md:flex space-x-6">
     <a href="{base}/" class=" hover:text-blue-400 font-medium {active==""? "border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400"}">Home</a>
     <a href="{base}/about" class=" hover:text-blue-400 font-medium  {active=="about"? "border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400"}">About</a>
     <a href="{base}/Services" class=" hover:text-blue-400 font-medium {active=="service"? "border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400"}">Services</a>
     <a href="{base}/Products" class=" hover:text-blue-400 font-medium {active=="Products"? "border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400"}">Products</a>
     <a href="{base}/Contacts" class=" hover:text-blue-400 font-medium {active=="Contacts"? "border-b-2 border-b-blue-300 text-white":"hover-underline-animation text-gray-400"}">Contact</a>
   </nav>

  <!-- Mobile Sidebar -->
<button class="md:hidden text-white focus:outline-none text-3xl" onclick={toggleMenu}>
  ☰
</button>
 {console.log(isOpen)}

 </div>
</header>

{#if isOpen}
   <!-- content here -->
   <div class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 {isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}" onclick={closeMenu}></div>

   <div class="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white shadow-lg z-50 transform transition-transform duration-300 
       {isOpen ? 'translate-x-0' : '-translate-x-full'}">
     <div class="p-6 flex flex-col space-y-6">
       <button class="self-end text-2xl" onclick={closeMenu}>✕</button>
   
       <a href="{base}/" class="text-lg {active==''? 'border-l-4 border-blue-300 pl-3 text-white' : 'hover:text-blue-400' } "  onclick={closeMenu}>Home</a>
       <a href="{base}/about" class="text-lg {active=='about'? 'border-l-4 border-blue-300 pl-3 text-white' : 'hover:text-blue-400'}"  onclick={closeMenu}>About</a>
       <a href="{base}/Services" class="text-lg {active=='service'? 'border-l-4 border-blue-300 pl-3 text-white' : 'hover:text-blue-400'}"  onclick={closeMenu}>Services</a>
       <a href="{base}/Products" class="text-lg {active=='Products'? 'border-l-4 border-blue-300 pl-3 text-white' : 'hover:text-blue-400'}"  onclick={closeMenu}>Products</a>
       <a href="{base}/Contacts" class="text-lg {active=='Contacts'? 'border-l-4 border-blue-300 pl-3 text-white' : 'hover:text-blue-400'}"  onclick={closeMenu}>Contact</a>
     </div>
   </div>
{/if}



<style>
  a:hover {
    color: #3b82f6 !important;
  }
.bordercol{
  border-bottom: 2px blue;
}
  /* Home page underline only */
  .hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.hover-underline-animation.left::after {
  transform-origin: bottom right;
}

.hover-underline-animation.left:hover::after {
  transform-origin: bottom left;
}

.hover-underline-animation.center::after {
  transform-origin: bottom center;
}

.hover-underline-animation.center:hover::after {
  transform-origin: bottom center;
}

.hover-underline-animation.right::after {
  transform-origin: bottom left;
}

.hover-underline-animation.right:hover::after {
  transform-origin: bottom right;
}

</style>
