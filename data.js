/**
 * X-TECH ACCESSORIES - B2B GLOBAL PRODUCT DATABASE (2026)
 * Based on 2026 Phone Mount Market Research Report & New Structure
 */

const PRODUCTS = [
  {
    id: 'vacuum-magnetic-mount',
    name: 'OmniSnap™ Vacuum Series Magnetic Phone Mount',
    category: 'Magnetic Mounts',
    subCategory: 'Vacuum',
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
    category: 'Qi2 Chargers',
    subCategory: 'Vent Charger',
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
    category: 'Bike Mounts',
    subCategory: 'Motorcycle',
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
    category: 'Creator Stands',
    subCategory: 'Desktop',
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
    category: 'Creator Stands',
    subCategory: 'Desktop',
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
  },
  {
    id: 'magsafe-metal-ring-kit',
    name: 'Universal MagSafe Compatible Metal Ring Kit',
    category: 'Accessories',
    subCategory: 'Magnetic Rings',
    technique: 'Precision Stamping & 3M Adhesive Bonding',
    material: 'Premium Stainless Steel + 3M High-Bond Tape',
    spec: '0.4mm Ultra-Thin &middot; MagSafe Alignment &middot; High-Gloss Finish',
    description: 'Add MagSafe compatibility to any phone case. Precision-stamped metal rings with high-strength 3M adhesive for a permanent, secure bond.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80',
    contentSections: [
      {
        type: 'split_content',
        title: 'ACCESSORIZE',
        subtitle: 'Universal Compatibility',
        text: 'Our metal ring kits allow any device to leverage the power of the MagSafe ecosystem. Perfect for upgrading older models or non-magnetic cases.',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80'
      },
      {
        type: 'trust_badges',
        title: 'B2B MANUFACTURING SPECS',
        badges: [
          { label: 'MOQ: 2000 PCS' },
          { label: 'Logo Laser Possible' },
          { label: '100k Units / 15 Days' },
          { label: 'Bulk Bagged / Retail Box' }
        ]
      }
    ]
  },
  {
    id: 'heavy-duty-magnetic-mount',
    name: 'Heavy Duty Magnetic Car Phone Holder for Dashboard and Air Vent Installation',
    category: 'Magnetic Mounts',
    subCategory: 'Dashboard & Vent',
    technique: 'Industrial Grade CNC Machining',
    material: 'Reinforced Aluminum Alloy + Ultra-Strong N52 Magnets',
    spec: 'Dual-Installation Base &middot; 360 Degree Adjustment &middot; Anti-Vibration Core',
    description: 'Looking for reliable OEM manufacturing for magnetic phone mounts and wireless charging accessories? We provide flexible OEM & ODM support for brands, wholesalers, Amazon sellers, and distributors worldwide. Our sales team will reply within 24 hours.',
    image: './temp/1782790990944-Phone_Holder_for_Car__1_.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'DUAL INSTALLATION',
        subtitle: 'Versatile Mounting Options',
        text: 'Engineered with a unique swappable base system that supports both traditional dashboard adhesive mounting and advanced air vent claw installation for universal vehicle compatibility.',
        image: 'https://sc02.alicdn.com/kf/Hb5fc32cdc3ab44dba57b2b5e6e5b3bff8.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'DETAILED VIEW',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H35dac546c7084e538f078ba689205fe3Y.jpg', label: 'Main Architecture', desc: 'Premium alloy build with 3M base.' },
          { img: 'https://sc02.alicdn.com/kf/Hb5fc32cdc3ab44dba57b2b5e6e5b3bff8.jpg', label: 'Stability Test', desc: 'Secure grip even on rough terrain.' },
          { img: 'https://sc02.alicdn.com/kf/H18e24864eaa74221b8181fe6c1b02359L.jpg', label: 'Air Vent System', desc: 'Adjustable claw for all car models.' },
          { img: 'https://sc02.alicdn.com/kf/H91d6e6cc77274988808ca86cfe704bc61.jpg', label: 'Magnetic Core', desc: 'Internal N52 neodymium array.' }
        ]
      },
      {
        type: 'tech_features_grid',
        title: 'INQUIRY INFORMATION',
        features: [
          { n: '✔', label: 'Product Type', desc: 'Specify model and color requirements.' },
          { n: '✔', label: 'Estimated Quantity', desc: 'Bulk MOQ starts from 500 pcs.' },
          { n: '✔', label: 'Logo Requirement', desc: 'Free laser branding available.' },
          { n: '✔', label: 'Packaging Requirement', desc: 'Custom retail boxes from 10k units.' },
          { n: '✔', label: 'Target Market', desc: 'North America, Europe, SE Asia etc.' },
          { n: '✔', label: 'Shipping Destination', desc: 'Provide city/port for freight quote.' }
        ]
      },
      {
        type: 'trust_badges',
        title: 'OEM & ODM SERVICES',
        badges: [
          { label: 'Free Laser Logo' },
          { label: 'Custom Packaging' },
          { label: 'Product Color Customization' },
          { label: 'User Manual Printing' },
          { label: 'Barcode Labels' },
          { label: 'Amazon FNSKU Labels' }
        ]
      }
    ]
  },
  {
    id: 'high-strength-magnetic-mount',
    name: 'High Strength Magnetic Phone Holder Designed for Rough Roads and Long Distance Driving',
    category: 'Magnetic Mounts',
    subCategory: 'Dashboard & Screen',
    technique: 'Vibration-Resistant Magnetic Engineering',
    material: 'Premium Zinc Alloy + High-Flux N52 Neodymium Magnets',
    spec: 'Extreme Road Stability &middot; Screen-Edge Compatible &middot; 360 Degree Tilt Pivot',
    description: 'Looking for reliable OEM manufacturing for magnetic phone mounts and wireless charging accessories? We provide flexible OEM & ODM support for brands, wholesalers, Amazon sellers, and distributors worldwide. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/H7e63acefb641459fb9b2abc3e33b3a6ei.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'ROUGH ROAD STABILITY',
        subtitle: 'Engineered for Long Distance',
        text: 'Specifically developed for long-haul driving and irregular road conditions. The high-flux N52 magnetic array provides a 3000g holding force, ensuring your device remains static even during extreme vibrations.',
        image: 'https://sc02.alicdn.com/kf/H9e7f94d87a0a4b8d951c3ba7d14c89b6k.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'PRODUCT ARCHITECTURE',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H9e7f94d87a0a4b8d951c3ba7d14c89b6k.jpg', label: 'Console View', desc: 'Minimalist dashboard integration.' },
          { img: 'https://sc02.alicdn.com/kf/Hd41f099106f04d67972d63a00027cc25Q.jpg', label: 'Slim Profile', desc: 'Aerodynamic alloy side-view design.' },
          { img: 'https://sc02.alicdn.com/kf/H994073f7f21b4f4a9233da22cc007256L.jpg', label: 'Precision Pivot', desc: 'Reinforced 360 degree rotation core.' },
          { img: 'https://sc02.alicdn.com/kf/H5b4a9b221da943cbb16a69469650f155o.jpg', label: 'Internal Array', desc: 'Cross-section of N52 magnetic power.' }
        ]
      },
      {
        type: 'tech_features_grid',
        title: 'INQUIRY INFORMATION',
        features: [
          { n: '✔', label: 'Product Type', desc: 'Specify model and color requirements.' },
          { n: '✔', label: 'Estimated Quantity', desc: 'Bulk MOQ starts from 500 pcs.' },
          { n: '✔', label: 'Logo Requirement', desc: 'Free laser branding available.' },
          { n: '✔', label: 'Packaging Requirement', desc: 'Custom retail boxes from 10k units.' },
          { n: '✔', label: 'Target Market', desc: 'North America, Europe, SE Asia etc.' },
          { n: '✔', label: 'Shipping Destination', desc: 'Provide city/port for freight quote.' }
        ]
      },
      {
        type: 'trust_badges',
        title: 'B2B SERVICE STANDARDS',
        badges: [
          { label: 'Free Laser Logo' },
          { label: 'Custom Packaging' },
          { label: 'Product Color Customization' },
          { label: 'User Manual Printing' },
          { label: 'Barcode Labels' },
          { label: 'Amazon FNSKU Labels' }
        ]
      }
    ]
  }
];
