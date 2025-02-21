<script>
    import { onMount } from "svelte";
  
    let stats = [
      { icon: "bi-emoji-smile", end: 232, text: "Happy Clients" },
      { icon: "bi-journal-richtext", end: 521, text: "Projects" },
      { icon: "bi-headset", end: 1463, text: "Hours Of Support" },
      { icon: "bi-people", end: 15, text: "Hard Workers" }
    ];
  
    let counters = stats.map(() => 0);
  
    onMount(() => {
      stats.forEach((stat, index) => {
        let start = 0;
        let end = stat.end;
        let duration = 1000; // 1 second
        let increment = Math.ceil(end / (duration / 16));
  
        let interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          counters[index] = start;
        }, 16);
      });
    });
  </script>
  
  <section id="stats" class="py-16 bg-gray-400">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {#each stats as stat, i}
          <div class="bg-white shadow-lg rounded-lg p-6 relative flex flex-col items-center">
            <div class="absolute -top-6 bg-white shadow-md rounded-full p-3 flex items-center justify-center">
              <i class={"bi " + stat.icon + " text-xl text-green-500"}></i>
            </div>
            <div class="mt-6 text-3xl font-bold text-gray-900">{counters[i]}</div>
            <p class="text-gray-600">{stat.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  