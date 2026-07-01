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
    subCategory: 'Heavy Duty',
    technique: 'Reinforced Vibration-Dampening Engineering',
    material: 'High-Density Zinc Alloy + N52 Neodymium Magnetic Array',
    spec: 'Rough Road Optimized &middot; Anti-Vibration Base &middot; Dual-Axis Rotation',
    description: 'Looking for reliable OEM manufacturing for high-strength magnetic phone mounts? This model is specifically engineered for rough roads and long-distance driving, providing extreme stability for global tech brands. We provide flexible OEM & ODM support for brands, wholesalers, and distributors worldwide. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/H994073f7f21b4f4a9233da22cc007256L.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'UNRIVALED STABILITY',
        subtitle: 'Built for Rough Terrains',
        text: 'Engineered with a reinforced mechanical structure and high-flux N52 magnets, this mount ensures your device remains rock-solid even on the most irregular surfaces and during high-vibration long-distance hauls.',
        image: 'https://sc02.alicdn.com/kf/H7e63acefb641459fb9b2abc3e33b3a6ei.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'MULTI-VIEW PERFORMANCE',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H7e63acefb641459fb9b2abc3e33b3a6ei.jpg', label: 'In-Car Usage', desc: 'Secure mounting for professional drivers.' },
          { img: 'https://sc02.alicdn.com/kf/Hd41f099106f04d67972d63a00027cc25Q.jpg', label: 'Screen Mounting', desc: 'Edge-compatible design for modern EVs.' },
          { img: 'https://sc02.alicdn.com/kf/H9e7f94d87a0a4b8d951c3ba7d14c89b6k.jpg', label: 'Pivot System', desc: 'Dual-axis 360 degree adjustable head.' },
          { img: 'https://sc02.alicdn.com/kf/H5b4a9b221da943cbb16a69469650f155o.jpg', label: 'Magnetic Core', desc: 'Internal multi-layer N52 array structure.' }
        ]
      },
      {
        type: 'tech_features_grid',
        title: 'INQUIRY INFORMATION',
        features: [
          { n: '✔', label: 'Product Type', desc: 'Specify model/finish requirements.' },
          { n: '✔', label: 'Estimated Quantity', desc: 'Bulk MOQ starts from 500 pcs.' },
          { n: '✔', label: 'Logo Requirement', desc: 'Free laser engraving available.' },
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
  },
  {
    id: 'premium-oem-car-mount',
    name: 'Premium OEM Magnetic Car Mount Supplier for Wholesale and Private Label Brands',
    category: 'Magnetic Mounts',
    subCategory: 'Universal Stick-on',
    technique: 'Precision CNC Machining & Magnetic Engineering',
    material: 'High-Grade Aluminum Alloy + N52 Neodymium Magnets',
    spec: 'Universal Surface Adhesion &middot; Ultra-Slim Industrial Design &middot; 360° Ball Joint',
    description: 'The ultimate universal magnetic anchor designed for total freedom. With premium 3M high-bond adhesive, this mount sticks to any smooth surface—kitchens, gyms, dashboards, or office desks. We provide flexible OEM & ODM support for global brands. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/H2eee9b294fbb474a89c8643dfecc3982F.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'UNIVERSAL MAGNETIC ANCHOR',
        subtitle: 'Stick Anywhere, Snap Always',
        text: 'A high-performance magnetic base designed for total flexibility. Whether on a car dashboard, gym equipment, kitchen mirror, or office monitor, this universal anchor provides a rock-solid MagSafe-compatible point for your device.',
        image: 'https://sc02.alicdn.com/kf/H03c33054b031469fbf229db8b79e9f4fz.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'TECHNICAL ARCHITECTURE',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H03c33054b031469fbf229db8b79e9f4fz.jpg', label: 'Stick Anywhere', desc: 'Premium 3M adhesive base for versatile mounting on any smooth surface.' },
          { img: 'https://sc02.alicdn.com/kf/H4cdfee24db1e4c47a751335640fcaeb79.jpg', label: 'Universal Usage', desc: 'Perfect for kitchens, gyms, mirrors, and office environments.' },
          { img: 'https://sc02.alicdn.com/kf/H66a9518873304e679eee35d3d18471c8y.jpg', label: 'Space Structure', desc: 'Multi-layer architecture including N52 magnets and high-grade alloy shell.' }
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
  },
  {
    id: 'heavy-duty-bicycle-mount',
    name: 'RuggedRide™ Pro Bicycle Phone Mount with Mechanical Security Lock',
    category: 'Bike Mounts',
    subCategory: 'Bicycle',
    technique: 'Quick-Release Mechanical Locking System',
    material: 'High-Impact Polycarbonate + Stainless Steel Reinforcement',
    spec: 'One-Click Lock &middot; Handlebar Universal Fit &middot; Shock-Absorbing Pads',
    description: 'Looking for reliable OEM manufacturing for bicycle phone mounts? The RuggedRide™ Pro offers ultimate security with a mechanical locking mechanism designed for city commuting and off-road cycling. We provide flexible OEM & ODM support for global brands. Our sales team will reply within 24 hours.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    contentSections: [
      {
        type: 'split_content',
        title: 'MECHANICAL SECURITY',
        subtitle: 'Bicycle Optimized Grip',
        text: 'Featuring a one-click mechanical locking system that wraps around all four corners of the device, providing absolute security even on high-vibration mountain trails.',
        image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
      },
      {
        type: 'trust_badges',
        title: 'B2B MANUFACTURING SPECS',
        badges: [
          { label: 'MOQ: 1000 PCS' },
          { label: 'Custom Color Plastic' },
          { label: '50k Units / 25 Days' },
          { label: 'Amazon Ready' }
        ]
      }
    ]
  },
  {
    id: 'dashboard-360-adjustable-mount',
    name: 'Strong Magnetic Dashboard Phone Holder with 360 Degree Adjustable Viewing Angles',
    category: 'Magnetic Mounts',
    subCategory: 'Dashboard & Adjustable',
    technique: 'Multi-Axis Precision Rotation Engineering',
    material: 'Premium Aluminum Alloy + Dual-Array N52 Magnets',
    spec: '360° Seamless Adjustment &middot; Dashboard Secure-Bond &middot; Multiple Anodized Finishes',
    description: 'The ultimate flexibility for modern drivers. This high-strength magnetic mount offers full 360-degree rotation for the perfect viewing angle. We provide flexible OEM & ODM support for brands, wholesalers, and Amazon sellers worldwide. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/H616edf5fe6064d2a8b8b7616aefe93feN.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'DYNAMIC FLEXIBILITY',
        subtitle: '360° Viewing Control',
        text: 'Featuring a high-performance mechanical ball joint, this mount allows for effortless switching between vertical and horizontal orientations, providing safe navigation and optimal accessibility on any dashboard.',
        image: 'https://sc02.alicdn.com/kf/H37644c87406449abbbd4d5e709f8b1ecd.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'LUXURY COLOR COLLECTION',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H616edf5fe6064d2a8b8b7616aefe93feN.jpg', label: 'Matte Black', desc: 'Sleek industrial finish.' },
          { img: 'https://sc02.alicdn.com/kf/H18a3a309f79c41f7b785e2918daa6b1cH.jpg', label: 'Brushed Silver', desc: 'Premium metal texture.' },
          { img: 'https://sc02.alicdn.com/kf/H1f927968aab24d91aed6f144c5032160X.jpg', label: 'Champagne Gold', desc: 'Elegant luxury aesthetic.' },
          { img: 'https://sc02.alicdn.com/kf/He68a4a31253849c8b32ebf64b727c67eo.jpg', label: 'Modern Rose Gold', desc: 'Lifestyle focused design.' }
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
        title: 'OEM & PRIVATE LABEL SERVICES',
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
    id: 'premium-oem-bike-mount',
    name: 'Premium OEM Motobike and Bike Mount Phone Holder for Wholesale Easy',
    category: 'Bike Mounts',
    subCategory: 'Motorcycle & Bicycle',
    technique: 'Heavy-Duty Clamp & Quick-Install Engineering',
    material: 'High-Impact PC + Stainless Steel Hardware + Anti-Slip Silicone',
    spec: 'Universal Handlebar Fit &middot; Tool-Free Installation &middot; One-Click Secure Lock',
    description: 'Looking for reliable OEM manufacturing for motorcycle and bicycle phone mounts? Our premium two-wheeler mount features a rugged clamp system and quick-lock mechanism designed for extreme stability and ease of use. We provide flexible OEM & ODM support for brands, wholesalers, and distributors worldwide. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/H9fc05e8f84a14908be389c25deeca09bQ.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'RUGGED STABILITY',
        subtitle: 'Easy Multi-Vehicle Use',
        text: 'Engineered for both motorized and manual bicycles, this mount utilizes a tool-free installation system and a mechanical safety lock, ensuring your phone stays in place across all terrains.',
        image: 'https://sc02.alicdn.com/kf/H1381d5edf3b24ff096c520ed2ffe4cd1v.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'DETAILED VIEW',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H9fc05e8f84a14908be389c25deeca09bQ.jpg', label: 'Handlebar Mount', desc: 'Secure grip for high-speed riding.' },
          { img: 'https://sc02.alicdn.com/kf/H1c6230cbf00a44b285bcc05abb6ea2135.jpg', label: 'Side Protection', desc: 'Shock-absorbing silicone corner pads.' },
          { img: 'https://sc02.alicdn.com/kf/H1381d5edf3b24ff096c520ed2ffe4cd1v.jpg', label: 'Front Profile', desc: 'Minimalist aerodynamic design.' },
          { img: 'https://sc02.alicdn.com/kf/Hb85a1c931f4d4f21a3b88cff725cbaedj.jpg', label: 'Base Clamp', desc: 'Reinforced stainless steel pivot.' }
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
          { label: 'Amazon FNSKU Labels' },
          { label: '30k Units / 20 Days' }
        ]
      }
    ]
  },
  {
    id: 'magnetic-charging-bike-mount',
    name: 'Professional OEM Wireless Charging Bike Motocycle Mount with Fast Production and Global Shipping',
    category: 'Bike Mounts',
    subCategory: 'Charging & Waterproof',
    technique: '15W Wireless Fast Charging & IP66 Waterproofing',
    material: 'High-Strength Synthetic Polymer + Brass Electronics + Stainless Steel Hardware',
    spec: '15W Fast Charge &middot; Built-in High-Capacity Battery &middot; IP66 Waterproof Protection',
    description: 'Looking for reliable OEM manufacturing for wireless charging phone mounts? This professional model features integrated 15W fast charging, a built-in backup battery, and a rugged IP66-rated waterproof housing for extreme environments. We provide flexible OEM & ODM support for global brands and Amazon sellers. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/Hd36c508aa7d1469593e68c9c9fbe65d2m.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'ALL-WEATHER CHARGING',
        subtitle: '15W Fast Wireless Power',
        text: 'Engineered for long-distance rides in any climate. The integrated 15W wireless charging pad combined with an internal high-capacity battery ensures your device stays powered, while the IP66 sealed casing protects against heavy rain and dust.',
        image: 'https://sc02.alicdn.com/kf/Ha8c328adfdd54b389fceddea385ff0f8D.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'ENGINEERING DETAILS',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H65b3ef2c8ea6429ea5afb799186c01b13.jpg', label: 'Multi-Cable Interface', desc: 'Versatile input/output for external power sourcing.' },
          { img: 'https://sc02.alicdn.com/kf/H5c7f4b391b5043caa8cc8b80721576feh.jpg', label: 'Anti-Slip Clamp', desc: 'Industrial handlebar grip with vibration dampening.' },
          { img: 'https://sc02.alicdn.com/kf/H868bfc006e604f18ab7b453bdfe59959x.jpg', label: 'Power Management', desc: 'Waterproof cover with integrated power switch.' }
        ]
      },
      {
        type: 'tech_features_grid',
        title: 'INQUIRY INFORMATION',
        features: [
          { n: '✔', label: 'Product Type', desc: 'Specify charger model and mounting options.' },
          { n: '✔', label: 'Estimated Quantity', desc: 'Bulk MOQ starts from 500 pcs.' },
          { n: '✔', label: 'Logo Requirement', desc: 'Free laser branding available.' },
          { n: '✔', label: 'Packaging Requirement', desc: 'Custom retail boxes from 10k units.' },
          { n: '✔', label: 'Target Market', desc: 'Europe, NA, SE Asia compliance ready.' },
          { n: '✔', label: 'Shipping Destination', desc: 'Provide city/port for logistics calculation.' }
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
          { label: 'Amazon FNSKU Labels' },
          { label: '30k Units / 20 Days' }
        ]
      }
    ]
  },
  {
    id: 'universal-scooter-gps-mount',
    name: 'Universal Scooter Phone Mount with Strong Grip for Daily Riding and GPS Navigation',
    category: 'Bike Mounts',
    subCategory: 'Scooter & Navigation',
    technique: 'All-Weather Waterproof & Magnetic Stability',
    material: 'High-Performance Synthetic Material + Stainless Hardware + N52 Magnet Array',
    spec: 'IPX6 Waterproof Sealing &middot; Magnetic Rapid-Alignment &middot; 360° Viewing Control',
    description: 'Looking for reliable OEM manufacturing for high-grip scooter navigation mounts? This model is specifically optimized for daily riding and GPS navigation, providing extreme stability for global brands and Amazon sellers. We provide flexible OEM & ODM support for brands, wholesalers, and distributors worldwide. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/Hb8d3f3352d7f4768b4f6eafa318a0152h.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'NAVIGATION OPTIMIZED',
        subtitle: 'All-Weather Visibility',
        text: 'Specifically developed for scooter commuters. The IPX6-rated housing combined with a magnetic rapid-alignment system ensures your phone stays static and readable even in heavy rain or high-speed urban transit.',
        image: 'https://sc02.alicdn.com/kf/Hb8d3f3352d7f4768b4f6eafa318a0152h.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'TECHNICAL OVERVIEW',
        items: [
          { img: 'https://sc02.alicdn.com/kf/Ha4f7c8e9da77478b9a489e24b9cb8027s.jpg', label: 'Magnetic Core', desc: 'Secure N52 alignment for easy mounting.' },
          { img: 'https://sc02.alicdn.com/kf/H4e6b75b5617946e38c8d45568ca03e2aZ.jpg', label: 'Handlebar Mount', desc: 'Robust mechanical grip for scooter bars.' },
          { img: 'https://sc02.alicdn.com/kf/H287507f86a444f57aca2769898e2d75ac.jpg', label: 'Precision Pivot', desc: 'Multi-axis rotation for optimal GPS viewing.' }
        ]
      },
      {
        type: 'tech_features_grid',
        title: 'INQUIRY INFORMATION',
        features: [
          { n: '✔', label: 'Product Type', desc: 'Specify navigation series and clamp size.' },
          { n: '✔', label: 'Estimated Quantity', desc: 'Bulk MOQ starts from 500 pcs.' },
          { n: '✔', label: 'Logo Requirement', desc: 'Free laser branding available.' },
          { n: '✔', label: 'Packaging Requirement', desc: 'Custom retail boxes from 10k units.' },
          { n: '✔', label: 'Target Market', desc: 'Global shipping and compliance support.' },
          { n: '✔', label: 'Shipping Destination', desc: 'Provide city/port for freight calculation.' }
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
          { label: 'Amazon FNSKU Labels' },
          { label: '30k Units / 20 Days' }
        ]
      }
    ]
  },
  {
    id: 'heavy-duty-scooter-holder',
    name: 'Heavy Duty Electric Scooter Phone Holder with Anti Shake Locking and Secure Installation',
    category: 'Bike Mounts',
    subCategory: 'Scooter & Anti-Shake',
    technique: 'Anti-Shake Mechanical Locking & Waterproof Sealing',
    material: 'Reinforced Engineering Plastics + Stainless Steel Hardware + Silicone Cushions',
    spec: '360° Rotating Pivot &middot; IPX6 Sealed Buttons &middot; High-Speed Anti-Vibration Base',
    description: 'Looking for reliable OEM manufacturing for heavy-duty scooter mounts? This professional model features advanced anti-shake mechanical locking and a secure installation system, specifically optimized for high-speed electric scooters. We provide flexible OEM & ODM support for brands, wholesalers, and distributors worldwide. Our sales team will reply within 24 hours.',
    image: 'https://sc02.alicdn.com/kf/Hc229f89de0164605a9e1ed41c8492109R.jpg',
    contentSections: [
      {
        type: 'split_content',
        title: 'EXTREME STABILITY',
        subtitle: 'Anti-Shake Locking System',
        text: 'Specifically engineered for the high-vibration environment of electric scooters. The integrated anti-shake mechanical lock combined with a secure mounting base ensures your device remains rock-solid even on uneven urban surfaces.',
        image: 'https://sc02.alicdn.com/kf/Hc229f89de0164605a9e1ed41c8492109R.jpg'
      },
      {
        type: 'detail_gallery',
        title: 'ENGINEERING EXCELLENCE',
        items: [
          { img: 'https://sc02.alicdn.com/kf/H45770ede937b43df9771ab54d9caec86J.jpg', label: 'Waterproof Seal', desc: 'Sealed button and housing for all-weather riding.' },
          { img: 'https://sc02.alicdn.com/kf/H3d603ba310d84d349e901b83125df96bA.jpg', label: 'Secure Slide Lock', desc: 'One-click slide mechanism for instant security.' },
          { img: 'https://sc02.alicdn.com/kf/H90b307ed513d4c1ca9a69ebedfb6a27ei.jpg', label: 'Multi-Axis View', desc: '360-degree rotation for optimal navigation angles.' }
        ]
      },
      {
        type: 'tech_features_grid',
        title: 'INQUIRY INFORMATION',
        features: [
          { n: '✔', label: 'Product Type', desc: 'Specify Scooter series and mounting options.' },
          { n: '✔', label: 'Estimated Quantity', desc: 'Bulk MOQ starts from 500 pcs.' },
          { n: '✔', label: 'Logo Requirement', desc: 'Free laser branding available.' },
          { n: '✔', label: 'Packaging Requirement', desc: 'Custom retail boxes from 10k units.' },
          { n: '✔', label: 'Target Market', desc: 'Global shipping and compliance support.' },
          { n: '✔', label: 'Shipping Destination', desc: 'Provide city/port for freight calculation.' }
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
          { label: 'Amazon FNSKU Labels' },
          { label: '30k Units / 20 Days' }
        ]
      }
    ]
  }
];

