<script>
  import { Router, Route } from 'svelte-routing';
  import Nav from './lib/Nav.svelte';
  import Footer from './lib/Footer.svelte';
  
  // Import page components
  import Home from './routes/index.svelte';
  import Inventory from './routes/inventory.svelte';
  import Financing from './routes/financing.svelte';
  import Leasing from './routes/leasing.svelte';
  import About from './routes/about.svelte';
  import Contact from './routes/contact.svelte';
</script>

<Router>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <main class="flex-grow">
      <Route path="/" component={Home} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/financing" component={Financing} />
      <Route path="/leasing" component={Leasing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </main>
    <Footer />
  </div>
</Router>