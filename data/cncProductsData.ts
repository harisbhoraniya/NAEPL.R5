export interface CncPillarItem {
  number: string;
  title: string;
  content: string;
}

export interface CncProductPillars {
  capabilities: string;
  material: string;
  finishing: string;
  inputFiles: string;
}

export interface CncProductSpecs {
  material: string;
  tolerance: string;
  surfaceFinish: string;
  processes: string;
  finishes: string;
  inspection: string;
  inputFiles: string;
}

export interface CncProductDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  image: string;
  brochurePage: string;
  pillars: CncProductPillars;
  pillarsList: CncPillarItem[];
  features: string[];
  specs: CncProductSpecs;
  componentRange: string[];
}

export interface CncCatalogItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  desc: string;
  link: string;
}

// ── 1. Individual Product Definitions ──

export const copperMachinedComponents: CncProductDetail = {
  id: 'copper-machined-components',
  slug: 'copper-machined-components',
  title: 'Copper Precision Machined Components',
  category: 'COPPER PRECISION MACHINED COMPONENTS',
  badge: 'C11000 · C10200 · C14500 · C18200',
  tagline: 'Custom precision CNC turned, milled, and drilled copper components manufactured strictly to customer drawings and CAD models.',
  image: '/assets/cnc_machined/page_92_img_9.webp',
  brochurePage: 'Brochure Page 94',
  pillars: {
    capabilities: 'CNC turning, milling, drilling, threading and knurling to customer requirements.',
    material:
      'Grades such as C11000 (Cu-ETP, CW004A), C10200 (Cu-OF), C14500 (tellurium copper) and C18200 (chromium copper); other grades whenever the customer asks.',
    finishing: 'Polishing, nickel plating, tin plating and passivation, available on request.',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Capabilities',
      content: 'CNC turning, milling, drilling, threading and knurling to customer requirements.',
    },
    {
      number: '02',
      title: 'Material',
      content:
        'Grades such as C11000 (Cu-ETP, CW004A), C10200 (Cu-OF), C14500 (tellurium copper) and C18200 (chromium copper); other grades whenever the customer asks.',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Polishing, nickel plating, tin plating and passivation, available on request.',
    },
    {
      number: '04',
      title: 'Input Files',
      content: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
    },
  ],
  features: [
    'High electrical & thermal conductivity for power distribution and switchgear terminals.',
    'Tight machining tolerances down to ±0.005 mm with high concentricity.',
    'Comprehensive surface treatments including bright acid dip, nickel, tin plating, and passivation.',
    'Custom thread pitches (Metric, BSP, NPT, UNF) verified with calibrated thread gauges.',
    'Pre-production CAD/CAM design feasibility review and rapid prototype sampling.',
    'Strict batch traceability with full material test certificates (MTC 3.1).',
  ],
  specs: {
    material: 'C11000 (Cu-ETP, CW004A), C10200 (Cu-OF), C14500, C18200',
    tolerance: '±0.005 mm to ±0.02 mm',
    surfaceFinish: 'Ra 0.4 to Ra 1.6 μm',
    processes: 'CNC Turning, Milling, Drilling, Threading, Knurling',
    finishes: 'Polishing, Nickel Plating, Tin Plating, Passivation (on request)',
    inspection: 'CMM, Optical Profile Projector, Thread Gauges',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or physical sample',
  },
  componentRange: [
    'Stepped Terminal Pin',
    'Threaded-End Flanged Pin',
    'Hex Nut / Hex Bush',
    'Knurled Cap',
    'Hose Nipple / Threaded Connector',
    'Multi-Hole Flange Bush',
    'Slotted Threaded Sleeve',
    'Cross-Hole Block',
    'Long Contact Pin / Tube Socket',
  ],
};

