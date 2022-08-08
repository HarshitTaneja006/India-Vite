<script>
    import MainLayout from "../../../lib/main_layout.svelte";
    import IndusValley from "../../../assets/images/Indus Valley.jpg"
</script>

<nav>
    <MainLayout></MainLayout>
</nav>
<main class="m-[1rem]">
    <div class="h-[4rem]"></div>
    <div id="about">
        <div class="text-4xl font-bold text-error">About India</div>
        <br>
        <div>Home to the Indus Valley Civilization and a region of historic routes and vast empires, the Indian subcontinent was identified with its commercial and cultural wealth for
        much of its long history. Four major world religions, Hinduism, Buddhism, Jainism and Sikhism originated there,
        while Zoroastrianism, Judaism, Christianity and Islam arrived in the first millennium CE and shaped the region’s
        diverse culture. India got its independence on August 15th. 1947. It was the day when the Indians got liberated
        from the rule of the British. Agriculture is not only the dominant occupation of the people of India but is also
        one of the most important economic sectors for the country.</div>
    </div>
    <div class="h-[4rem]"></div>
    <img src={IndusValley} alt="Indus Valley Civilazations" class="place-self-center rounded-2xl md:aspect-auto md:w-80  absolute md:right-10">
    <div class="text-error-content text-2xl font-bold">Let's have a look at some of the important, general facts about India:</div>
    <ul class="list-disc ml-[2rem]">
        <div class="h-[1rem]"></div>
        <li>India achieved independence on 15 August 1947.</li><div class="h-[1rem]"></div>
        <li>The Constitution of India was adopted on 26 January 1950.</li><div class="h-[1rem]"></div>  
        <li>The Republic Day is celebrated on 26 January every year.</li> <div class="h-[1rem]"></div> 
        <li>India is the largest democracy in the world with a federal government.</li> <div class="h-[1rem]"></div>  
        <li>India has a total of 28 states and 8 union territories.</li>    <div class="h-[1rem]"></div>
        <li>The capital of India is New Delhi.</li>   <div class="h-[1rem]"></div>
        <li>A citizen of India, who is 18 years old or above, is entitled to vote.</li> <div class="h-[1rem]"></div>  
        <li>As per census 2011, the provisional population of India is 1,21,05,69,573.</li> <div class="h-[1rem]"></div>  
        <li>The ethnic groups in India, as per the 2000 report, include Indo-Aryan (72%), Dravidian (25%), Mongoloid and others (3%).</li>  <div class="h-[1rem]"></div>  
        <li>The Telephone Country Code of India is +91.</li><div class="h-[1rem]"></div>
    </ul>
</main>