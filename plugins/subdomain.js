export default defineNuxtPlugin(() => {
  addRouteMiddleware(async (to, from) => {
    if (process.client) {
      const domain = window.location.hostname;

      try {
        await useBaseFetch(`/cost/check-site`, {
          method: "POST",
          body: { domain },
        });
      } catch (e) {
        window.location.replace('https://facebook.com')
      }
    }
  })
})