export const stainlessSteelCncComponents: CncProductDetail = {
  id: 'stainless-steel-cnc-components',
  slug: 'stainless-steel-cnc-components',
  title: 'Stainless Steel CNC Machined Components',
  category: 'STAINLESS STEEL MACHINED COMPONENTS',
  badge: 'SS 303 · 304 · 316 · 316L · 410 · 416 · 420 · 17-4PH',
  tagline: 'High-precision corrosion-resistant stainless steel turned, milled, and threaded parts for marine, chemical, and industrial assemblies.',
  image: '/assets/cnc_machined/page_93_img_8.webp',
  brochurePage: 'Brochure Page 95',
  pillars: {
    capabilities: 'CNC turning, milling, drilling, threading and finishing to customer requirements.',
    material: 'Grades 303, 304, 316, 316L, 410, 416, 420 and 17-4PH; any other grade if required.',
    finishing: 'Polishing, electro polishing, passivation, nickel plating, bead blasting and brushing, on request.',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Capabilities',
      content: 'CNC turning, milling, drilling, threading and finishing to customer requirements.',
    },
    {
      number: '02',
      title: 'Material',
      content: 'Grades 303, 304, 316, 316L, 410, 416, 420 and 17-4PH; any other grade if required.',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Polishing, electro polishing, passivation, nickel plating, bead blasting and brushing, on request.',
    },
    {
      number: '04',
      title: 'Input Files',
      content: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
    },
  ],
  features: [
    'Superior corrosion resistance in marine, chemical, and offshore environments.',
    'Precision turning and 4-axis milling with surface roughness down to Ra 0.2 μm.',
    'Controlled internal bore concentricity and precise thread profiles.',
    'Electropolishing and passivation for high-purity sanitary and medical standards.',
    'Low to high volume production runs with consistent batch-to-batch repeatability.',
    '100% dimensional verification using calibrated micrometer and optical metrology.',
  ],
  specs: {
    material: 'Grades 303, 304, 316, 316L, 410, 416, 420 and 17-4PH',
    tolerance: '±0.005 mm to ±0.015 mm',
    surfaceFinish: 'Ra 0.2 to Ra 0.8 μm',
    processes: 'CNC Turning, Milling, Drilling, Threading and Finishing',
    finishes: 'Polishing, Electro Polishing, Passivation, Nickel Plating, Bead Blasting, Brushing (on request)',
    inspection: 'CMM 3D Inspection, Surface Roughness Tester, Gauges',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or physical sample',
  },
  componentRange: [
    'Flanged Threaded Bush',
    'Flange Sleeve',
    'Smooth Cylindrical Spacer / Sleeve',
    'Outer-Threaded Bush',
    'Internally Threaded Hex Adaptor',
    'Hex-Stepped Threaded Pin',
    'Collared Pin / Flanged Pin',
    'Stepped Plunger Shaft',
  ],
};

export const aluminiumMachinedComponents: CncProductDetail = {
  id: 'aluminium-machined-components',
  slug: 'aluminium-machined-components',
  title: 'Aluminium CNC Machined Components',
  category: 'ALUMINIUM CNC MACHINED COMPONENTS',
  badge: 'AL 1050 · 2011 · 2024 · 5052 · 6061 · 6063 · 6082 · 7075',
  tagline: 'Lightweight, high-strength CNC milled and turned aluminium components with aerospace-grade tolerances and anodized finishes.',
  image: '/assets/cnc_machined/page_94_img_0.webp',
  brochurePage: 'Brochure Page 96',
  pillars: {
    capabilities: 'CNC milling, turning, drilling, threading, tapping, boring, knurling and other precision machining to customer requirements.',
    material:
      'Aluminium grades including 1050, 2011, 2017, 2024, 5052, 5083, 6060, 6061, 6063, 6082, 7075 and other grades as per customer requirement.',
    finishing: 'Anodising, hard anodising, plating, brushing, polishing, bead blasting, powder coating and other treatments as required.',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Capabilities',
      content: 'CNC milling, turning, drilling, threading, tapping, boring, knurling and other precision machining to customer requirements.',
    },
    {
      number: '02',
      title: 'Material',
      content:
        'Aluminium grades including 1050, 2011, 2017, 2024, 5052, 5083, 6060, 6061, 6063, 6082, 7075 and other grades as per customer requirement.',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Anodising, hard anodising, plating, brushing, polishing, bead blasting, powder coating and other treatments as required.',
    },
    {
      number: '04',
      title: 'Input Files',
      content: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
    },
  ],
  features: [
    'Optimized weight-to-strength ratio for avionics, robotics, and precision instruments.',
    'High-speed 3-axis and 5-axis vertical machining center (VMC) milling.',
    'Type II and Type III Hardcoat Anodizing in natural, black, and custom RAL shades.',
    'Precision drilled and tapped hole patterns with tight pitch tolerances.',
    'Burr-free edge radiusing and smooth chamfers for clean assembly integration.',
    'Full dimensional CMM report and certificate of conformity provided.',
  ],
  specs: {
    material: 'Aluminium grades including 1050, 2011, 2017, 2024, 5052, 5083, 6060, 6061, 6063, 6082, 7075',
    tolerance: '±0.008 mm to ±0.02 mm',
    surfaceFinish: 'Ra 0.4 to Ra 1.6 μm',
    processes: 'CNC Milling, Turning, Drilling, Threading, Tapping, Boring, Knurling and precision machining',
    finishes: 'Anodising, Hard Anodising, Plating, Brushing, Polishing, Bead Blasting, Powder Coating',
    inspection: 'Coordinate Measuring Machine (CMM), Pin Gauges',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or physical sample',
  },
  componentRange: [
    'Precision Turned Parts & Bushes',
    'Flanged Sleeves & Mounting Spacers',
    'Multi-Axis Milled Brackets & Blocks',
    'Custom Heat Sink & Enclosure Housings',
    'Threaded Knurled Knobs & Pins',
    'Precision Sensor Bosses & Fittings',
  ],
};

