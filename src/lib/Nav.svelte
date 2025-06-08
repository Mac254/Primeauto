<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  import { navLinks } from '../data/navigation';
  import { dealershipInfo } from '../data/dealership';

  let isMobileMenuOpen = false;
  let currentPath = '';

  // Format phone number for display
  const formatPhoneNumber = (phone) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  onMount(() => {
    // Set initial path
    currentPath = window.location.pathname;
    
    // Update path when browser navigation occurs (back/forward buttons)
    const updatePath = () => {
      currentPath = window.location.pathname;
      isMobileMenuOpen = false; // Close mobile menu on navigation
    };
    
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  });

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<!-- Top bar -->
<div class="bg-blue-900 text-white text-sm">
  <div class="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
    <div class="flex items-center space-x-4 mb-2 md:mb-0">
      <a 
        href={`tel:${dealershipInfo.phone.replace(/\D/g, '')}`} 
        class="flex items-center hover:text-yellow-300 transition-colors"
      >
        <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {formatPhoneNumber(dealershipInfo.phone)}
      </a>
      <a 
        href={`mailto:${dealershipInfo.email}`} 
        class="hidden md:flex items-center hover:text-yellow-300 transition-colors"
      >
        <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        {dealershipInfo.email}
      </a>
    </div>
    <div class="flex items-center space-x-4">
      <span class="hidden lg:inline">Open today: {dealershipInfo.hours.weekdays}</span>
      <a 
        href="/schedule-test-drive" 
        class="bg-yellow-500 hover:bg-yellow-600 text-navy font-semibold px-3 py-1 rounded text-sm transition-colors"
      >
        Schedule Test Drive
      </a>
    </div>
  </div>
</div>

<!-- Main Navigation -->
<nav class="bg-navy text-white shadow-lg sticky top-0 z-10">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <!-- Logo -->
    <Link href="/" class="text-2xl font-bold tracking-tight flex items-center">
      <span class="text-3xl mr-2">🚗</span>
      <span>Prime<span class="text-yellow-400">Auto</span></span>
    </Link>
    
    <!-- Desktop Navigation -->
    <ul class="hidden md:flex space-x-1">
      {#each navLinks as link}
        <li>
          <Link
            to={link.href}
            class="px-4 py-2 font-medium rounded-md transition-colors flex items-center
              hover:bg-navy-700 {currentPath === link.href ? 'bg-navy-800 text-yellow-400' : 'text-white'}"
          >
            <span class="mr-2 text-lg">{link.icon}</span>
            {link.name}
          </Link>
        </li>
      {/each}
    </ul>
    
    <!-- Mobile menu button -->
    <button
      class="md:hidden text-white p-2 rounded-md hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      on:click={toggleMobileMenu}
      aria-label="Toggle navigation menu"
      aria-expanded={isMobileMenuOpen}
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
        ></path>
      </svg>
    </button>
  </div>
  
  <!-- Mobile Navigation -->
  {#if isMobileMenuOpen}
    <div class="md:hidden bg-navy-800">
      <ul class="px-2 pt-2 pb-3 space-y-1">
        {#each navLinks as link}
          <li>
            <Link
              to={link.href}
              class="px-4 py-3 rounded-md text-base font-medium flex items-center
                hover:bg-navy-700 {currentPath === link.href ? 'bg-navy-900 text-yellow-400' : 'text-white'}"
              on:click={toggleMobileMenu}
            >
              <span class="mr-3 text-xl">{link.icon}</span>
              {link.name}
            </Link>
          </li>
        {/each}
        <li class="border-t border-navy-700 mt-2 pt-2">
          <a 
            href="/schedule-test-drive" 
            class="block w-full text-center bg-yellow-500 text-navy font-semibold px-4 py-3 rounded-md hover:bg-yellow-600 transition-colors"
            on:click={() => isMobileMenuOpen = false}
          >
            Schedule Test Drive
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>
