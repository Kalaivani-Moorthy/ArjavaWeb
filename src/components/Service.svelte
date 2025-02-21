<script>
    import { fly } from 'svelte/transition';
  
    const services = [
      {
        title: 'Web Development',
        description: 'We build modern, responsive, and scalable web applications.',
        icon: '💻',
      },
      {
        title: 'AI & Machine Learning',
        description: 'Leverage the power of AI to transform your business.',
        icon: '🤖',
      },
      {
        title: 'Cloud Solutions',
        description: 'Migrate to the cloud with our secure and efficient services.',
        icon: '☁️',
      },
    ];
  </script>
  
  <section class="services">
    <h2>Our Services</h2>
    <div class="cards">
      {#each services as service, index}
        <div class="card" in:fly={{ y: 50, duration: 500, delay: index * 200 }}>
          <div class="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    .services {
      padding: 2rem;
      text-align: center;
    }
  
    .cards {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 1rem;
    }
  
    .card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      width: 300px;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  
    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  </style>