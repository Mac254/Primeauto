<script>
  import { onMount } from 'svelte';
  import { dealershipInfo } from '../data/dealership';
  
  // Form state
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  };
  
  let submitted = false;
  let isSubmitting = false;
  let error = '';
  
  // Format address for maps
  const formattedAddress = `${dealershipInfo.address}, ${dealershipInfo.city}, ${dealershipInfo.state} ${dealershipInfo.zip}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedAddress)}`;
  
  // Format phone number for display
  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phone;
  };
  
  // Handle form submission
  async function handleSubmit() {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      error = 'Please fill in all required fields.';
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      error = 'Please enter a valid email address.';
      return;
    }
    
    isSubmitting = true;
    error = '';
    
    try {
      // In a real app, you would send this data to your server
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll just show the success message
      submitted = true;
      
      // Reset form after submission
      formData = {
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      };
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        submitted = false;
      }, 5000);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      error = 'An error occurred while submitting your message. Please try again later.';
    } finally {
      isSubmitting = false;
    }
  }
  
  // Handle input changes
  function handleInput(field, value) {
    formData[field] = value;
    if (error) error = ''; // Clear error when user starts typing
  }
</script>

<section class="container mx-auto p-8">
    <h1 class="text-3xl font-bold text-navy mb-4">Contact Us</h1>
    <p class="text-lg text-gray-600 mb-8">Reach out to our dedicated team for assistance with buying, leasing, or any questions. We’re here to help!</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-navy mb-4">Send Us a Message</h2>
            {#if submitted}
                <p class="text-green-600 font-semibold mb-4">Thank you for your message! We’ll respond within 24-48 hours.</p>
            {/if}
            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
                <div>
                    <label for="name" class="block mb-2 font-semibold text-navy">Name</label>
                    <input id="name" type="text" bind:value={name} required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy" />
                </div>
                <div>
                    <label for="email" class="block mb-2 font-semibold text-navy">Email</label>
                    <input id="email" type="email" bind:value={email} required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy" />
                </div>
                <div>
                    <label for="phone" class="block mb-2 font-semibold text-navy">Phone (Optional)</label>
                    <input id="phone" type="tel" bind:value={phone} class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy" />
                </div>
                <div>
                    <label for="message" class="block mb-2 font-semibold text-navy">Message</label>
                    <textarea id="message" bind:value={message} required rows="5" class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-navy"></textarea>
                </div>
                <button type="submit" class="bg-navy text-white p-3 rounded font-semibold hover:bg-blue-900 transition w-full">Send Message</button>
            </form>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-navy mb-4">Visit Our Dealership</h2>
            <p class="text-gray-600 mb-4">123 Auto Plaza, New York, NY 10001</p>
            <p class="text-gray-600 mb-4">(555) 123-4567</p>
            <p class="text-gray-600 mb-4">info@primeauto.com</p>
            <p class="text-gray-600 mb-4">Mon-Sat: 9AM - 7PM | Sun: 11AM - 5PM</p>
            <div class="h-64 bg-gray-200 rounded-lg">
                <!-- Placeholder for map; replace with real map in production -->
                <p class="text-center pt-28 text-gray-500">Map of 123 Auto Plaza, New York, NY 10001</p>
            </div>
        </div>
    </div>
</section>