export const customAlloyCncParts: CncProductDetail = {
  id: 'custom-alloy-cnc-parts',
  slug: 'custom-alloy-cnc-parts',
  title: 'Chrome Steel CNC Machined Components',
  category: 'CHROME STEEL CNC MACHINED COMPONENTS',
  badge: '52100 / 100Cr6 (EN31) · 41Cr4 · 42CrMo4 (EN19)',
  tagline: 'High-hardness wear-resistant chrome steel turned, ground, and heat-treated components engineered for heavy dynamic loads and severe abrasion.',
  image: '/assets/cnc_machined/page_91_img_0.webp',
  brochurePage: 'Brochure Page 97',
  pillars: {
    capabilities: 'CNC turning, milling, drilling, threading and grinding to customer requirements.',
    material: 'Chrome steel grades such as 52100 / 100Cr6 (EN31), 41Cr4 and 42CrMo4 (EN19); any other grade if required.',
    finishing: 'Polishing, hardening and tempering, precision grinding, hard chrome plating and black oxide, on request.',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
  },
  pillarsList: [
    {
      number: '01',
      title: 'Capabilities',
      content: 'CNC turning, milling, drilling, threading and grinding to customer requirements.',
    },
    {
      number: '02',
      title: 'Material',
      content: 'Chrome steel grades such as 52100 / 100Cr6 (EN31), 41Cr4 and 42CrMo4 (EN19); any other grade if required.',
    },
    {
      number: '03',
      title: 'Finishing',
      content: 'Polishing, hardening and tempering, precision grinding, hard chrome plating and black oxide, on request.',
    },
    {
      number: '04',
      title: 'Input Files',
      content: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or a physical sample.',
    },
  ],
  features: [
    'Extreme surface hardness and wear resistance up to 58-62 HRC via induction hardening.',
    'Precision centerless and cylindrical grinding for mirror finishes down to Ra 0.1 μm.',
    'Tight diametrical tolerances (h6/g6/f7) for bearing journal fits and slide pins.',
    'Black oxide coating and hard chrome plating for enhanced corrosion resistance.',
    'Engineered for heavy-duty drive shafts, transmission pins, and industrial rollers.',
    'Crack detection testing (MPI) and hardness certification per lot.',
  ],
  specs: {
    material: 'Chrome steel grades: 52100 / 100Cr6 (EN31), 41Cr4, 42CrMo4 (EN19)',
    tolerance: '±0.003 mm to ±0.01 mm (Ground fits)',
    surfaceFinish: 'Ra 0.1 to Ra 0.4 μm (Precision Ground)',
    processes: 'CNC Turning, Milling, Drilling, Threading and Grinding',
    finishes: 'Polishing, Hardening and Tempering, Precision Grinding, Hard Chrome Plating, Black Oxide (on request)',
    inspection: 'Rockwell Hardness Tester, Surface Profilometer, CMM',
    inputFiles: 'CAD files (dwg, dxf, pdf, etc.), 3D files (step, stp, etc.) or physical sample',
  },
  componentRange: [
    'Precision Shaft',
    'Guide Pin',
    'Hardened Bush',
    'Threaded Component',
    'Threaded Stud',
    'Collar',
    'Precision Sleeve',
  ],
};

// ── 2. Full Products List ──

