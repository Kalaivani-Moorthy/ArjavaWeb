<script>
  import { base } from "$app/paths";
  const contactInfo = {
      company: "Arjava Technologies",
      address: " 19, Ganesh Nagar Main Road, Selaiyur, Chennai - 600073.",
      phone: "044-35675035",
      email: "arjavatech@gmail.com"
  };

  const usefulLinks = ["Home", "about", "Services", "Terms of service", "Privacy policy"];
  const services = ["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"];

  const socialLinks = [
      { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
      { name: "Twitter", icon: "fab fa-x-twitter", url: "#" },
      { name: "Instagram", icon: "fab fa-instagram", url: "#" },
      { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" }
  ];
</script>

<footer class="bg-black text-white py-10">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div>
          <h3 class="text-xl font-bold mb-3 uppercase">{contactInfo.company}<br ><a class="text-green-400">___________</a></h3>
          <p>{contactInfo.address}</p>
          <p><strong>Phone:</strong> {contactInfo.phone}</p>
          <p><strong>Email:</strong> <a href="mailto:{contactInfo.email}" class="text-blue-400">{contactInfo.email}</a></p>
          <div class="flex space-x-4 mt-3 social">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f icon"></i>    </a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter icon"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
              <li>
                <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
            </ul>
          </div>
      </div>

      <!-- Useful Links -->
      <div>
          <h3 class="text-lg font-semibold mb-3 uppercase ">Useful Links<br ><a class="text-green-400">___________</a></h3>
      
          <ul class="space-y-2">
            <li><a href="{base}/" class="hover:text-blue-400">Home</a></li>
            <li><a href="{base}/about" class="hover:text-blue-400">AboutUs</a></li>
            <li><a href="{base}/Services" class="hover:text-blue-400">Services</a></li>
            <li><a href="{base}/Products" class="hover:text-blue-400">Products</a></li>
           
            <li><a href="/" class="hover:text-blue-400">Terms of service</a></li>
            
          </ul>
      </div>

      <!-- Our Services -->
      <div>
          <h3 class="text-lg font-semibold mb-3 uppercase">Our Services<br ><a class="text-green-400">___________</a></h3>
          <ul class="space-y-2">
              {#each services as service}
                  <li><a href="#" class="hover:text-blue-400">{service}</a></li>
              {/each}
          </ul>
      </div>

      <!-- Newsletter -->
      <div>
          <h3 class="text-lg font-semibold mb-3 uppercase">Our Newsletter<br ><a class="text-green-400">___________</a></h3>
          <p class="text-sm mb-3">Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <div class="flex">
              <input type="email" placeholder="Your email" class="px-3 py-2 w-full bg-gray-800 border border-gray-700 text-white focus:outline-none">
              <button class="bg-green-500 px-4 py-2 text-white font-semibold hover:bg-green-600">Subscribe</button>
          </div>
      </div>
  </div>

  <!-- Copyright -->
  <div class="text-center mt-6 text-sm border-t border-gray-700 pt-4">
      &copy; {new Date().getFullYear()} <strong>{contactInfo.company}</strong> All Rights Reserved
      <br />
   
  </div>
</footer>

<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
  .social {
  padding-top: 30px;
  display: flex;
  justify-content: left; /* Center horizontally */
}

.social ul {
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 0;
}

.social ul li {
  list-style: none;
}

.social ul li a {
  width: 40px;
  height: 40px;
  background-color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

.social ul li a .icon {
  font-size: 16px;
  position: relative;
  color: #262626;
  transition: .5s;
  z-index: 3;
}

.social ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

.social ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: .5s;
  z-index: 2;
}

.social ul li a:hover:before {
  top: 0;
}

.social ul li:nth-child(1) a:before {
  background: #3b5999;
}

.social ul li:nth-child(2) a:before {
  background: #55acee;
}

.social ul li:nth-child(3) a:before {
  background: #0077b5;
}

.social ul li:nth-child(4) a:before {
  background: #dd4b39;
}

</style>
