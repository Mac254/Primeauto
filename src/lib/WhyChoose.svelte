<script>
    const benefits = [
        { title: 'Certified Pre-Owned', description: 'All our used vehicles undergo rigorous 150-point inspections and come with extended warranties.' },
        { title: 'Flexible Financing', description: 'Low APR rates and lease terms tailored to your budget with quick approval process.' },
        { title: 'Trade-In Value', description: 'Get the best offer for your current vehicle with our competitive trade-in program.' },
        { title: 'Customer Support', description: 'Dedicated advisors available 7 days a week to answer all your questions.' }
    ];
</script>

<section class="container mx-auto p-8">
    <h2 class="text-2xl font-bold text-navy mb-6">Why Choose PrimeAuto?</h2>
    <p class="text-lg mb-6">We're committed to providing the best car buying and leasing experience</p>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        {#each benefits as benefit}
            <div class="bg-white p-5 rounded-lg shadow">
                <h3 class="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                <p class="text-gray-600">{benefit.description}</p>
            </div>
        {/each}
    </div>
</section>