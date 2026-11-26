export interface SheetMetalPillarItem {
  number: string;
  title: string;
  content: string;
}

export interface SheetMetalProductPillars {
  processing: string;
  material: string;
  finishing: string;
  inputFormat: string;
}

export interface SheetMetalProductSpecs {
  material: string;
  thickness: string;
  processes: string;
  finishes: string;
  tolerances: string;
  inspection: string;
  inputFiles: string;
}

export interface SheetMetalComponentType {
  title: string;
  desc: string;
}

export interface SheetMetalTableRow {
  col1: string;
  col2: string;
  col3?: string;
  col4?: string;
}

export interface SheetMetalTable {
  title: string;
  subtitle?: string;
  headers: string[];
  rows: SheetMetalTableRow[];
}

export interface SheetMetalProductDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  image: string;
  pillars: SheetMetalProductPillars;
  pillarsList: SheetMetalPillarItem[];
  features: string[];
  specs: SheetMetalProductSpecs;
  componentTypes: SheetMetalComponentType[];
  componentRange: string[];
  tables?: SheetMetalTable[];
}

export interface SheetMetalCatalogItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  desc: string;
  link: string;
}

// ── 1. Individual Product Definitions (Brochure Pages 98–105) ──

/**
 * 01. Sheet Metal Press Parts (Brochure Page 100)
 */
export const sheetMetalPressParts: SheetMetalProductDetail = {
  id: 'sheet-metal-press-parts',
  slug: 'sheet-metal-press-parts',
  title: 'Press Parts',
  category: 'CUSTOM PRESS & STAMPED COMPONENTS',
  badge: 'BLANKING · PIERCING · BENDING · FORMING',
  tagline:
    'Custom sheet metal components formed on high-tonnage precision presses, manufactured strictly to customer drawings, CAD models, or physical samples.',
  image: '/assets/sheet_metal/page_98_img_0.webp',
  pillars: {
    processing: 'Blanking, piercing, bending and forming of sheet and strip metal.',
    material: 'Mild Steel, Stainless Steel, Brass, Copper, Aluminium and other materials as specified.',
    finishing: 'Deburring, plating, passivation, polishing, powder coating and painting, as required.',
    inputFormat: '2D CAD files (DWG, DXF, PDF), 3D files (STEP/STP) or physical samples.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Processing',
      content: 'Blanking, piercing, bending and forming of sheet and strip metal.',
    },
    {
      number: '02',
      title: 'Material',
      content: 'Mild Steel, Stainless Steel, Brass, Copper, Aluminium and other materials as specified.',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Deburring, plating, passivation, polishing, powder coating and painting, as required.',
    },
    {
      number: '04',
      title: 'Input Format',
      content: '2D CAD files (DWG, DXF, PDF), 3D files (STEP/STP) or physical samples.',
    },
  ],
  features: [
    'Progressive and compound die stamping for high-speed, repeatable mass production.',
    'Tight dimensional tolerances (±0.05 mm to ±0.2 mm) across complex bends and forms.',
    'Controlled deburring and edge rounding to ensure safe handling and assembly.',
    'Multi-metal processing capacity spanning 0.4 mm to 6.0 mm sheet thickness.',
    'In-house tooling inspection, CMM dimensional verification, and quality sign-off.',
    'Full material test certificates (MTC 3.1) and surface coating thickness reports.',
  ],
  specs: {
    material: 'Mild Steel, Stainless Steel, Brass, Copper, Aluminium and other materials as specified',
    thickness: '0.4 mm to 6.0 mm (as drawing calls for)',
    processes: 'Blanking, Piercing, Bending, Forming, Stamping, Shallow Drawing',
    finishes: 'Deburring, Plating, Passivation, Polishing, Powder Coating, Painting (as required)',
    tolerances: '±0.05 mm to ±0.2 mm',
    inspection: 'CMM, Optical Profile Projector, Vernier, Plug Gauges',
    inputFiles: '2D CAD files (DWG, DXF, PDF), 3D files (STEP/STP) or physical samples',
  },
  componentTypes: [
    {
      title: 'Blanked Parts',
      desc: 'Flat components cut to precise contour shape, including plates, washers, shims, and spacers.',
    },
    {
      title: 'Pierced Parts',
      desc: 'Components featuring precision holes, slots, and cut-outs for fastening and bolt alignment.',
    },
    {
      title: 'Bent & Formed Parts',
      desc: 'Shaped structural components such as brackets, clips, channels, angles, and protective covers.',
    },
    {
      title: 'Drawn Parts',
      desc: 'Three-dimensional components such as shallow cups, shells, and motor housings formed through deep drawing.',
    },
  ],
  componentRange: [
    'Blanked Parts (Plates, Washers, Shims)',
    'Pierced Parts (Terminals, Brackets, Flanges)',
    'Bent & Formed Parts (Clips, Channels, Angles)',
    'Drawn Parts (Cups, Shells, Motor Housings)',
  ],
  tables: [
    {
      title: 'Core Production Pillars (Brochure Page 100)',
      subtitle: 'Technical capabilities and processing parameters for custom sheet metal press parts',
      headers: ['Pillar', 'Specifications & Technical Parameters'],
      rows: [
        {
          col1: 'Processing',
          col2: 'Blanking, piercing, bending and forming of sheet and strip metal.',
        },
        {
          col1: 'Material',
          col2: 'Mild Steel, Stainless Steel, Brass, Copper, Aluminium and other materials as specified.',
        },
        {
          col1: 'Finishing',
          col2: 'Deburring, plating, passivation, polishing, powder coating and painting, as required.',
        },
        {
          col1: 'Input Format',
          col2: '2D CAD files (DWG, DXF, PDF), 3D files (STEP/STP) or physical samples.',
        },
      ],
    },
  ],
};

