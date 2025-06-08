<script>
    let make = 'Any Make';
    let model = 'Any Model';
    let price = 'Any Price';
    let type = 'Any Type';

    const makes = ['Any Make', 'Audi', 'BMW', 'Honda', 'Toyota'];
    const models = ['Any Model'];
    const prices = ['Any Price', 'Under $20,000', '$20,000 - $40,000', '$40,000 - $60,000'];
    const types = ['Any Type', 'New', 'Used', 'Certified Pre-Owned'];
</script>

<section class="bg-white p-8 shadow-lg">
    <h2 class="text-2xl font-bold text-navy mb-6">Find Your Perfect Vehicle</h2>
    <form class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
            <label for="make" class="block mb-2 font-semibold text-navy">Make</label>
            <select id="make" bind:value={make} class="w-full p-3 border border-gray-300 rounded">
                {#each makes as option}
                    <option>{option}</option>
                {/each}
            </select>
        </div>
        <div>
            <label for="model" class="block mb-2 font-semibold text-navy">Model</label>
            <select id="model" bind:value={model} class="w-full p-3 border border-gray-300 rounded">
                {#each models as option}
                    <option>{option}</option>
                {/each}
            </select>
        </div>
        <div>
            <label for="price" class="block mb-2 font-semibold text-navy">Price Range</label>
            <select id="price" bind:value={price} class="w-full p-3 border border-gray-300 rounded">
                {#each prices as option}
                    <option>{option}</option>
                {/each}
            </select>
        </div>
        <div>
            <label for="type" class="block mb-2 font-semibold text-navy">Vehicle Type</label>
            <select id="type" bind:value={type} class="w-full p-3 border border-gray-300 rounded">
                {#each types as option}
                    <option>{option}</option>
                {/each}
            </select>
        </div>
        <button type="submit" class="bg-navy text-white p-3 rounded font-semibold hover:bg-blue-900 transition">Search Inventory</button>
    </form>
</section>