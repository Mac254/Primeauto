export const vehicleMakes = [
  { id: 1, name: 'Toyota', logo: 'toyota-logo.png' },
  { id: 2, name: 'Honda', logo: 'honda-logo.png' },
  { id: 3, name: 'Ford', logo: 'ford-logo.png' },
  { id: 4, name: 'BMW', logo: 'bmw-logo.png' },
  { id: 5, name: 'Mercedes-Benz', logo: 'mercedes-logo.png' },
  { id: 6, name: 'Audi', logo: 'audi-logo.png' },
];

export const vehicleTypes = [
  { id: 1, name: 'Sedan', icon: 'sedan' },
  { id: 2, name: 'SUV', icon: 'suv' },
  { id: 3, name: 'Truck', icon: 'truck' },
  { id: 4, name: 'Van', icon: 'van' },
  { id: 5, name: 'Hatchback', icon: 'hatchback' },
  { id: 6, name: 'Coupe', icon: 'coupe' },
];

export const vehicles = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 24999,
    mileage: 12500,
    type: 'Sedan',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    color: 'Pearl White',
    features: ['Backup Camera', 'Bluetooth', 'Apple CarPlay', 'Leather Seats', 'Sunroof'],
    description: 'Like-new Toyota Camry with excellent fuel efficiency and premium features.',
    image: 'https://via.placeholder.com/600x400?text=Toyota+Camry+2023',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 2,
    make: 'Honda',
    model: 'CR-V',
    year: 2022,
    price: 28999,
    mileage: 18750,
    type: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    color: 'Modern Steel Metallic',
    features: ['AWD', 'Heated Seats', 'Android Auto', 'Blind Spot Monitor', 'Power Liftgate'],
    description: 'Well-maintained Honda CR-V with all-wheel drive and premium package.',
    image: 'https://via.placeholder.com/600x400?text=Honda+CR-V+2022',
    isFeatured: true,
    isNew: false,
  },
  {
    id: 3,
    make: 'BMW',
    model: 'X5',
    year: 2021,
    price: 45999,
    mileage: 22500,
    type: 'Luxury SUV',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    color: 'Phytonic Blue',
    features: ['Panoramic Sunroof', 'Heads-up Display', 'Premium Sound', 'Adaptive Cruise Control', 'Leather Seats'],
    description: 'Luxury BMW X5 with premium package and low mileage.',
    image: 'https://via.placeholder.com/600x400?text=BMW+X5+2021',
    isFeatured: true,
    isNew: false,
  },
  {
    id: 4,
    make: 'Ford',
    model: 'F-150',
    year: 2023,
    price: 42999,
    mileage: 8500,
    type: 'Truck',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    color: 'Iconic Silver',
    features: ['4x4', 'Towing Package', 'Apple CarPlay', 'Heated Seats', 'Backup Camera'],
    description: 'Powerful Ford F-150 with towing package and premium features.',
    image: 'https://via.placeholder.com/600x400?text=Ford+F150+2023',
    isFeatured: true,
    isNew: true,
  },
];

export const featuredVehicles = vehicles.filter(vehicle => vehicle.isFeatured);

// Helper functions
export const getMakeById = (id) => vehicleMakes.find(make => make.id === id);
export const getVehicleById = (id) => vehicles.find(vehicle => vehicle.id === parseInt(id));
export const getVehiclesByMake = (make) => vehicles.filter(vehicle => vehicle.make === make);
export const getVehiclesByType = (type) => vehicles.filter(vehicle => vehicle.type === type);
