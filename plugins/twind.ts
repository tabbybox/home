import { install } from '@twind/core'
import config from '../twind.config'

// activate twind - must be called at least once

export default defineNuxtPlugin((nuxtApp) => {
  install(config)
})