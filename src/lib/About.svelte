<script>
    const team = [
        { name: 'John Doe', role: 'Founder & CEO', bio: 'With over 30 years in the automotive industry, John leads PrimeAuto with a passion for quality and customer satisfaction.' },
        { name: 'Jane Smith', role: 'Sales Director', bio: 'Jane ensures every customer finds the perfect vehicle, overseeing our expert sales team.' },
        { name: 'Mike Johnson', role: 'Finance Manager', bio: 'Mike crafts competitive financing and leasing options tailored to your needs.' }
    ];
</script>

<section class="container mx-auto p-8">
    <h1 class="text-3xl font-bold text-navy mb-4">About PrimeAuto</h1>
    <p class="text-lg text-gray-600 mb-8">Your trusted partner for car sales and leasing since 1995</p>

    <div class="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 class="text-2xl font-bold text-navy mb-4">Our Story</h2>
        <p class="text-gray-600 mb-4">Founded in 1995, PrimeAuto began as a family-owned dealership with a simple mission: to help people find quality vehicles at fair prices with exceptional customer service. Over the past 30 years, we’ve grown into one of the region’s most trusted names in automotive sales and leasing, serving thousands of satisfied customers.</p>
        <p class="text-gray-600">Our commitment to integrity, transparency, and personalized solutions remains at the core of everything we do. Whether you’re a first-time buyer or looking to upgrade, our experienced team is here to guide you every step of the way.</p>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-navy mb-4">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {#each team as member}
                <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <div class="h-32 w-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
                    <h3 class="text-xl font-semibold text-navy">{member.name}</h3>
                    <p class="text-gray-600 font-medium mb-2">{member.role}</p>
                    <p class="text-gray-600">{member.bio}</p>
                </div>
            {/each}
        </div>
    </div>
</section>