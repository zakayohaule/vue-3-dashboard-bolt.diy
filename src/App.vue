&lt;script setup&gt;
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="min-h-screen flex flex-col"&gt;
    &lt;NavBar /&gt;
    &lt;main class="flex-1 p-6"&gt;
      &lt;RouterView /&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;
