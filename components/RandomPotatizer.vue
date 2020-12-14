<template>
  <div
    class="w-panel max-w-full z-20 p-6 bg-white border-4 border-lime-200 shadow-lg rounded-lg"
  >
    <header>
      <h1 class="font-bold text-2xl text-center uppercase">
        {{ title }}
      </h1>
    </header>
    <figure class="flex flex-col items-center py-6">
      <img
        width="125"
        :src="moodSelected.src || randomMood.src"
        :alt="`Your potato mood for today is ${
          moodSelected.name || randomMood.name
        }`"
      />
    </figure>
    <footer class="text-center">
      <button
        class="bg-blue-900 rounded-md text-white py-2 px-4 uppercase font-medium"
        @click="generateMood"
      >
        Potative
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Generate your potato mood for today',
      moodSelected: {},
      randomMood: {},
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
    }
  },
  mounted() {
    while (!this.moodSelected) {
      setTimeout(() => {
        const index = Math.random(0, this.moods.length - 1)
        this.randomMood = this.moods[index]
      }, 3000)
    }
  },
  methods: {
    generateMood() {
      this.moodSelected = {
        name: 'love',
        src: '/moods/love.svg',
      }
    },
  },
}
</script>
