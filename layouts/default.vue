<template>
  <main class="font-title bg-lime-500 text-blue-900">
    <AnimatedPotatoes
      class="fixed inset-0 z-0 transform scale-350 md:scale-175 lg:scale-125"
      width="100vw"
      height="100vh"
    />
    <Nuxt />
    <footer
      class="fixed bottom-0 inset-x-0 mb-4 mx-4 flex flex-wrap justify-between items-center"
    >
      <p>© {{ new Date().getFullYear() }} Potatizer</p>
      <p class="pl-2 mr-auto">
        - Made with
        <a
          class="font-bold"
          target="_blank"
          rel="noreferrer noopener"
          href="https://nuxtjs.org/"
        >
          Nuxt
        </a>
      </p>
      <a
        class="pt-2 md:pt-0"
        target="_blank"
        rel="noreferrer noopener"
        href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/Dawntraoz/potatizer/tree/main"
      >
        <img
          width="252"
          height="40"
          src="https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg"
          alt="Deploy to DigitalOcean"
        />
      </a>
    </footer>
  </main>
</template>
