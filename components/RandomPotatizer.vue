<template>
  <article
    class="w-panel max-h-full max-w-full z-20 p-4 md:p-6 bg-white border-4 border-lime-200 shadow-lg rounded-lg"
  >
    <header>
      <h1 class="font-bold text-xl md:text-2xl text-center uppercase">
        {{ title }}
      </h1>
    </header>
    <figure class="flex flex-col items-center py-3 md:py-6">
      <img
        :src="require(`~/assets${moodSelected.src || randomMood.src}`)"
        :alt="`Your potato mood for today is ${
          moodSelected.name || randomMood.name
        }`"
        class="h-32 md:h-52"
        height="208"
        width="160"
      />
    </figure>
    <footer class="text-center">
      <button v-if="!moodSelected.src" class="button" @click="generateMood">
        Potative
      </button>
      <div v-else class="flex flex-col items-center">
        <button class="button" @click="resetMood">Reset</button>
        <SharedNetworks :mood="moodSelected.name" />
      </div>
      <p class="text-blue-900 z-10 pt-2 md:pt-4">
        Design & Develop by
        <a
          href="https://www.dawntraoz.com"
          target="_blank"
          rel="noreferrer noopener"
          class="font-bold underline"
        >
          Dawntraoz
        </a>
      </p>
    </footer>
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: 'Generate your potato mood for today',
      moodSelected: {},
      moods: [
        {
          name: 'Laugh 🤣🥔',
          src: '/moods/laugh.svg',
        },
        {
          name: 'Angry 😡🥔',
          src: '/moods/angry.svg',
        },
        {
          name: 'Cry 😫🥔',
          src: '/moods/cry.svg',
        },
        {
          name: 'Eing 😕🥔',
          src: '/moods/eing.svg',
        },
        {
          name: 'Love 😍🥔',
          src: '/moods/love.svg',
        },
        {
          name: 'Mask 😷🥔',
          src: '/moods/mask.svg',
        },
        {
          name: 'Sick 🤢🥔',
          src: '/moods/sick.svg',
        },
        {
          name: 'Sleep 😴🥔',
          src: '/moods/sleep.svg',
        },
        {
          name: 'Thug 😎🥔',
          src: '/moods/thug.svg',
        },
        {
          name: 'Antenna 📡🥔',
          src: '/moods/antenna.svg',
        },
        {
          name: 'Unicorn 🦄🥔',
          src: '/moods/unicorn.svg',
        },
      ],
      randomMood: {
        name: 'Laugh 🤣🥔',
        src: '/moods/laugh.svg',
      },
    }
  },
  mounted() {
    this.generateRandomMood()
  },
  methods: {
    generateMood() {
      this.moodSelected = this.randomMood
    },
    resetMood() {
      this.moodSelected = {}
      this.generateRandomMood()
    },
    generateRandomMood() {
      if (Object.keys(this.moodSelected).length === 0) {
        setTimeout(() => {
          const index = Math.floor(Math.random() * this.moods.length)
          this.randomMood = this.moods[index]
          this.generateRandomMood()
        }, 100)
      }
    },
  },
}
</script>