export const cncProductsList: CncProductDetail[] = [
  copperMachinedComponents,
  stainlessSteelCncComponents,
  aluminiumMachinedComponents,
  customAlloyCncParts,
];

// ── 3. Catalog Items ("OUR RANGE" Section) ──

export const cncCatalogItems: CncCatalogItem[] = [
  {
    id: 'copper-machined-components',
    title: 'Copper Precision Machined Components',
    category: 'COPPER PRECISION MACHINED COMPONENTS',
    badge: 'C11000 · C10200 · C14500 · C18200',
    image: '/assets/cnc_machined/page_92_img_9.webp',
    desc: 'Custom precision CNC turned, milled, and drilled copper components manufactured strictly to customer drawings and CAD models.',
    link: '/products/cnc-machine-component/copper-machined-components',
  },
  {
    id: 'stainless-steel-cnc-components',
    title: 'Stainless Steel CNC Machined Components',
    category: 'STAINLESS STEEL MACHINED COMPONENTS',
    badge: 'SS 303 · 304 · 316 · 316L · 410 · 416 · 420 · 17-4PH',
    image: '/assets/cnc_machined/page_93_img_8.webp',
    desc: 'High-precision corrosion-resistant stainless steel turned, milled, and threaded parts for marine, chemical, and industrial assemblies.',
    link: '/products/cnc-machine-component/stainless-steel-cnc-components',
  },
  {
    id: 'aluminium-machined-components',
    title: 'Aluminium CNC Machined Components',
    category: 'ALUMINIUM CNC MACHINED COMPONENTS',
    badge: 'AL 1050 · 2011 · 2024 · 5052 · 6061 · 6063 · 6082 · 7075',
    image: '/assets/cnc_machined/page_94_img_0.webp',
    desc: 'Lightweight, high-strength CNC milled and turned aluminium components with aerospace-grade tolerances and anodized finishes.',
    link: '/products/cnc-machine-component/aluminium-machined-components',
  },
  {
    id: 'custom-alloy-cnc-parts',
    title: 'Chrome Steel CNC Machined Components',
    category: 'CHROME STEEL CNC MACHINED COMPONENTS',
    badge: '52100 / 100Cr6 (EN31) · 41Cr4 · 42CrMo4 (EN19)',
    image: '/assets/cnc_machined/page_91_img_0.webp',
    desc: 'High-hardness wear-resistant chrome steel turned, ground, and heat-treated components engineered for heavy dynamic loads and severe abrasion.',
    link: '/products/cnc-machine-component/custom-alloy-cnc-parts',
  },
];

// ── 4. Product Details Lookup Record with Aliases ──

export const cncProductsDetails: Record<string, CncProductDetail> = {
  // Primary Slugs
  'copper-machined-components': copperMachinedComponents,
  'stainless-steel-cnc-components': stainlessSteelCncComponents,
  'aluminium-machined-components': aluminiumMachinedComponents,
  'custom-alloy-cnc-parts': customAlloyCncParts,

  // Copper Aliases
  copper: copperMachinedComponents,
  'copper-cnc-components': copperMachinedComponents,
  'copper-components': copperMachinedComponents,
  'copper-precision-machined-components': copperMachinedComponents,

  // Stainless Steel Aliases
  'stainless-steel': stainlessSteelCncComponents,
  'stainless-steel-components': stainlessSteelCncComponents,
  'ss-cnc-components': stainlessSteelCncComponents,
  'ss-machined-components': stainlessSteelCncComponents,

  // Aluminium Aliases
  aluminium: aluminiumMachinedComponents,
  aluminum: aluminiumMachinedComponents,
  'aluminium-cnc-components': aluminiumMachinedComponents,
  'aluminum-cnc-components': aluminiumMachinedComponents,
  'aluminium-components': aluminiumMachinedComponents,
  'aluminum-machined-components': aluminiumMachinedComponents,

  // Chrome Steel & Alloy Aliases
  'chrome-steel': customAlloyCncParts,
  'chrome-steel-cnc-components': customAlloyCncParts,
  'chrome-steel-cnc-machined-components': customAlloyCncParts,
  'chrome-steel-machined-components': customAlloyCncParts,
  'chrome-steel-alloy': customAlloyCncParts,
  'alloy-steel': customAlloyCncParts,
  'custom-alloy': customAlloyCncParts,
  'alloy-cnc-parts': customAlloyCncParts,
};
