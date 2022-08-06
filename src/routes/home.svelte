<script>
  import MainLayout from "../lib/main_layout.svelte";
  import Gateway_Of_India from "../assets/images/Gateway Of India.jpg";
  import India_Gate from "../assets/images/India Gate.jpg";
  import Taj_Mahal from "../assets/images/Taj Mahal.jpg";
  import Varanasi from "../assets/images/Varanasi.jpg";
</script>

<main>
  <MainLayout />
  <div class="h-[3rem]"></div>
  <div class="grid grid-cols-4 gap-x-[2.75rem]">
    <img src={Gateway_Of_India} alt="Gateway of India" />
    <img src={India_Gate} alt="India Gate" />
    <img src={Taj_Mahal} alt="Taj Mahal" />
    <img src={Varanasi} alt="Varanasi" />
  </div>
</main>