/**
 * 02. Stainless Steel Banding Products (Brochure Page 102)
 */
export const stainlessSteelBanding: SheetMetalProductDetail = {
  id: 'stainless-steel-banding',
  slug: 'stainless-steel-banding',
  title: 'Stainless Steel Banding Products',
  category: 'STAINLESS STEEL BANDING SOLUTIONS',
  badge: 'SS201 · SS304 · SS316 · SS430',
  tagline:
    'High-tensile, corrosion-resistant stainless steel strapping and perforated banding engineered for severe industrial, utility, and marine clamping.',
  image: '/assets/sheet_metal/page_99_img_0.webp',
  pillars: {
    processing: 'Precision slitting, continuous deburring, tension levelling and perforation punching.',
    material: 'Stainless Steel (SS201, SS304, SS316, SS430) and Aluminium.',
    finishing: 'Uncoated mill finish, PVC thermoplastic coating, and PPA 571 polymer coating.',
    inputFormat: 'Standard roll lengths (30.5m / 50m coils), custom strip lengths or perforated coils.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Processing',
      content: 'Precision slitting, continuous deburring, tension levelling and perforation punching.',
    },
    {
      number: '02',
      title: 'Material',
      content: 'Stainless Steel (SS201, SS304, SS316, SS430) and Aluminium.',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Uncoated mill finish, PVC thermoplastic coating, and PPA 571 polymer coating.',
    },
    {
      number: '04',
      title: 'Input Format',
      content: 'Standard roll lengths (30.5m / 50m coils), custom strip lengths or perforated coils.',
    },
  ],
  features: [
    'Fully deburred, rounded smooth safety edges preventing worker injury and cable cuts.',
    'High tensile breaking strength up to 1500 N/mm² (SS201 grade) for secure pole mounting.',
    'Extreme weather, UV, and salt spray resistance (SS316 marine grade).',
    'Available in bare metallic finish, protective PPA 571 polymer coating, or PVC coating.',
    'Supplied in portable 30.5m (100 ft) / 50m coils in weather-resistant tote dispensers.',
    'Compatible with standard tensioner tools, pistol-grip banders, and buckle crimpers.',
  ],
  specs: {
    material: 'AISI 201, AISI 304, AISI 316, AISI 430 Stainless Steel, Aluminium',
    thickness: '0.38 mm to 0.76 mm',
    processes: 'Precision Slitting, Continuous Edge Deburring, Perforation Punching, Coating',
    finishes: 'Uncoated Bright Finish, PVC Thermoplastic Coated, PPA 571 Polymer Coated',
    tolerances: 'Width: ±0.1 mm, Thickness: ±0.02 mm',
    inspection: 'Tensile Strength Testing, Salt Spray Testing (ASTM B117), Coating Adhesion',
    inputFiles: 'Standard catalog sizes or customized perforation drawings',
  },
  componentTypes: [
    {
      title: 'All-Purpose Uncoated Bands',
      desc: 'Perforated banding without a polymer coating for general industrial fastening and mounting. Available in different material grades and roll lengths.',
    },
    {
      title: 'PVC-Coated Bands',
      desc: 'Stainless steel banding with a PVC thermoplastic coating for industrial fastening, bundling and mounting.',
    },
    {
      title: 'PPA 571-Coated Bands',
      desc: 'Stainless steel banding with a PPA 571 polymer coating for outdoor installations and demanding industrial environments.',
    },
    {
      title: 'All-Purpose PPA 571-Coated Bands',
      desc: 'Perforated, polymer-coated banding for general-purpose fastening and mounting.',
    },
    {
      title: 'Aluminium Perforated Strips',
      desc: 'Lightweight aluminium strips with evenly spaced holes for light-duty fastening and mounting using screws, bolts or cable ties.',
    },
  ],
  componentRange: [
    'All-Purpose Uncoated Bands',
    'PVC-Coated Bands',
    'PPA 571-Coated Bands',
    'All-Purpose PPA 571-Coated Bands',
    'Aluminium Perforated Strips',
  ],
  tables: [
    {
      title: 'Stainless Steel Banding Products Classification (Brochure Page 102)',
      subtitle: 'Complete range of uncoated, polymer-coated, and aluminium banding solutions',
      headers: ['Product Name', 'Finish / Class', 'Specifications & Applications'],
      rows: [
        {
          col1: 'All-Purpose Uncoated Bands',
          col2: 'Uncoated',
          col3: 'Perforated banding without a polymer coating for general industrial fastening and mounting. Available in different material grades and roll lengths.',
        },
        {
          col1: 'PVC-Coated Bands',
          col2: 'Coated',
          col3: 'Stainless steel banding with a PVC thermoplastic coating for industrial fastening, bundling and mounting.',
        },
        {
          col1: 'PPA 571-Coated Bands',
          col2: 'Coated',
          col3: 'Stainless steel banding with a PPA 571 polymer coating for outdoor installations and demanding industrial environments.',
        },
        {
          col1: 'All-Purpose PPA 571-Coated Bands',
          col2: 'Coated',
          col3: 'Perforated, polymer-coated banding for general-purpose fastening and mounting.',
        },
        {
          col1: 'Aluminium Perforated Strips',
          col2: 'Aluminium',
          col3: 'Lightweight aluminium strips with evenly spaced holes for light-duty fastening and mounting using screws, bolts or cable ties.',
        },
      ],
    },
  ],
};

