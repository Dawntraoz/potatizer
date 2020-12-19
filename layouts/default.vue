<template>
  <div class="font-title bg-lime-500 text-blue-900">
    <AnimatedPotatoes
      class="fixed inset-0 z-0 transform scale-350 md:scale-175 lg:scale-125"
      width="100vw"
      height="100vh"
    />
    <Nuxt />
    <footer>
      <a
        target="_blank"
        class="fixed bottom-0 right-0 mb-4 mr-4"
        href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/Dawntraoz/potatizer/tree/main"
      >
        <img
          src="https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg"
          alt="Deploy to DigitalOcean"
        />
      </a>
    </footer>
  </div>
</template>
