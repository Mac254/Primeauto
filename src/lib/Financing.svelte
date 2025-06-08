<script>
    import { financingOptions } from './data.js';
    let vehiclePrice = 0;
    let downPayment = 0;
    let loanTerm = '60';
    let interestRate = 0;
    let monthlyPayment = '789';
    let totalLoan = '37,995';
    let totalInterest = '5,895';
    let totalCost = '43,890';

    const terms = ['36', '48', '60', '72', '84'];

    function calculatePayment() {
        const principal = Number(vehiclePrice) - Number(downPayment);
        const monthlyRate = Number(interestRate) / 100 / 12;
        const term = Number(loanTerm);
        if (principal > 0 && monthlyRate > 0 && term > 0) {
            monthlyPayment = ((principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term))).toFixed(2);
            totalLoan = principal.toFixed(2);
            totalInterest = (monthlyPayment * term - principal).toFixed(2);
            totalCost = (Number(monthlyPayment) * term).toFixed(2);
        } else {
            monthlyPayment = '0';
            totalLoan = '0';
            totalInterest = '0';
            totalCost = '0';
        }
    }
</script>

<section class="container mx-auto p-8">
    <h2 class="text-2xl font-bold text-navy mb-6">Auto Financing Made Easy</h2>
    <p class="text-lg mb-6">Competitive rates and flexible terms to fit your budget</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {#each financingOptions as option}
            <div class="bg-white p-5 rounded-lg shadow">
                <h3 class="text-xl font-bold text-navy mb-2">{option.title}</h3>
                <p>{option.description}</p>
                <p class="mt-2 font-semibold">{option.apr}</p>
            </div>
        {/each}
    </div>
    <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-xl font-bold text-navy mb-4">Payment Calculator</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <label for="vehiclePrice" class="block mb-2 font-semibold text-navy">Vehicle Price ($)</label>
                <input id="vehiclePrice" type="number" bind:value={vehiclePrice} class="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
                <label for="downPayment" class="block mb-2 font-semibold text-navy">Down Payment ($)</label>
                <input id="downPayment" type="number" bind:value={downPayment} class="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div>
                <label for="loanTerm" class="block mb-2 font-semibold text-navy">Loan Term (Months)</label>
                <select id="loanTerm" bind:value={loanTerm} class="w-full p-3 border border-gray-300 rounded">
                    {#each terms as term}
                        <option>{term}</option>
                    {/each}
                </select>
            </div>
            <div>
                <label for="interestRate" class="block mb-2 font-semibold text-navy">Interest Rate (%)</label>
                <input id="interestRate" type="number" bind:value={interestRate} class="w-full p-3 border border-gray-300 rounded" />
            </div>
        </div>
        <button on:click={calculatePayment} class="bg-navy text-white p-3 rounded font-semibold hover:bg-blue-900 transition mt-4">Calculate Payment</button>
        <div class="mt-6">
            <p class="text-lg font-semibold">Estimated Monthly Payment: ${monthlyPayment}</p>
            <p>Total Loan Amount: ${totalLoan}</p>
            <p>Total Interest: ${totalInterest}</p>
            <p>Total Cost: ${totalCost}</p>
        </div>
        <a href="/financing" class="block mt-4 bg-gold text-navy px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition text-center">Apply Now</a>
    </div>
</section>