<script>
    

  export let project = {
    title: "FINDABED",
    category: "Web Design",
    client: "Client Name",
    projectDate: "01 March, 2020",
    projectURL: "#",
    images: ["./images/img/gallery/findbed1.png", ],
    description: "Findabed is a cross platform application which is available in web, android and ios where it shows the various available beds in hospital nearby us to admit.It shows us oxygen beds, ICU beds, Normal beds and Corona beds available in various hospitals.It has several filters where we can make use of it to limit our search radius of hospitals, filter beds and also we can sort the hospital by name, distance, available bed count.We also have hospital phone number where we can contact them and check availabilities of bed.The data of hospitals and bed count were fetched from indian government website and it also shows when the data is last refreshed.."
  };
</script>

<div class="container mx-auto p-6">
 
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-4  img">
      
        <img src="./images/img/gallery/findbed1.png" alt="Portfolio Image" class="rounded-lg  w-full img">
      
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
<style>
  .img{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
 
  }

</style>
