<script>
    import { vehicles } from './data.js';
</script>

<section class="container mx-auto p-8">
    <h2 class="text-2xl font-bold text-navy mb-6">Featured Vehicles</h2>
    <p class="mb-6">Browse our most popular models available for purchase or lease</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each vehicles as vehicle}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition relative">
                {#if vehicle.badge}
                    <span class="absolute top-4 right-4 bg-gold text-navy px-2 py-1 rounded font-semibold text-sm">{vehicle.badge}</span>
                {/if}
                <div class="h-48 overflow-hidden">
                    <img src={vehicle.img} alt={vehicle.name} class="w-full h-full object-cover hover:scale-110 transition" />
                </div>
                <div class="p-5">
                    <h3 class="text-xl font-bold text-navy mb-2">{vehicle.name}</h3>
                    <p class="text-gray-600">{vehicle.miles} | {vehicle.type}</p>
                    <p class="text-lg font-semibold mt-2">{vehicle.price} or {vehicle.lease} lease</p>
                    <a href="/details/{vehicle.id}" class="block mt-4 bg-navy text-white px-4 py-2 rounded font-semibold hover:bg-blue-900 transition text-center">View Details</a>
                </div>
            </div>
        {/each}
    </div>
</section>