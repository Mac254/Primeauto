export const dealershipInfo = {
  name: 'Prime Auto',
  address: '123 Auto Plaza',
  city: 'New York',
  state: 'NY',
  zip: '10001',
  phone: '(555) 123-4567',
  email: 'info@primeauto.com',
  hours: {
    weekdays: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: '11:00 AM - 5:00 PM'
  },
  socialMedia: {
    facebook: 'https://facebook.com/primeauto',
    twitter: 'https://twitter.com/primeauto',
    instagram: 'https://instagram.com/primeauto',
    linkedin: 'https://linkedin.com/company/primeauto'
  },
  about: {
    description: 'Prime Auto has been serving the community for over 20 years, providing quality vehicles and exceptional customer service. Our team of automotive experts is dedicated to helping you find the perfect vehicle to suit your needs and budget.',
    stats: [
      { value: '5000+', label: 'Vehicles Sold' },
      { value: '98%', label: 'Customer Satisfaction' },
      { value: '20+', label: 'Years in Business' },
      { value: '50+', label: 'Team Members' }
    ]
  },
  team: [
    {
      name: 'John Smith',
      position: 'General Manager',
      bio: 'With over 15 years in the automotive industry, John leads our team with dedication and expertise.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Sales Manager',
      bio: 'Sarah has been helping customers find their perfect vehicle for over 10 years.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Mike Davis',
      position: 'Finance Director',
      bio: 'Mike specializes in finding the best financing options for our customers.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      name: 'Emily Wilson',
      position: 'Service Manager',
      bio: 'Emily ensures our service department provides top-notch maintenance and repairs.',
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ]
};

export const contactFormFields = [
  {
    id: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    required: true
  },
  {
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'Enter your phone number',
    required: false
  },
  {
    id: 'subject',
    label: 'Subject',
    type: 'select',
    options: [
      { value: 'general', label: 'General Inquiry' },
      { value: 'sales', label: 'Sales Question' },
      { value: 'service', label: 'Service Appointment' },
      { value: 'finance', label: 'Financing Question' },
      { value: 'other', label: 'Other' }
    ],
    required: true
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'How can we help you?',
    required: true,
    rows: 5
  }
];

export const contactMethods = [
  {
    title: 'Visit Us',
    description: dealershipInfo.address + ', ' + dealershipInfo.city + ', ' + dealershipInfo.state + ' ' + dealershipInfo.zip,
    icon: 'map-marker-alt',
    link: 'https://maps.google.com',
    linkText: 'Get Directions'
  },
  {
    title: 'Call Us',
    description: dealershipInfo.phone,
    icon: 'phone',
    link: `tel:${dealershipInfo.phone.replace(/\D/g, '')}`,
    linkText: 'Call Now'
  },
  {
    title: 'Email Us',
    description: dealershipInfo.email,
    icon: 'envelope',
    link: `mailto:${dealershipInfo.email}`,
    linkText: 'Send Email'
  }
];
