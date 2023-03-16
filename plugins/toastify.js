import * as vt from "vue-toastification"

const toastOptions = {
  hideProgressBar: true,
  timeout: 5000,
  toastClassName: 'text-gray-50 flex items-center p-4 mb-4 rounded-lg shadow',
  bodyClassName: 'leading-normal',
  toastDefaults: {
    [vt.TYPE.ERROR]: {
      toastClassName: 'bg-red-600'
    },
    [vt.TYPE.SUCCESS]: {
      toastClassName: 'bg-green-600'
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default, toastOptions)
  return {
    provide: {
      toast: vt.useToast()
    }
  }
})
