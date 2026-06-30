// Centralised demo content for the RealHomes site.
// Imagery uses Unsplash photographs (different from the reference site).
const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export interface Project {
  name: string
  tagline: string
  location: string
  units: string
  price: string
  image: string
}

export const useSiteData = () => {
  const hero: Project[] = [
    { name: 'Sensa', tagline: 'Inspiration Surrounds', location: 'Marina District', units: 'Studios — 3 Bedrooms', price: 'From $190,000', image: img('1545324418-cc1a3fa10c00', 2000) },
    { name: 'Verdant', tagline: 'Where Life Is Evergreen', location: 'Garden Quarter', units: '2 — 5 Bedroom Villas', price: 'From $410,000', image: img('1613977257363-707ba9348227', 2000) },
    { name: 'Aurelia Island', tagline: 'A World Apart', location: 'Waterfront Reserve', units: 'Signature Mansions', price: 'From $1,900,000', image: img('1600596542815-ffad4c1539a9', 2000) },
    { name: 'R.Heights', tagline: 'Elevate Everyday Living', location: 'Skyline Boulevard', units: '1 — 4 Bedrooms', price: 'From $260,000', image: img('1486406146926-c627a92ad1ab', 2000) }
  ]

  const apartments: Project[] = [
    { name: 'Oceana', tagline: 'Coastal Living', location: 'Marina District', units: 'Studios — 3 BR', price: '0.7 – 1.1 M', image: img('1512917774080-9991f1c4c750') },
    { name: 'Marlin 2', tagline: 'Harbour Views', location: 'Harbour Point', units: '1 — 3 BR', price: '0.8 – 1.3 M', image: img('1502672260266-1c1ef2d93688') },
    { name: 'Perla Heights', tagline: 'City Within Reach', location: 'Central Avenue', units: 'Studios — 2 BR', price: '0.6 – 1.0 M', image: img('1505691938895-1758d7feb511') },
    { name: 'Perla Waves', tagline: 'Beside The Water', location: 'Lagoon Walk', units: '1 — 3 BR', price: '0.85 – 1.4 M', image: img('1600607687939-ce8a6c25118c') },
    { name: 'Aurora', tagline: 'Light & Space', location: 'North Quarter', units: 'Studios — 3 BR', price: '0.75 – 1.2 M', image: img('1600566753086-00f18fb6b3ea') },
    { name: 'Solis', tagline: 'Sunlit Residences', location: 'Park Edge', units: '1 — 4 BR', price: '0.9 – 1.5 M', image: img('1600585154340-be6161a56a0c') }
  ]

  const communities: Project[] = [
    { name: 'Aurelia Island', tagline: 'A World Apart', location: 'Waterfront Reserve', units: 'Mansions', price: '7 – 12 M', image: img('1564013799919-ab600027ffc6') },
    { name: 'Sensa', tagline: 'Inspiration Surrounds', location: 'Marina District', units: '3 — 5 BR Villas', price: '2.4 – 4 M', image: img('1518780664697-55e3ad937233') },
    { name: 'Sila', tagline: 'Quiet Luxury', location: 'Cedar Valley', units: '4 — 6 BR Villas', price: '2.7 – 4.5 M', image: img('1613490493576-7fde63acd811') },
    { name: 'Verdant', tagline: 'Where Life Is Evergreen', location: 'Garden Quarter', units: '2 — 5 BR', price: '1.5 – 2.6 M', image: img('1583608205776-bfd35f0d9f83') },
    { name: 'Victoria Palms', tagline: 'Resort Living', location: 'Palm Crescent', units: '3 — 5 BR', price: '2.1 – 3.6 M', image: img('1576941089067-2de3c901e126') },
    { name: 'Monarch', tagline: 'Reign In Comfort', location: 'Royal Gardens', units: '4 — 7 BR Estates', price: '3.6 – 6 M', image: img('1512453979798-5ea266f8880c') }
  ]

  const benefits = [
    { title: 'High Rental Returns', text: 'Enjoy some of the strongest rental yields in the market, backed by sustained demand.', icon: '↗', image: img('1460317442991-0ec209397118', 1000) },
    { title: 'Tax-Free Environment', text: 'Retain more of your investment with zero property and income tax on your returns.', icon: '◇', image: img('1554224155-6726b3ff858f', 1000) },
    { title: 'Golden Visa Eligibility', text: 'Qualify for long-term residency for you and your family through property ownership.', icon: '✦', image: img('1521791136064-7986c2920216', 1000) },
    { title: 'Leading Global Hub', text: 'Invest at the crossroads of Europe, Asia and Africa — a world-class business hub with seamless connectivity and a thriving economy.', icon: '⚓', image: img('1512453979798-5ea266f8880c', 1000) }
  ]

  const presence = [
    { country: 'United Arab Emirates', projects: 28, image: img('1512453979798-5ea266f8880c', 900) },
    { country: 'United Kingdom', projects: 9, image: img('1529655683826-aba9b3e77383', 900) },
    { country: 'Saudi Arabia', projects: 12, image: img('1578895101408-1a36b834405b', 900) },
    { country: 'Qatar', projects: 6, image: img('1559564484-e48b3e040ff4', 900) },
    { country: 'Turkey', projects: 7, image: img('1524231757912-21f4fe3a7200', 900) },
    { country: 'Egypt', projects: 5, image: img('1572252009286-268acec5ca0a', 900) }
  ]

  const stats = [
    { value: '60+', label: 'Projects Delivered' },
    { value: '31,000+', label: 'Homes Built' },
    { value: '6,627', label: 'Units Sold in 2025' },
    { value: '20+', label: 'Countries' }
  ]

  const stories = [
    { tag: 'Newsroom', title: 'RealHomes Unveils Its Largest Waterfront Community Yet', date: 'June 2026', image: img('1486325212027-8081e485255e') },
    { tag: 'Insight', title: 'Why Branded Residences Are Reshaping Modern Living', date: 'May 2026', image: img('1565182999561-18d7dc61c393') },
    { tag: 'Milestone', title: 'A Decade of Development: 31,000 Homes and Counting', date: 'April 2026', image: img('1493809842364-78817add7ffb') }
  ]

  return { hero, apartments, communities, benefits, presence, stats, stories }
}
