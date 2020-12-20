<template>
  <div
    class="w-panel max-w-full z-20 p-4 md:p-6 bg-white border-4 border-lime-200 shadow-lg rounded-lg"
  >
    <header>
      <h1 class="font-bold text-xl md:text-2xl text-center uppercase">
        {{ title }}
      </h1>
    </header>
    <figure class="flex flex-col items-center py-6">
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
      <button v-if="moodSelected.src" class="button" @click="resetMood">
        Reset
      </button>
      <p class="text-blue-900 z-10 pt-4">
        Design & Develop by
        <a
          href="https://www.dawntraoz.com"
          target="_blank"
          class="font-bold underline"
        >
          Dawntraoz
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Generate your potato mood for today',
      moodSelected: {},
      moods: [
        {
          name: 'laugh',
          src: '/moods/laugh.svg',
        },
        {
          name: 'angry',
          src: '/moods/angry.svg',
        },
        {
          name: 'cry',
          src: '/moods/cry.svg',
        },
        {
          name: 'eing',
          src: '/moods/eing.svg',
        },
        {
          name: 'love',
          src: '/moods/love.svg',
        },
        {
          name: 'mask',
          src: '/moods/mask.svg',
        },
        {
          name: 'sick',
          src: '/moods/sick.svg',
        },
        {
          name: 'sleep',
          src: '/moods/sleep.svg',
        },
        {
          name: 'thug',
          src: '/moods/thug.svg',
        },
      ],
      randomMood: {
        name: 'laugh',
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
          const index = Math.floor(Math.random() * (this.moods.length - 1))
          this.randomMood = this.moods[index]
          this.generateRandomMood()
        }, 100)
      }
    },
  },
}
</script>
