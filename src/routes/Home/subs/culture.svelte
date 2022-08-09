<script>
  import MainLayout from "../../../lib/main_layout.svelte";
  import Kathak from "../../../assets/images/kathak.jpg";
  import Namaste from "../../../assets/images/namaste.jpg";
  import festival from "../../../assets/images/festivals.jpg";
  import Family from "../../../assets/images/indian family.jpg";
  import temple from "../../../assets/images/temple.jpg"
</script>

<nav>
  <MainLayout />
</nav>

<main class="m-[1rem] grid">
  <div class="h-[4rem]" />
  <div id="culture">
    <div class="text-4xl font-bold text-error">
      Unique Culture of India : Customs & Indian Traditions
    </div>
    <br />
    <div>
      Indian culture and traditions are something which has now become renowned
      all across the world. We all refer to customs and traditions of India as
      something very diverse and unique. But seldom do we give a thought to why
      things are done in certain specific ways. Indian culture is full of
      several unique customs and traditions, which outsiders might find
      intriguing. Most of these originate from the Ancient Indian scriptures and
      texts, which have dictated the way of life in India for thousands of
      years.
    </div>
    <br />
    <img
      src={Kathak}
      alt="Kathak"
      class="place-self-center rounded-2xl md:aspect-auto md:w-80  md:absolute md:right-10"
    />
    <br />
    <div class="text-error-content text-2xl font-bold">
      Here are 4 fascinating Indian Culture, Traditions and customs
    </div>
    <ul class="list-disc ml-[2rem]">
      <div class="h-[1rem]" />
      <li>Greetings</li>
      <div class="h-[1rem]" />
      <li>Religious customs</li>
      <div class="h-[1rem]" />
      <li>Festivals of India</li>
      <div class="h-[1rem]" />
      <li>Architecture</li>
      <div class="h-[1rem]" />
    </ul>
    <div>
      <div class="h-[4rem]" />
      <div class="text-success text-xl font-bold">
        1. Greetings - The Namaste
      </div>
      <div>
        The Namaste is one of the most popular Indian customs and isn't just
        restricted to the Indian territory anymore. You have Barack Obama, who
        has been seen doing it on various occasions, or you had Ban Ki-Moon, the
        UN Secretary-General, greeting everyone with a namaste at the Times
        Square in New York on the first International Yoga Da
      </div>
      <br />
      <div class="md:grid md:grid-cols-5 md:gap-[1rem]">
        <img
          src={Namaste}
          alt="Kathak"
          class="place-self-center rounded-2xl md:aspect-auto md:w-80 md:col-span-2 md:col-start-4"
        />
        <div class="col-span-3 col-start-1 row-start-1">
          <div class="font-semibold">But, what's the significance?</div>
          <div>
            The Namaste, or namaskar, or 'namaskar' is one of the five forms of
            traditional greetings mentioned in the ancient Hindu scriptures, the
            Vedas. It translates to 'I bow to you', and greeting one another
            with it is a way of saying 'May our minds meet', indicated by the
            folded palms placed before the chest. The word Namaha can also be
            translated as 'na ma' (not mine), to signify the reductions of one's
            ego in the presence of the other.
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="h-[4rem]" />
      <div class="text-success text-xl font-bold">
        2. Festivals & Religion - Always a Festive Season
      </div>
      <div class="md:grid md:grid-cols-5 md:gap-[1rem]">
        <img
          src={festival}
          alt="Kathak"
          class="place-self-center rounded-2xl md:aspect-auto md:w-80 md:col-span-2 md:col-start-4"
        />
        <div class="col-span-3 col-start-1 row-start-1">
          India also sees a large number of festivals, mainly because of the
          prevalence of diverse religions and groups. The Muslims celebrate Eid,
          the Christians have Christmas and good Friday, the Sikhs have Baisakhi
          (harvesting of crop), and the birthdays of their Gurus and the Hindus
          have Diwali, Holi, Makar Sakranti, the Jains have Mahavir Jayanti, the
          Buddhists celebrate the Buddha's birthday on Buddha Poornima, and
          quite honestly, the number is endless. All of these translate to
          holidays in our book, of course.
        </div>
      </div>
    </div>
    <div>
      <div class="h-[4rem]" />
      <div class="text-success text-xl font-bold">
        3. Family Structure - Joint Families
      </div>
      <div class="md:grid md:grid-cols-5 md:gap-[1rem]">
        <img
          src={Family}
          alt="Kathak"
          class="place-self-center rounded-2xl md:aspect-auto md:w-80 md:col-span-2 md:col-start-4"
        />
        <div class="col-span-3 col-start-1 row-start-1">
          Also, in India, there exists the concept of a joint family, wherein
          the entire family (parents, wife, children and in some cases,
          relatives) all live together. This is mostly because of the cohesive
          nature of the Indian society, and also reportedly helps in handling
          pressure and stress.
        </div>
      </div>
    </div>
    <div>
      <div class="h-[4rem]" />
      <div class="text-success text-xl font-bold">
        4. Architecture - The Science Behind Temples
      </div>
      <div class="md:grid md:grid-cols-5 md:gap-[1rem]">
        <img
          src={temple}
          alt="Kathak"
          class="place-self-center rounded-2xl md:aspect-auto md:w-80 md:col-span-2 md:col-start-4"
        />
        <div class="col-span-3 col-start-1 row-start-1">
          Most temples are located along magnetic wave lines of the Earth, which
          help in maximising the available positive energy. The copper plate
          (called Garbhagriha or Moolasthan) buried under the main idol absorbs
          and resonates this energy to its surroundings. Going to the temple
          often helps in having a positive mind and garnering positive energies,
          which in turn lead to healthier functioning. It is also a practice to
          take off footwear before entering places of worship because they would
          bring in the dirt to an otherwise cleansed and sanctified environment.
        </div>
      </div>
    </div>
  </div>
</main>
