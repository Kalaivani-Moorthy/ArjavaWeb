<script>
    let loading = false;
  
    // @ts-ignore
    const handleSubmit = async (event) => {
      event.preventDefault();
      loading = true;
  
      // Simulate form submission (Replace with actual API request)
      setTimeout(() => {
        loading = false;
        alert("Your message has been sent. Thank you!");
      }, 2000);
    };
  </script>
  
  <section id="contact" class="py-16">
    <!-- Google Map -->
    <div class="mb-5">
      <iframe 
        class="w-full h-96" 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    </div>
  
    <!-- Contact Section -->
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
  
        <!-- Contact Info -->
        <div class="bg-gray-100 p-6 shadow-md rounded-lg cont">
          <h3 class="text-xl font-semibold mb-4">Get in touch</h3>
          <p class="text-gray-600 mb-6">Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>
  
          <div class="space-y-4">
            <div class="flex items-center">
              <i class="bi bi-geo-alt text-xl text-green-600 mr-4"></i>
              <div>
                <h4 class="font-semibold">Location:</h4>
                <p class="text-gray-600">Arjava India Tech Pvt Ltd,
                    19, Ganesh Nagar Main Road,
                    Selaiyur,
                    Chennai - 600073.</p>
              </div>
            </div>
  
            <div class="flex items-center">
              <i class="bi bi-envelope text-xl text-green-600 mr-4"></i>
              <div>
                <h4 class="font-semibold">Email:</h4>
                <p class="text-gray-600">arjavatech@gmail.com</p>
              </div>
            </div>
  
            <div class="flex items-center">
              <i class="bi bi-phone text-xl text-green-600 mr-4"></i>
              <div>
                <h4 class="font-semibold">Call:</h4>
                <p class="text-gray-600">+044-35675035</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Contact Form -->
        <div class="bg-white p-6 shadow-md rounded-lg">
          <form on:submit={handleSubmit} class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" id="name" placeholder="Your Name" required
                class="border p-3 rounded w-full focus:ring focus:ring-blue-300">
              <input type="email" name="email" id="email" placeholder="Your Email" required
                class="border p-3 rounded w-full focus:ring focus:ring-blue-300">
            </div>
  
            <input type="text" name="subject" id="subject" placeholder="Subject" required
              class="border p-3 rounded w-full focus:ring focus:ring-blue-300">
  
            <textarea name="message" placeholder="Message" required
              class="border p-3 rounded w-full h-32 focus:ring focus:ring-blue-300"></textarea>
  
            <div class="text-center">
              <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded shadow-md transition hover:bg-blue-700 disabled:bg-gray-400"
                disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
  
      </div>
    </div>
  </section>
  <style>
    .cont{
        box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.2), inset 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }
  </style>