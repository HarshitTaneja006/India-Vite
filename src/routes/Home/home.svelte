<script>
  import MainLayout from "../../lib/main_layout.svelte";
  import Title from "../../lib/Title.svelte"
  import Gateway_Of_India from "../../assets/images/Gateway Of India.jpg";
  import Namaste from "../../assets/images/namaste.jpg"
  import Taj_Mahal from "../../assets/images/Taj Mahal.jpg";
  import Varanasi from "../../assets/images/Varanasi.jpg";
</script>

<nav class="sticky top-0">
  <MainLayout />
</nav>

<main class="m-[1rem]">
  <div class="h-[4rem]"></div>
  <Title></Title>
  <div class="h-[3rem]"></div>
  <div class="grid md:grid-cols-4 gap-[2rem] w-full">
    <img class="w-full place-self-center rounded-2xl" src={Gateway_Of_India} alt="Gateway of India" />
    <img class="hidden md:block place-self-center rounded-2xl" src={Namaste} alt="India Gate" />
    <img class="hidden md:block place-self-center rounded-2xl" src={Taj_Mahal} alt="Taj Mahal" />
    <img class="hidden md:block place-self-center rounded-2xl" src={Varanasi} alt="Varanasi" />
  </div> 
  <div class="h-[3rem]"></div>
</main>
