/**
 * X-TECH ACCESSORIES - B2B GLOBAL PRODUCT DATABASE (2026)
 * Based on 2026 Phone Mount Market Research Report
 */

const PRODUCTS = [
  {
    id: 'vacuum-magnetic-mount',
    name: 'OmniSnap™ Vacuum Series Magnetic Phone Mount',
    category: 'magnetic-suction',
    technique: 'Electric Vacuum Suction Technology',
    material: 'Aerospace Aluminum + Silicone Suction Base',
    spec: 'Auto-Vacuum Sealing &middot; N52 Magnet Array &middot; Universal Mirror/Mirror/Glass Surface',
    description: 'The viral vacuum magnetic mount featuring active electric suction for non-magnetic surfaces. Perfect for gym, kitchen, and content creation.',
    image: 'https://images.unsplash.com/photo-1603313011101-31c726a55ad4?auto=format&fit=crop&w=800&q=80',
    contentSections: [
      {
        type: 'split_content',
        title: 'REVOLUTIONARY SUCTION',
        subtitle: 'Electric Vacuum Technology',
        text: 'Equipped with a built-in air pressure sensor that automatically activates the vacuum pump to ensure a 100% secure seal on smooth surfaces like mirrors, glass, and polished stone.',
        image: 'https://images.unsplash.com/photo-1603313011101-31c726a55ad4?auto=format&fit=crop&w=800&q=80'
      },
      {
        type: 'trust_badges',
        title: 'B2B MANUFACTURING SPECS',
        badges: [
          { label: 'MOQ: 500 PCS' },
          { label: 'Free Laser Logo' },
          { label: '30k Units / 20 Days' },
          { label: 'OEM/ODM Ready' }
        ]
      }
    ]
  },
  {
    id: 'qi2-wireless-charging-mount',
    name: 'OmniCharge™ Qi2 Series Magnetic Wireless Charger',
    category: 'charging',
    technique: 'Qi2 Certified 15W Fast Charging',
    material: 'Zinc Alloy + Tempered Glass + Active Cooling Fan',
    spec: '15W Fast Charging &middot; Built-in Active Cooling &middot; N52 Strong Magnet Alignment',
    description: 'Next-gen Qi2 certified wireless charging mount with active heat dissipation for sustained peak charging performance during navigation.',
    image: 'https://images.unsplash.com/photo-1616531331093-2f0853755c3c?auto=format&fit=crop&w=800&q=80',
    contentSections: [
      {
        type: 'split_content',
        title: 'PEAK PERFORMANCE',
        subtitle: 'Qi2 Certified Charging',
        text: 'The latest Qi2 standard ensures perfect alignment and 15W fast charging efficiency, comparable to original MagSafe performance with broad Android compatibility.',
        image: 'https://images.unsplash.com/photo-1616531331093-2f0853755c3c?auto=format&fit=crop&w=800&q=80'
      },
      {
        type: 'trust_badges',
        title: 'B2B MANUFACTURING SPECS',
        badges: [
          { label: 'MOQ: 500 PCS' },
          { label: 'Free Laser Logo' },
          { label: '30k Units / 20 Days' },
          { label: 'Global Certifications' }
        ]
      }
    ]
  },
  {
    id: 'motorcycle-mount-system',
    name: 'RuggedMoto™ Series Industrial Grade Moto Mount',
    category: 'outdoor',
    technique: 'Vibration Dampening & Mechanical Lock',
    material: 'Military-grade Aluminum &middot; Stainless Steel Hardware',
    spec: 'Anti-Vibration Module &middot; One-Click Mechanical Lock &middot; IP67 Weatherproof',
    description: 'Extreme durability for riders. Features a proprietary vibration dampening system to protect phone optical stabilization during off-road use.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    contentSections: [
      {
        type: 'split_content',
        title: 'ULTIMATE STABILITY',
        subtitle: 'Mechanical Locking System',
        text: 'Engineered for high-speed stability and extreme terrain. The dual-locking mechanism ensures the device stays mounted even under 5G impact forces.',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
      },
      {
        type: 'trust_badges',
        title: 'B2B MANUFACTURING SPECS',
        badges: [
          { label: 'MOQ: 500 PCS' },
          { label: 'Free Laser Logo' },
          { label: '30k Units / 20 Days' },
          { label: 'Custom Tooling Available' }
        ]
      }
    ]
  },
  {
    id: 'creator-magnetic-stand',
    name: 'VlogSnap™ Creator System Modular Stand',
    category: 'creator',
    technique: 'Multi-Axis Rotation & Magnetic Quick-Release',
    material: 'CNC Aluminum Alloy + Soft-Touch Silicone',
    spec: 'Vertical/Horizontal Orientation &middot; Cold Shoe Mount Integrated &middot; Foldable Portability',
    description: 'A modular magnetic stand system designed for TikTok and YouTube creators. Switch between studio, travel, and tripod modes in seconds.',
    image: 'https://images.unsplash.com/photo-1586105449897-2283f5117496?auto=format&fit=crop&w=800&q=80',
    contentSections: [
      {
        type: 'split_content',
        title: 'FOR CREATORS',
        subtitle: 'Modular Ecosystem',
        text: 'Integrate lights, microphones, and other accessories directly onto the magnetic mount for a professional mobile studio setup anywhere.',
        image: 'https://images.unsplash.com/photo-1586105449897-2283f5117496?auto=format&fit=crop&w=800&q=80'
      },
      {
        type: 'trust_badges',
        title: 'B2B MANUFACTURING SPECS',
        badges: [
          { label: 'MOQ: 500 PCS' },
          { label: 'Free Laser Logo' },
          { label: '30k Units / 20 Days' },
          { label: 'Full ODM Support' }
        ]
      }
    ]
  },
  {
    id: 'adjustable-tablet-stand',
    name: 'X-Tech Adjustable Multi-Angle Tablet Stand',
    category: 'stands',
    technique: 'Reinforced Alloy Pivot System',
    material: 'High-Density Aluminum Alloy + Non-Slip Silicone',
    spec: 'Dual-Axis Rotation &middot; Foldable Compact Design &middot; Heavy-Duty Base',
    description: 'A professional-grade tablet stand designed for productivity. Features a reinforced pivot system that supports devices up to 12.9 inches with zero wobble.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    contentSections: [
      {
        type: 'split_content',
        title: 'FOR TABLETS',
        subtitle: 'Heavy-Duty Stability',
        text: 'The X-Tech tablet stand uses a high-density alloy structure to provide maximum stability for creative professionals and office environments.',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
      },
      {
        type: 'trust_badges',
        title: 'B2B MANUFACTURING SPECS',
        badges: [
          { label: 'MOQ: 500 PCS' },
          { label: 'Custom Anodizing' },
          { label: '30k Units / 20 Days' },
          { label: 'Retail Ready Packaging' }
        ]
      }
    ]
  }
];
