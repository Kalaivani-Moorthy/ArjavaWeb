<script>
    import { fade } from "svelte/transition";
  
    const features = [
      { title: "AI & ML Solutions", desc: "Advanced AI models for smart automation." },
      { title: "Cloud Computing", desc: "Scalable and secure cloud services." },
      { title: "Custom Software", desc: "Tailor-made software for your business." }
    ];
  </script>
  
  <section class="features">
    <h2 in:fade={{ duration: 800 }}>Our Expertise</h2>
    <div class="cards">
      {#each features as feature (feature.title)}
        <div class="card" in:fade={{ duration: 600 }}>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    .features {
      text-align: center;
      padding: 4rem 2rem;
      background: #f5f5f5;
    }
    .cards {
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    .card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      width: 250px;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: scale(1.05);
    }
  </style>
  