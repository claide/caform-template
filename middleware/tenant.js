export default defineNuxtRouteMiddleware(async () => {
  const domain = window.location.hostname;

  try {
    await useBaseFetch(`/cost/check-site`, {
      method: "POST",
      body: { domain },
    });
  } catch (e) {
    window.location.replace('https://costapplicationform.com')
  }
})
