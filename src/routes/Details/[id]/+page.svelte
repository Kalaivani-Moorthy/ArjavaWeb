<script>
// @ts-nocheck

  
  import { page } from '$app/state';
    import Footer from '../../../components/Footer.svelte';
    import Navbar from '../../../components/Navbar.svelte';
    let projects = [
      {
        id:1 ,
        title: "FINDABED",
    category: "Web Design",
    client: "Client Name",
    projectDate: "01 March, 2020",
    projectURL: "#",
    images: ["./images/img/gallery/findbed1.png"],
    description: "Findabed is a cross platform application which is available in web, android and ios where it shows the various available beds in hospital nearby us to admit.It shows us oxygen beds, ICU beds, Normal beds and Corona beds available in various hospitals.It has several filters where we can make use of it to limit our search radius of hospitals, filter beds and also we can sort the hospital by name, distance, available bed count.We also have hospital phone number where we can contact them and check availabilities of bed.The data of hospitals and bed count were fetched from indian government website and it also shows when the data is last refreshed.."

      },
      {
         id:2 ,
        images: "./images/img/hope3-1.png", 
        title: "Hope3 Foundation", 
        description: "Hope3 Foundation, built with Svelte 5, empowers communities through education, healthcare, and social initiatives, showcasing projects, impact stories, and donation opportunities",
         category: "web" 
        },
        { 
            id:3 ,
            images: "./images/img/gallery/sehatuka.png",
             title: " SEHATUKA", 
             description: "Sehatuka is a Medicare app for Android and iOS, providing health reminders and storing medical records.This app is useful for anyone who needs to be taken care by means of notifications of medical checkups, medicine takeup, doctor appointments and some other.We also can able to store important information like emergency contacts, surgeries taken and prescription where we can make use of it for the further checkups.", 
             category: "product" 
            
        },
        { id:4 ,
            images: "./images/img/gallery/sangam1.png", 
          title: "Branding 2", description: "Lorem ipsum, dolor sit", category: "web" 
        
        },
      { id:5 ,
        images: "./images/img/gallery/shorting.png",
         title: "Sorting Analysis", 
         description: "Sorting Analysis is a web app that visualizes sorting algorithms, compares performance, and displays graphs, code, and complexity analysis.", 
         category: "app" 
        },
        {
    id: 6,
    images: "./images/img/gallery/grit.png",
    title: "GRIT IAM Solution",
    description: "Empowering Secure & Seamless Identity Management. We built GRIT IAM Solution, a powerful Identity and Access Management (IAM) system, using React to provide seamless authentication, robust security, and user-friendly access control. Our Contribution: 🔹 Developed a Scalable Frontend – Built with React for a fast, responsive, and intuitive user experience. 🔹 Implemented Secure Authentication – Integrated OAuth, OpenID Connect, and Single Sign-On (SSO). 🔹 Designed a User-Friendly Dashboard – Easy management of users, roles, and access permissions. 🔹 Optimized Performance & Integration – Seamlessly connects with third-party services and enterprise systems. Delivering Security & Efficiency: Our work on GRIT IAM ensures businesses can secure user identities, manage access control efficiently, and comply with modern security standards—all with a sleek, React-powered interface. 🚀 Explore the power of GRIT IAM and see how we bring security to the next level!",
    category: "product"
}


      
    ];
  
    // Get the project ID from the URL
    let projectId = page.params.id;
    
    // Find the project with the matching ID
    // @ts-ignore
    let project = projects.find(p => p.id == projectId);
  </script>
  
  {#if project}
  <Navbar active="Products"></Navbar>
  <div class="container mx-auto p-6 mt-32">
 
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-4  img">
        
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img src={project.images} alt="Portfolio Image" class="rounded-lg  w-full img">
        
      </div>
      <div >
        <div class="border-l-5 border-l-emerald-500">
          <div class="p-3">
            <h2 class="text-3xl font-bold text-blue-900 mb-4 ">{project.title}</h2>
            <ul class="text-gray-700 space-y-2">
              <li><strong>Category:</strong> {project.category}</li>
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Project date:</strong> {project.projectDate}</li>
              <li><strong>Project URL:</strong> <a href={project.projectURL} class="text-blue-500 hover:underline">{project.projectURL}</a></li>
            </ul>
          </div>
          
        </div>
       
        <p class="mt-4 text-gray-700">{project.description}</p>
      </div>
    </div>
  </div>
  <Footer></Footer>
  <style>
    .img{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   
    }
  
  </style>
  {:else}
    <p>Project not found.</p>
  {/if}
  