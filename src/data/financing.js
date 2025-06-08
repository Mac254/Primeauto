// Financing options
export const financingOptions = [
  {
    id: 1,
    title: 'New Car Loans',
    description: 'Competitive rates for brand new vehicles with flexible terms.',
    apr: 'Starting at 2.9% APR',
    minTerm: 36,
    maxTerm: 84,
    minAmount: 10000,
    maxAmount: 100000,
    requirements: [
      'Minimum credit score: 650',
      'Proof of income',
      'Valid driver\'s license',
      'Proof of insurance'
    ]
  },
  {
    id: 2,
    title: 'Used Car Loans',
    description: 'Great rates for pre-owned vehicles up to 7 years old.',
    apr: 'Starting at 3.9% APR',
    minTerm: 24,
    maxTerm: 72,
    minAmount: 5000,
    maxAmount: 75000,
    requirements: [
      'Minimum credit score: 600',
      'Proof of income',
      'Valid driver\'s license',
      'Proof of insurance',
      'Vehicle inspection'
    ]
  },
  {
    id: 3,
    title: 'Refinancing',
    description: 'Lower your monthly payments by refinancing your current auto loan.',
    apr: 'Rates as low as 3.5% APR',
    minTerm: 24,
    maxTerm: 72,
    minAmount: 7500,
    maxAmount: 100000,
    requirements: [
      'Current auto loan statement',
      'Proof of income',
      'Vehicle information',
      'Current registration'
    ]
  }
];

// Leasing options
export const leaseTerms = [24, 36, 48];
export const annualMileageOptions = [10000, 12000, 15000];

export const leaseSpecials = [
  {
    id: 1,
    make: 'Toyota',
    model: 'RAV4 LE',
    term: '36 months',
    mileage: '12,000 miles/year',
    dueAtSigning: '$2,999',
    monthlyPayment: '$299',
    details: 'Excludes tax, title, license, and registration fees.'
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Accord LX',
    term: '36 months',
    mileage: '12,000 miles/year',
    dueAtSigning: '$2,799',
    monthlyPayment: '$279',
    details: 'Excludes tax, title, license, and registration fees.'
  },
  {
    id: 3,
    make: 'BMW',
    model: '330i',
    term: '36 months',
    mileage: '10,000 miles/year',
    dueAtSigning: '$3,999',
    monthlyPayment: '$499',
    details: 'Excludes tax, title, license, and registration fees.'
  }
];

// Credit score ranges
export const creditScoreRanges = [
  { range: '300-579', rating: 'Poor', color: 'red-500' },
  { range: '580-669', rating: 'Fair', color: 'yellow-500' },
  { range: '670-739', rating: 'Good', color: 'green-400' },
  { range: '740-799', rating: 'Very Good', color: 'green-600' },
  { range: '800-850', rating: 'Exceptional', color: 'green-800' }
];

// Calculate monthly payment
export function calculateMonthlyPayment(amount, term, apr) {
  const monthlyRate = (apr / 100) / 12;
  const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                 (Math.pow(1 + monthlyRate, term) - 1);
  return isFinite(payment) ? payment.toFixed(2) : 0;
}

// Calculate lease payment
export function calculateLeasePayment(capCost, residual, moneyFactor, term, taxRate = 0) {
  const depreciation = (capCost - residual) / term;
  const interest = (capCost + residual) * moneyFactor;
  const monthlyBeforeTax = depreciation + interest;
  const monthlyTax = monthlyBeforeTax * (taxRate / 100);
  return (monthlyBeforeTax + monthlyTax).toFixed(2);
}
