<script>
    const testimonials = [
        { quote: 'Leased my SUV here—the process was smooth and the rates were better than anywhere else I checked. Highly recommend!', author: 'Sarah K.' }
    ];
</script>

<section class="container mx-auto p-8">
    <h2 class="text-2xl font-bold text-navy mb-6">What Our Customers Say</h2>
    <p class="text-lg mb-6">Don't just take our word for it - hear from our satisfied customers</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each testimonials as testimonial}
            <div class="bg-white p-5 rounded-lg shadow">
                <p class="text-gray-600 italic">"{testimonial.quote}"</p>
                <p class="mt-4 font-semibold text-navy">{testimonial.author}</p>
            </div>
        {/each}
    </div>
</section>