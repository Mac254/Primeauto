<script>
  import Nav from '../lib/Nav.svelte';
  import Footer from '../lib/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
  <Nav />
  <main class="flex-grow">
    <slot></slot>
  </main>
  <Footer />
</div>
