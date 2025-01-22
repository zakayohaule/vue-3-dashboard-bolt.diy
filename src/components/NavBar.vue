&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const darkMode = ref(localStorage.getItem('darkMode') === 'true')

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', darkMode.value.toString())
  document.documentElement.classList.toggle('dark', darkMode.value)
}
&lt;/script&gt;

&lt;template&gt;
  &lt;nav class="bg-white dark:bg-gray-800 shadow"&gt;
    &lt;div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
      &lt;div class="flex justify-between h-16"&gt;
        &lt;div class="flex"&gt;
          &lt;div class="flex-shrink-0 flex items-center"&gt;
            &lt;span class="text-xl font-bold text-primary-500"&gt;Budget App&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="flex items-center"&gt;
          &lt;button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"&gt;
            &lt;MoonIcon v-if="darkMode" class="h-6 w-6 text-gray-400" /&gt;
            &lt;SunIcon v-else class="h-6 w-6 text-gray-400" /&gt;
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
&lt;/template&gt;