/**
 * 03. Pre-Cut Straps & Buckles (Brochure Page 103)
 */
export const preCutStrapsBuckles: SheetMetalProductDetail = {
  id: 'banding-buckles-fasteners',
  slug: 'pre-cut-straps-buckles',
  title: 'Pre-Cut Straps & Buckles',
  category: 'BANDING FASTENERS & ACCESSORIES',
  badge: 'JAW · WING · SCREW BUCKLES',
  tagline:
    'Heavy-duty stainless steel pre-cut strapping, wing seals, jaw clips, and screw buckles engineered for maximum tension retention on strapped bundles.',
  image: '/assets/sheet_metal/page_100_img_0.webp',
  pillars: {
    processing: 'Heavy-gauge stamping, ear-forming, tooth punch locking, and deburring.',
    material: 'Stainless Steel (AISI 201, AISI 304, AISI 316 heavy-gauge).',
    finishing: 'Uncoated bright polished, passivated, or polymer-coated matching strap finishes.',
    inputFormat: 'Standard buckle widths (1/4" to 3/4") and custom pre-cut strap lengths.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Processing',
      content: 'Heavy-gauge stamping, ear-forming, tooth punch locking, and deburring.',
    },
    {
      number: '02',
      title: 'Material',
      content: 'Stainless Steel (AISI 201, AISI 304, AISI 316 heavy-gauge).',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Uncoated bright polished, passivated, or polymer-coated matching strap finishes.',
    },
    {
      number: '04',
      title: 'Input Format',
      content: 'Standard buckle widths (1/4" to 3/4") and custom pre-cut strap lengths.',
    },
  ],
  features: [
    'Heavy-duty ear-lock design locks strap ends firmly, preventing backlash slippage.',
    'Supports both single-wrap (standard duty) and double-wrap (extra heavy-duty) strapping.',
    'Manufactured in SS201, SS304, and SS316 for matched corrosion resistance.',
    'Pre-cut straps reduce jobsite installation time and eliminate field cutting scrap.',
    'Screw-type buckles allow re-tensioning, adjustment, and temporary strapping removal.',
    'Convenient packaging in durable 100 pcs per box for easy site distribution.',
  ],
  specs: {
    material: 'SS 201, SS 304, SS 316 Stainless Steel',
    thickness: '0.75 mm to 1.5 mm (Heavy-Gauge)',
    processes: 'Precision Progressive Stamping, Deburring, Forming',
    finishes: 'Uncoated Polished, Passivated, Polymer Coated',
    tolerances: 'Strict fit with 1/4", 3/8", 1/2", 5/8", 3/4" banding',
    inspection: 'Loop Pull-Off Tensile Test, Dimensional Inspection',
    inputFiles: 'Standard specifications or custom customer sample requirements',
  },
  componentTypes: [
    {
      title: 'Pre-Cut Jaw Straps',
      desc: 'Ready-to-use straps assembled with jaw-type buckles.',
    },
    {
      title: 'Pre-Cut Wing Straps',
      desc: 'Pre-cut straps assembled with wing-type buckles.',
    },
    {
      title: 'Screw Buckles',
      desc: 'Screw-type buckles designed for compatible banding straps and industrial fastening applications.',
    },
    {
      title: 'Jaw Buckles (Uncoated & Coated)',
      desc: 'Fastening components for compatible banding straps.',
    },
    {
      title: 'Wing Buckles (Uncoated & Coated)',
      desc: 'Wing-type buckles for compatible banding straps.',
    },
  ],
  componentRange: [
    'Pre-Cut Jaw Straps',
    'Pre-Cut Wing Straps',
    'Screw Buckles',
    'Jaw Buckles (Uncoated & Coated)',
    'Wing Buckles (Uncoated & Coated)',
  ],
  tables: [
    {
      title: 'Pre-Cut Straps & Buckles Classification (Brochure Page 103)',
      subtitle: 'Factory-assembled strapping bands and compatible heavy-duty buckle systems',
      headers: ['Component Name', 'Category', 'Description & Engineering Function'],
      rows: [
        {
          col1: 'Pre-Cut Jaw Straps',
          col2: 'Pre-Cut Straps',
          col3: 'Ready-to-use straps assembled with jaw-type buckles.',
        },
        {
          col1: 'Pre-Cut Wing Straps',
          col2: 'Pre-Cut Straps',
          col3: 'Pre-cut straps assembled with wing-type buckles.',
        },
        {
          col1: 'Screw Buckles',
          col2: 'Fastening Buckles',
          col3: 'Screw-type buckles designed for compatible banding straps and industrial fastening applications.',
        },
        {
          col1: 'Jaw Buckles (Uncoated & Coated)',
          col2: 'Fastening Buckles',
          col3: 'Fastening components for compatible banding straps.',
        },
        {
          col1: 'Wing Buckles (Uncoated & Coated)',
          col2: 'Fastening Buckles',
          col3: 'Wing-type buckles for compatible banding straps.',
        },
      ],
    },
  ],
};

