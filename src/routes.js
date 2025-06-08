import Home from './routes/index.svelte';
import Inventory from './routes/inventory.svelte';
import Financing from './routes/financing.svelte';
import Leasing from './routes/leasing.svelte';
import About from './routes/about.svelte';
import Contact from './routes/contact.svelte';

export default [
  { path: '/', component: Home },
  { path: '/inventory', component: Inventory },
  { path: '/financing', component: Financing },
  { path: '/leasing', component: Leasing },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];
