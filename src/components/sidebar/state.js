import { ref } from 'vue'
import { computed } from 'vue'

export let collapsed = ref(true)
console.log(collapsed.value)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)
export const abre = () => (collapsed.value = false)
export const cierra = () => (collapsed.value = true)
export const SIDEBAR_WIDTH = 190
export const SIDEBAR_WIDTH_COLLAPSED = 55
export let sidebarWidth = computed(
    () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)