/**
 * 04. Sign Mounting Brackets (Brochure Page 104)
 */
export const signMountingBrackets: SheetMetalProductDetail = {
  id: 'sign-mounting-brackets',
  slug: 'sign-mounting-brackets',
  title: 'Sign Mounting Brackets',
  category: 'POLE & INFRASTRUCTURE MOUNTING',
  badge: 'STRAIGHT & FLARED-LEG · SS201',
  tagline:
    'Heavy-duty stainless steel brackets engineered for secure, vibration-resistant mounting of traffic signs, junction boxes, and cameras to poles.',
  image: '/assets/sheet_metal/page_100_img_2.webp',
  pillars: {
    processing: 'High-tonnage die stamping, ribbed stiffening, slot punching, and tapping.',
    material: 'SS201 high-yield stainless steel; SS304/SS316 available on request.',
    finishing: 'Smooth tumbled deburring and passivation for outdoor weather resistance.',
    inputFormat: 'Mini, regular single-bolt, two-bolt, straight-leg, and flared-leg configurations.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Processing',
      content: 'High-tonnage die stamping, ribbed stiffening, slot punching, and tapping.',
    },
    {
      number: '02',
      title: 'Material',
      content: 'SS201 high-yield stainless steel; SS304/SS316 available on request.',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Smooth tumbled deburring and passivation for outdoor weather resistance.',
    },
    {
      number: '04',
      title: 'Input Format',
      content: 'Mini, regular single-bolt, two-bolt, straight-leg, and flared-leg configurations.',
    },
  ],
  features: [
    'Heavy-duty SS201 stainless steel construction providing superior wind-load resistance.',
    'Flared-leg design grips round, octagonal, and tapered poles securely without twisting.',
    'Straight-leg design provides stable flat seating on large square posts and flat walls.',
    'Universal slots accommodate 1/2" (12.7 mm) and 3/4" (19 mm) wide banding straps.',
    'Supplied with pre-installed stainless steel hex bolt and washer.',
    'Ideal for municipal signage, highway indicators, junction boxes, and security cameras.',
  ],
  specs: {
    material: 'SS201 High-Yield Stainless Steel (SS304/316 optional)',
    thickness: '1.5 mm to 2.0 mm Heavy-Duty Gauge',
    processes: 'Stamping, Ribbed Forming, Deburring, Passivation',
    finishes: 'Natural Tumbled Stainless Steel',
    tolerances: 'Slot size: 1/2" (12.7mm) and 3/4" (19mm)',
    inspection: 'Torsional Torque Test, Pull-Out Test, Salt Spray Verification',
    inputFiles: 'Standard specifications or custom municipal drawing requirements',
  },
  componentTypes: [
    {
      title: 'Mini Single-Bolt',
      desc: 'Compact mounting profile',
    },
    {
      title: 'Regular Single-Bolt',
      desc: 'Standard mounting arrangement',
    },
    {
      title: 'Two-Bolt Brackets',
      desc: 'Alternative two-bolt fastening',
    },
    {
      title: 'Straight-Leg',
      desc: 'Conventional mounting profile',
    },
    {
      title: 'Flared-Leg',
      desc: 'Outward-flared mounting profile',
    },
  ],
  componentRange: [
    'Mini Single-Bolt',
    'Regular Single-Bolt',
    'Two-Bolt Brackets',
    'Straight-Leg',
    'Flared-Leg',
  ],
  tables: [
    {
      title: 'Sign Mounting Brackets Available Configurations (Brochure Page 104)',
      subtitle: 'Available configurations and profiles for pole, post, and infrastructure mounting',
      headers: ['Configuration', 'Mounting Profile Type', 'Functional Description'],
      rows: [
        {
          col1: 'Mini Single-Bolt',
          col2: 'Single-Bolt Style',
          col3: 'Compact mounting profile',
        },
        {
          col1: 'Regular Single-Bolt',
          col2: 'Single-Bolt Style',
          col3: 'Standard mounting arrangement',
        },
        {
          col1: 'Two-Bolt Brackets',
          col2: 'Two-Bolt Style',
          col3: 'Alternative two-bolt fastening',
        },
        {
          col1: 'Straight-Leg',
          col2: 'Profile Style',
          col3: 'Conventional mounting profile',
        },
        {
          col1: 'Flared-Leg',
          col2: 'Profile Style',
          col3: 'Outward-flared mounting profile',
        },
      ],
    },
  ],
};

