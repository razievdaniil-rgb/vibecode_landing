// All landing copy in one place. Fictional brand — portfolio demo.

export const brand = {
  name: 'KINETIK',
  tagline: 'Fuel the machine.',
  disclaimer:
    'KINETIK is a fictional brand created as a portfolio demo. No products are for sale.',
} as const

export const nav = [
  { label: 'Products', href: '#products' },
  { label: 'Science', href: '#science' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
] as const

export const hero = {
  eyebrow: 'Clinically dosed · Third-party tested',
  headline: ['Fuel', 'the', 'machine'],
  sub: 'Whey isolate, creatine and BCAA engineered to a lab spec — not a marketing one. Every scoop is a known quantity.',
  primaryCta: 'Shop the line',
  secondaryCta: 'See the science',
  stats: [
    { value: '27g', label: 'Protein / scoop' },
    { value: '0g', label: 'Added sugar' },
    { value: '9.4', label: 'Amino score' },
  ],
} as const

export const trust = {
  line: 'Trusted by 50,000+ athletes, coaches and clinicians',
  logos: ['IRONHALL', 'APEXFIT', 'NORDSTRENGTH', 'VELOCITY LAB', 'BASECAMP'],
  stats: [
    { value: '50k+', label: 'Athletes fueled' },
    { value: '4.9/5', label: 'Avg. rating (12k reviews)' },
    { value: '100%', label: 'Batch-tested lots' },
  ],
} as const

export const products = [
  {
    id: 'whey',
    index: '01',
    name: 'Whey Isolate',
    line: 'RECOVER',
    blurb: 'Cold-filtered isolate. 27g protein, 1.4g leucine, zero filler.',
    macro: '27g protein',
    accent: 'volt',
    image:
      'https://images.unsplash.com/photo-1693996046865-19217d179161?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Scoop of whey protein powder',
  },
  {
    id: 'creatine',
    index: '02',
    name: 'Creatine',
    line: 'POWER',
    blurb: 'Creapure® monohydrate, 5g clinical dose. Just the molecule.',
    macro: '5g / serving',
    accent: 'ion',
    image:
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Scoop of white creatine powder',
  },
  {
    id: 'bcaa',
    index: '03',
    name: 'BCAA + EAA',
    line: 'ENDURE',
    blurb: 'Full 9-amino spread, 2:1:1 ratio. Intra-workout fuel.',
    macro: '7g aminos',
    accent: 'volt',
    image:
      'https://images.unsplash.com/photo-1704650312191-005ab02786f5?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Scoop of BCAA amino powder',
  },
] as const

export const science = {
  eyebrow: 'The spec sheet',
  title: 'Dosed for physiology, not for a label claim',
  body: 'Most supplements are built to look good on a shelf. KINETIK is reverse-engineered from the research: every active ingredient hits the dose that actually moved outcomes in the literature — printed on the tub, verified per lot.',
  features: [
    {
      k: 'PURITY',
      title: '90% protein by dry weight',
      desc: 'Cross-flow microfiltration keeps the protein and drops the lactose, fat and denatured junk.',
    },
    {
      k: 'DOSING',
      title: 'Full clinical doses',
      desc: 'No pixie-dusting. If a study used 5g, the scoop delivers 5g — no proprietary-blend hiding.',
    },
    {
      k: 'PROOF',
      title: 'Third-party tested, every lot',
      desc: 'Independent labs verify identity, potency and contaminants before a batch ships.',
    },
    {
      k: 'TASTE',
      title: 'Mixes clean, no chalk',
      desc: 'Instantized to dissolve in a shaker in seconds. Dialed with real flavorists, not just sweeteners.',
    },
  ],
} as const

// Supplement Facts panel — the signature structural device
export const supplementFacts = {
  product: 'Whey Isolate · Vanilla',
  servingSize: '1 scoop (32 g)',
  servingsPerContainer: '30',
  rows: [
    { name: 'Calories', amount: '120', dv: '', bold: true },
    { name: 'Total Fat', amount: '1 g', dv: '1%' },
    { name: 'Total Carbohydrate', amount: '2 g', dv: '1%' },
    { name: 'Total Sugars', amount: '1 g', dv: '', indent: true },
    { name: 'Added Sugars', amount: '0 g', dv: '0%', indent: true },
    { name: 'Protein', amount: '27 g', dv: '54%', bold: true },
    { name: 'Sodium', amount: '55 mg', dv: '2%' },
    { name: 'Calcium', amount: '130 mg', dv: '10%' },
  ],
  aminos: [
    { name: 'Leucine', amount: '2.9 g' },
    { name: 'Isoleucine', amount: '1.7 g' },
    { name: 'Valine', amount: '1.6 g' },
    { name: 'Glutamine', amount: '4.8 g' },
  ],
} as const

export const scrollStory = {
  eyebrow: 'Inside the tub',
  title: 'Every layer, accounted for',
  steps: [
    {
      k: 'THE PROTEIN',
      title: 'Isolate, not concentrate',
      desc: 'Starts at 90%+ protein by weight — the lean part of whey, with the lactose and fat filtered out.',
    },
    {
      k: 'THE AMINOS',
      title: '5.4g of BCAAs, naturally',
      desc: 'Leucine leads the pack to flip on muscle protein synthesis after you train.',
    },
    {
      k: 'THE FLAVOR',
      title: 'Sweetened, not sugared',
      desc: 'A whisper of stevia and real vanilla. No 20g sugar payload hiding behind the protein number.',
    },
    {
      k: 'THE SEAL',
      title: 'Sealed, coded, traceable',
      desc: 'Foil-sealed and lot-stamped. Scan the code, read that exact batch’s test results.',
    },
  ],
} as const

export const testimonials = [
  {
    quote:
      'I switched my whole roster over. Clean macros, no bloat, and the athletes actually finish the tub because it tastes right.',
    name: 'Dana Whitlock',
    role: 'S&C Coach, Ironhall',
    rating: 5,
  },
  {
    quote:
      'The transparency sold me. I can pull up a lab report for my exact bottle. Nothing else on the market does that.',
    name: 'Marcus Reyes',
    role: 'Physique competitor',
    rating: 5,
  },
  {
    quote:
      'Creatine that’s just creatine, dosed right. My recovery between sessions is noticeably better six weeks in.',
    name: 'Priya Anand',
    role: 'Ultramarathoner',
    rating: 5,
  },
  {
    quote:
      'As a dietitian I’m picky. KINETIK is one of maybe three brands I’ll actually recommend to clients.',
    name: 'Tom Okafor',
    role: 'RD, Velocity Lab',
    rating: 5,
  },
] as const

export const pricing = [
  {
    tier: 'Starter',
    price: '$39',
    cadence: 'one tub',
    tagline: 'Try a single product.',
    features: ['1 tub (30 servings)', 'Free lab report access', 'Ships in 2 days'],
    cta: 'Pick a product',
    featured: false,
  },
  {
    tier: 'Pro Stack',
    price: '$89',
    cadence: '/ month',
    tagline: 'Whey + creatine, delivered.',
    features: [
      'Whey Isolate + Creatine',
      'Save 24% vs. one-off',
      'Skip or cancel anytime',
      'Priority support',
    ],
    cta: 'Start the stack',
    featured: true,
  },
  {
    tier: 'Elite',
    price: '$129',
    cadence: '/ month',
    tagline: 'The full system.',
    features: [
      'Whey + Creatine + BCAA',
      'Save 31% vs. one-off',
      'Free shaker + scoop',
      'Coach dashboard access',
    ],
    cta: 'Go elite',
    featured: false,
  },
] as const

export const faq = [
  {
    q: 'Is this a real product I can buy?',
    a: 'No — KINETIK is a fictional brand built as a front-end portfolio piece. The design, copy and 3D are real work; the store is not.',
  },
  {
    q: 'What does “clinically dosed” mean?',
    a: 'Each active ingredient is included at the amount shown to be effective in peer-reviewed research — not an under-dosed sprinkle to justify a claim on the label.',
  },
  {
    q: 'How is it third-party tested?',
    a: 'Independent labs verify each production lot for identity, potency and contaminants. Every tub is stamped with a batch code linked to its report.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: 'The concept brand offers a 30-day “finish the tub” guarantee — if you don’t feel the difference, you get a refund, empty tub and all.',
  },
] as const

export const footer = {
  columns: [
    { title: 'Products', links: ['Whey Isolate', 'Creatine', 'BCAA + EAA', 'Bundles'] },
    { title: 'Company', links: ['Our science', 'Lab reports', 'Reviews', 'Contact'] },
    { title: 'Support', links: ['Shipping', 'Returns', 'FAQ', 'Track order'] },
  ],
  social: ['Instagram', 'YouTube', 'X', 'TikTok'],
} as const
