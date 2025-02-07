export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/some-non-existing-page') {
    return showError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})