// ── 2. All Products Array ──

export const sheetMetalProducts: SheetMetalProductDetail[] = [
  sheetMetalPressParts,
  stainlessSteelBanding,
  preCutStrapsBuckles,
  signMountingBrackets,
];

// ── 3. Catalog Items for "OUR RANGE" Overview Section ──

export const sheetMetalCatalogItems: SheetMetalCatalogItem[] = [
  {
    id: 'sheet-metal-press-parts',
    title: 'Press Parts',
    category: 'CUSTOM PRESS & STAMPED COMPONENTS',
    badge: 'BLANKING · PIERCING · BENDING · FORMING',
    image: '/assets/sheet_metal/page_98_img_0.webp',
    desc: 'Custom sheet metal components formed on high-tonnage precision presses, manufactured strictly to customer drawings, CAD models, or physical samples.',
    link: '/products/sheet-metal-press-parts/sheet-metal-press-parts',
  },
  {
    id: 'stainless-steel-banding',
    title: 'Stainless Steel Banding Products',
    category: 'STAINLESS STEEL BANDING SOLUTIONS',
    badge: 'SS201 · SS304 · SS316 · SS430',
    image: '/assets/sheet_metal/page_99_img_0.webp',
    desc: 'High-tensile, corrosion-resistant stainless steel strapping and perforated banding engineered for severe industrial, utility, and marine clamping.',
    link: '/products/sheet-metal-press-parts/stainless-steel-banding',
  },
  {
    id: 'banding-buckles-fasteners',
    title: 'Pre-Cut Straps & Buckles',
    category: 'BANDING FASTENERS & ACCESSORIES',
    badge: 'JAW · WING · SCREW BUCKLES',
    image: '/assets/sheet_metal/page_100_img_0.webp',
    desc: 'Heavy-duty stainless steel pre-cut strapping, wing seals, jaw clips, and screw buckles engineered for maximum tension retention on strapped bundles.',
    link: '/products/sheet-metal-press-parts/pre-cut-straps-buckles',
  },
  {
    id: 'sign-mounting-brackets',
    title: 'Sign Mounting Brackets',
    category: 'POLE & INFRASTRUCTURE MOUNTING',
    badge: 'STRAIGHT & FLARED-LEG · SS201',
    image: '/assets/sheet_metal/page_100_img_2.webp',
    desc: 'Heavy-duty stainless steel brackets engineered for secure, vibration-resistant mounting of traffic signs, junction boxes, and cameras to poles.',
    link: '/products/sheet-metal-press-parts/sign-mounting-brackets',
  },
];

