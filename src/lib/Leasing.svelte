<script>
    import { leaseBenefits, leaseSpecials } from './data.js';
    let msrp = '';
    let leaseTerm = '36';
    let mileage = '12,000';
    let dueAtSigning = '';
    let monthlyPayment = '349';
    let totalCost = '15,564';
    let mileageAllowance = '36,000';

    const terms = ['24', '36', '39', '48'];
    const mileages = ['10,000', '12,000', '15,000'];
</script>

<section class="container mx-auto p-8">
    <h2 class="text-2xl font-bold text-navy mb-6">Flexible Vehicle Leasing</h2>
    <p class="text-lg mb-6">Drive a newer car for less with our competitive lease offers</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {#each leaseBenefits as benefit}
            <div class="bg-white p-5 rounded-lg shadow">
                <h3 class="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
            </div>
        {/each}
    </div>
    <h3 class="text-xl font-bold text-navy mb-4">Current Lease Specials</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {#each leaseSpecials as special}
            <div class="bg-white p-5 rounded-lg shadow">
                <h4 class="text-lg font-bold text-navy mb-2">{special.model}</h4>
                <p class="text-lg font-semibold">{special.payment}</p>
                <p>{special.term}</p>
                <p>{special.due}</p>
                <p>{special.mileage}</p>
                <a href="/leasing" class="block mt-4 bg-navy text-white px-4 py-2 rounded font-semibold hover:bg-blue-900 transition text-center">Lease Now</a>
            </div>
        {/each}
    </div>
    <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-bold text-navy mb-4">Lease Calculator</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <label for="msrp" class="block mb-2 font-semibold text-navy">Vehicle MSRP ($)</label>
                <input id="msrp" type="number" bind:value={msrp} class="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
                <label for="leaseTerm" class="block mb-2 font-semibold text-navy">Lease Term (Months)</label>
                <select id="leaseTerm" bind:value={leaseTerm} class="w-full p-3 border border-gray-300 rounded">
                    {#each terms as term}
                        <option>{term}</option>
                    {/each}
                </select>
            </div>
            <div>
                <label for="mileage" class="block mb-2 font-semibold text-navy">Annual Mileage</label>
                <select id="mileage" bind:value={mileage} class="w-full p-3 border border-gray-300 rounded">
                    {#each mileages as m}
                        <option>{m}</option>
                    {/each}
                </select>
            </div>
            <div>
                <label for="dueAtSigning" class="block mb-2 font-semibold text-navy">Due at Signing ($)</label>
                <input id="dueAtSigning" type="number" bind:value={dueAtSigning} class="w-full p-3 border border-gray-300 rounded" />
            </div>
        </div>
        <button class="bg-navy text-white p-3 rounded font-semibold hover:bg-blue-900 transition mt-4">Calculate Lease</button>
        <div class="mt-6">
            <p class="text-lg font-semibold">Estimated Monthly Payment: ${monthlyPayment}</p>
            <p>Total Lease Cost: ${totalCost}</p>
            <p>Mileage Allowance: {mileageAllowance} miles</p>
            <p>Excess Mileage Fee: $0.25/mile</p>
        </div>
        <a href="/leasing" class="block mt-4 bg-gold text-navy px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition text-center">Apply for Lease</a>
    </div>
</section>