// ── 4. Product Details Lookup Record with Aliases ──

export const sheetMetalProductsDetails: Record<string, SheetMetalProductDetail> = {
  // Primary Slugs
  'sheet-metal-press-parts': sheetMetalPressParts,
  'stainless-steel-banding': stainlessSteelBanding,
  'pre-cut-straps-buckles': preCutStrapsBuckles,
  'sign-mounting-brackets': signMountingBrackets,

  // Sheet Metal Press Parts Aliases
  'press-parts': sheetMetalPressParts,
  'sheet-metal-press': sheetMetalPressParts,
  'sheet-metal': sheetMetalPressParts,
  'stamped-components': sheetMetalPressParts,
  'press-components': sheetMetalPressParts,
  'stamped-parts': sheetMetalPressParts,

  // Stainless Steel Banding Aliases
  'ss-banding': stainlessSteelBanding,
  banding: stainlessSteelBanding,
  'stainless-banding': stainlessSteelBanding,
  'stainless-steel-strapping': stainlessSteelBanding,
  strapping: stainlessSteelBanding,
  'steel-banding': stainlessSteelBanding,

  // Pre-Cut Straps & Buckles Aliases
  'banding-buckles-fasteners': preCutStrapsBuckles,
  buckles: preCutStrapsBuckles,
  'straps-buckles': preCutStrapsBuckles,
  'pre-cut-straps': preCutStrapsBuckles,
  'banding-buckles': preCutStrapsBuckles,
  'wing-buckles': preCutStrapsBuckles,
  'jaw-buckles': preCutStrapsBuckles,
  'screw-buckles': preCutStrapsBuckles,
  fasteners: preCutStrapsBuckles,

  // Sign Mounting Brackets Aliases
  brackets: signMountingBrackets,
  'sign-brackets': signMountingBrackets,
  'mounting-brackets': signMountingBrackets,
  'sign-mounting': signMountingBrackets,
  'pole-brackets': signMountingBrackets,
  'pole-mounting-brackets': signMountingBrackets,
};
