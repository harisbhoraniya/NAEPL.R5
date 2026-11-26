export interface AluminiumEnclosureRow {
  partNo: string;
  width: string;
  length: string;
  height: string;
  mountingPlate: boolean;
  dinRailT15: boolean;
  dinRailT35: boolean;
  hingesSet: boolean;
  mountingBracket: boolean;
}

export interface MildSteelJunctionBoxRow {
  partNo: string;
  enclosureH: string;
  enclosureW: string;
  enclosureD: string;
  panelH: string;
  panelW: string;
}

export interface StainlessSteelJunctionBoxRow {
  partNo: string;
  width: string;
  length: string;
  height: string;
  weight: string;
}

export interface PushButtonPanelRow {
  partNo: string;
  width: string;
  length: string;
  height: string;
  weight: string;
  holes: string;
}

export const aluminiumEnclosuresData: AluminiumEnclosureRow[] = [
  { partNo: 'NLB-ALE-01', width: '45', length: '50', height: '30', mountingPlate: false, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: false },
  { partNo: 'NLB-ALE-02', width: '64', length: '58', height: '34', mountingPlate: true, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: false },
  { partNo: 'NLB-ALE-03', width: '64', length: '98', height: '34', mountingPlate: true, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: false },
  { partNo: 'NLB-ALE-04', width: '64', length: '150', height: '34', mountingPlate: true, dinRailT15: false, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-05', width: '80', length: '75', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-06', width: '80', length: '125', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-07', width: '80', length: '175', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-08', width: '80', length: '250', height: '57', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-09', width: '100', length: '100', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-10', width: '100', length: '160', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-11', width: '100', length: '200', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: false, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-12', width: '120', length: '122', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-13', width: '120', length: '122', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-14', width: '120', length: '220', height: '81', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-15', width: '120', length: '220', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: false, mountingBracket: true },
  { partNo: 'NLB-ALE-16', width: '140', length: '140', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-17', width: '140', length: '200', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-18', width: '160', length: '160', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-19', width: '160', length: '260', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-20', width: '160', length: '360', height: '91', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-21', width: '230', length: '200', height: '110', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-22', width: '230', length: '280', height: '110', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-23', width: '230', length: '330', height: '110', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-24', width: '230', length: '400', height: '110', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
  { partNo: 'NLB-ALE-25', width: '310', length: '400', height: '110', mountingPlate: true, dinRailT15: true, dinRailT35: true, hingesSet: true, mountingBracket: true },
];

export const mildSteelJunctionBoxesData: MildSteelJunctionBoxRow[] = [
  { partNo: 'NLB-MSJ-001', enclosureH: '4.00"', enclosureW: '4.00"', enclosureD: '3.00"', panelH: '—', panelW: '—' },
  { partNo: 'NLB-MSJ-002', enclosureH: '6.00"', enclosureW: '4.00"', enclosureD: '3.00"', panelH: '4.88"', panelW: '2.88"' },
  { partNo: 'NLB-MSJ-003', enclosureH: '8.00"', enclosureW: '6.00"', enclosureD: '3.50"', panelH: '6.75"', panelW: '4.88"' },
  { partNo: 'NLB-MSJ-004', enclosureH: '4.00"', enclosureW: '4.00"', enclosureD: '4.00"', panelH: '—', panelW: '—' },
  { partNo: 'NLB-MSJ-005', enclosureH: '6.00"', enclosureW: '4.00"', enclosureD: '4.00"', panelH: '4.88"', panelW: '2.88"' },
  { partNo: 'NLB-MSJ-006', enclosureH: '6.00"', enclosureW: '6.00"', enclosureD: '4.00"', panelH: '4.88"', panelW: '4.88"' },
  { partNo: 'NLB-MSJ-007', enclosureH: '10.00"', enclosureW: '8.00"', enclosureD: '4.00"', panelH: '8.75"', panelW: '6.88"' },
  { partNo: 'NLB-MSJ-008', enclosureH: '12.00"', enclosureW: '10.00"', enclosureD: '5.00"', panelH: '10.75"', panelW: '8.88"' },
  { partNo: 'NLB-MSJ-009', enclosureH: '14.00"', enclosureW: '12.00"', enclosureD: '6.00"', panelH: '12.75"', panelW: '10.88"' },
  { partNo: 'NLB-MSJ-010', enclosureH: '16.00"', enclosureW: '14.00"', enclosureD: '6.00"', panelH: '14.75"', panelW: '12.88"' },
  { partNo: 'NLB-MSJ-011', enclosureH: '16.00"', enclosureW: '14.00"', enclosureD: '8.00"', panelH: '14.75"', panelW: '12.88"' },
  { partNo: 'NLB-MSJ-012', enclosureH: '18.00"', enclosureW: '16.00"', enclosureD: '8.00"', panelH: '16.75"', panelW: '14.88"' },
];

export const stainlessSteelJunctionBoxesData: StainlessSteelJunctionBoxRow[] = [
  { partNo: 'NLB-SSJ-001', width: '100', length: '100', height: '90', weight: '1.1' },
  { partNo: 'NLB-SSJ-002', width: '100', length: '150', height: '90', weight: '1.3' },
  { partNo: 'NLB-SSJ-003', width: '100', length: '200', height: '90', weight: '1.5' },
  { partNo: 'NLB-SSJ-004', width: '150', length: '150', height: '90', weight: '1.5' },
  { partNo: 'NLB-SSJ-005', width: '150', length: '150', height: '120', weight: '2.0' },
  { partNo: 'NLB-SSJ-006', width: '150', length: '200', height: '90', weight: '1.8' },
  { partNo: 'NLB-SSJ-007', width: '150', length: '300', height: '90', weight: '2.3' },
  { partNo: 'NLB-SSJ-008', width: '200', length: '200', height: '90', weight: '2.1' },
  { partNo: 'NLB-SSJ-009', width: '200', length: '200', height: '120', weight: '2.5' },
  { partNo: 'NLB-SSJ-010', width: '200', length: '300', height: '90', weight: '2.7' },
  { partNo: 'NLB-SSJ-011', width: '200', length: '300', height: '120', weight: '3.2' },
  { partNo: 'NLB-SSJ-012', width: '200', length: '400', height: '120', weight: '3.8' },
  { partNo: 'NLB-SSJ-013', width: '300', length: '300', height: '120', weight: '4.1' },
  { partNo: 'NLB-SSJ-014', width: '300', length: '300', height: '160', weight: '4.5' },
  { partNo: 'NLB-SSJ-015', width: '300', length: '400', height: '120', weight: '4.9' },
];

export const pushButtonPanelsData: PushButtonPanelRow[] = [
  { partNo: 'NLB-PBP-001', width: '100', length: '100', height: '90', weight: '1.1', holes: '1' },
  { partNo: 'NLB-PBP-002', width: '100', length: '150', height: '90', weight: '1.3', holes: '2' },
  { partNo: 'NLB-PBP-003', width: '100', length: '200', height: '90', weight: '1.5', holes: '3' },
  { partNo: 'NLB-PBP-004', width: '100', length: '300', height: '90', weight: '1.9', holes: '4' },
  { partNo: 'NLB-PBP-005', width: '150', length: '150', height: '90', weight: '1.5', holes: '2x2' },
  { partNo: 'NLB-PBP-006', width: '150', length: '200', height: '90', weight: '1.8', holes: '2x3' },
  { partNo: 'NLB-PBP-007', width: '150', length: '300', height: '90', weight: '2.3', holes: '2x4' },
  { partNo: 'NLB-PBP-008', width: '200', length: '200', height: '90', weight: '2.1', holes: '3x3' },
];

export interface LinkBoxCatalogItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  link: string;
}

export const linkBoxCatalogItems: LinkBoxCatalogItem[] = [
  {
    id: 'aluminium-die-cast',
    slug: 'aluminium-die-cast',
    title: 'Aluminium Die Cast Enclosures',
    category: 'ALUMINIUM DIE-CAST ENCLOSURES',
    badge: 'IP66 / IP67 · DIE-CAST LM6',
    image: '/assets/link_box/aluminium_die_cast_enclosure.jpg',
    link: '/products/link-box/aluminium-die-cast',
  },
  {
    id: 'stainless-steel',
    slug: 'stainless-steel',
    title: 'Stainless Steel Enclosures',
    category: 'STAINLESS STEEL ENCLOSURES',
    badge: 'IP66 / IP68 · AISI 304 / 316',
    image: '/assets/link_box/stainless_steel_junction_box.webp',
    link: '/products/link-box/stainless-steel',
  },
  {
    id: 'mild-steel',
    slug: 'mild-steel',
    title: 'Mild Steel Junction Boxes',
    category: 'MILD STEEL JUNCTION BOXES',
    badge: 'HEAVY-DUTY CRCA · POWDER COATED',
    image: '/assets/link_box/mild_steel_junction_box.webp',
    link: '/products/link-box/mild-steel',
  },
  {
    id: 'push-button',
    slug: 'push-button',
    title: 'SS Push Button Panels',
    category: 'STAINLESS STEEL CONTROL ENCLOSURES',
    badge: '22.5MM CUT-OUTS · SS 304 / 316',
    image: '/assets/link_box/ss_push_button_panel.png',
    link: '/products/link-box/push-button',
  },
];

export interface LinkBoxColourOption {
  name: string;
  hex: string;
  border?: boolean;
}

export interface LinkBoxProductDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  brochurePage?: string;
  features: string[];
  specs: {
    material: string;
    protection: string;
    gasket: string;
    operatingTemp: string;
    mounting: string;
    finish: string;
    standards: string;
    colours: string;
  };
  coloursList: LinkBoxColourOption[];
  tableType: 'aluminium' | 'stainless-steel' | 'mild-steel' | 'push-button';
}

const aluminiumDetail: LinkBoxProductDetail = {
  id: 'aluminium-die-cast',
  slug: 'aluminium-die-cast',
  title: 'Aluminium Die Cast Enclosures',
  category: 'ALUMINIUM DIE-CAST ENCLOSURES',
  badge: 'IP66 / IP67 · DIE-CAST LM6',
  tagline: 'Heavy-duty precision die-cast LM6 aluminium enclosures engineered for superior corrosion protection, high impact strength, and certified IP66/IP67 ingress sealing.',
  description: '',
  image: '/assets/link_box/aluminium_die_cast_enclosure.jpg',
  brochurePage: 'Brochure Pages 82–83',
  features: [
    'Manufactured from premium die-cast LM6 aluminium alloy for exceptional mechanical integrity.',
    'Continuous poured-in-place polyurethane gasket guarantees certified IP66 / IP67 ingress protection.',
    'Pre-tapped internal earthing screw and captive stainless steel cover screws prevent hardware loss.',
    'Broad operating temperature range from -40°C to +100°C in demanding outdoor installations.',
    'Provisions for DIN rail (T15/T35), internal mounting plates, hinges, and external wall brackets.',
    'Full range of 25 catalogue sizes from NLB-ALE-01 (45x50x30 mm) to NLB-ALE-25 (310x400x110 mm) (Brochure Page 83).',
    'Available standard colours: Natural Aluminium, RAL 7001 Silver Gray, RAL 9005 Black, and any custom RAL shade upon request (Brochure Page 82).',
  ],
  specs: {
    material: 'Die-Cast Aluminium (LM6 Alloy)',
    protection: 'IP66 / IP67 (EN 60529)',
    gasket: 'Continuous Polyurethane Seal',
    operatingTemp: '-40°C to +100°C',
    mounting: 'External Wall Brackets / Internal Screws',
    finish: 'Electrostatic Powder Coat / Natural',
    standards: 'IEC / EN 60529, RoHS Compliant',
    colours: 'Natural Aluminium, RAL 7001 Silver Gray, RAL 9005 Black, Any RAL Shade',
  },
  coloursList: [
    { name: 'Natural Aluminium', hex: '#B8B9BB', border: true },
    { name: 'RAL 7001 Silver Gray', hex: '#8F999F' },
    { name: 'RAL 9005 Black', hex: '#111111' },
    { name: 'Any RAL Shade', hex: '#2563EB' },
  ],
  tableType: 'aluminium',
};

const stainlessDetail: LinkBoxProductDetail = {
  id: 'stainless-steel',
  slug: 'stainless-steel',
  title: 'Stainless Steel Enclosures',
  category: 'STAINLESS STEEL ENCLOSURES',
  badge: 'IP66 / IP68 · AISI 304 / 316',
  tagline: 'Sanitary and marine-grade AISI 304 / 316 stainless steel junction boxes delivering robust mechanical strength and IP66/IP68 ingress protection.',
  description: '',
  image: '/assets/link_box/stainless_steel_junction_box.webp',
  brochurePage: 'Brochure Pages 86–87',
  features: [
    'High-grade AISI 304 and AISI 316 stainless steel fabrication for extreme marine and chemical exposure.',
    'Continuous seamless silicone gasket ensures reliable IP66 and IP68 watertight protection.',
    'Brushed satin 240-grit finish provides easy sanitization and corrosion-proof longevity.',
    'Internal and external grounding M6 copper earth studs on base and cover.',
    'Pre-fitted stainless steel cover retaining screws and heavy-duty wall mounting lugs.',
    'Full range of standard sizes from 100x100x90 mm (1.1 kg) to 300x400x120 mm (4.9 kg) across 15 models (Brochure Page 87).',
    'Available finishes & colours: Natural Stainless Steel (brushed satin finish) and RAL 7001 Silver Gray polyester powder coated (Brochure Page 86).',
  ],
  specs: {
    material: 'AISI 304 / AISI 316 Stainless Steel (1.2mm - 1.5mm)',
    protection: 'IP66 / IP68 Watertight',
    gasket: 'Continuous Silicone / Neoprene',
    operatingTemp: '-50°C to +130°C',
    mounting: 'Pre-Welded Heavy Stainless Mounting Lugs',
    finish: 'Brushed Satin (240 Grit) / RAL 7001 Powder Coat',
    standards: 'IEC 60529, AISI 316 Marine Grade',
    colours: 'Natural Stainless Steel, RAL 7001 Silver Gray',
  },
  coloursList: [
    { name: 'Natural Stainless Steel', hex: '#D1D5DB', border: true },
    { name: 'RAL 7001 Silver Gray', hex: '#8F999F' },
  ],
  tableType: 'stainless-steel',
};

const mildSteelDetail: LinkBoxProductDetail = {
  id: 'mild-steel',
  slug: 'mild-steel',
  title: 'Mild Steel Junction Boxes',
  category: 'MILD STEEL JUNCTION BOXES',
  badge: 'HEAVY-DUTY CRCA · POWDER COATED',
  tagline: 'Industrial CRCA sheet steel junction boxes with electrostatic powder coating, polyurethane door seals, and internal mounting panels.',
  description: '',
  image: '/assets/link_box/mild_steel_junction_box.webp',
  brochurePage: 'Brochure Pages 84–85',
  features: [
    'Fabricated from robust cold-rolled close annealed (CRCA) sheet steel (1.2mm to 2.0mm gauge).',
    'Eight-stage chemical pre-treatment followed by high-durability electrostatic powder coating.',
    'Poured-in-place seamless continuous polyurethane gasket preventing moisture and fine dust ingress.',
    'Includes removable internal galvanized sheet steel component mounting plate.',
    'External screw clamp locking mechanism ensures quick and dependable field access.',
    'Standard enclosure heights from 4.00" to 18.00" across 12 catalogue models (Brochure Page 85).',
    'Available colours: Natural Stainless Steel, RAL 7001 Silver Gray, and RAL 5015 Blue (Brochure Page 84).',
  ],
  specs: {
    material: 'Heavy-Gauge CRCA Sheet Steel',
    protection: 'IP65 / IP66 Industrial Rating',
    gasket: 'Seamless Polyurethane Door Seal',
    operatingTemp: '-20°C to +80°C',
    mounting: 'Internal Plate & Rear Mounting Holes',
    finish: 'Textured Polyester Powder Coat',
    standards: 'IS 5039 / IEC 60529',
    colours: 'Natural Stainless Steel, RAL 7001 Silver Gray, RAL 5015 Blue',
  },
  coloursList: [
    { name: 'Natural Stainless Steel', hex: '#D1D5DB', border: true },
    { name: 'RAL 7001 Silver Gray', hex: '#8F999F' },
    { name: 'RAL 5015 Blue', hex: '#2271B3' },
  ],
  tableType: 'mild-steel',
};

const pushButtonDetail: LinkBoxProductDetail = {
  id: 'push-button',
  slug: 'push-button',
  title: 'SS Push Button Panels',
  category: 'STAINLESS STEEL CONTROL ENCLOSURES',
  badge: '22.5MM CUT-OUTS · SS 304 / 316',
  tagline: 'Precision laser-cut stainless steel push button and selector switch enclosures with standard 22.5 mm actuator holes and IP66 sealing.',
  description: '',
  image: '/assets/link_box/ss_push_button_panel.png',
  brochurePage: 'Brochure Pages 88–89',
  features: [
    'Standard 22.5 mm diameter laser-punched holes for industrial push buttons, emergency stops, and switches.',
    'Fabricated in high-grade AISI 304 / 316 stainless steel with fine grain satin surface finish.',
    'Continuous closed-cell neoprene/silicone gasket ensures watertight and oil-resistant IP66 sealing.',
    'Available in 1, 2, 3, 4 hole vertical arrangements and multi-gang matrix patterns (2x2, 2x3, 2x4, 3x3 holes) across 8 models (Brochure Page 89).',
    'Captive stainless steel cover fixing screws prevent hardware loss during maintenance.',
    'Integrated internal ground stud for direct electrical continuity and operator safety.',
    'Available finishes & colours: Natural Stainless Steel and RAL 7001 Silver Gray (Brochure Page 88).',
  ],
  specs: {
    material: 'AISI 304 / AISI 316 Stainless Steel',
    protection: 'IP66 Oil & Watertight',
    gasket: 'Closed-Cell Neoprene / Silicone',
    operatingTemp: '-40°C to +110°C',
    mounting: 'External Mounting Flanges / Rear Holes',
    finish: 'Brushed Satin Finish / RAL 7001 Powder Coat',
    standards: 'IEC 60947-5-1 / IEC 60529',
    colours: 'Natural Stainless Steel, RAL 7001 Silver Gray',
  },
  coloursList: [
    { name: 'Natural Stainless Steel', hex: '#D1D5DB', border: true },
    { name: 'RAL 7001 Silver Gray', hex: '#8F999F' },
  ],
  tableType: 'push-button',
};

export const linkBoxProductsDetails: Record<string, LinkBoxProductDetail> = {
  'aluminium-die-cast': aluminiumDetail,
  'aluminium-enclosure': aluminiumDetail,
  'aluminium-terminal': aluminiumDetail,
  'stainless-steel': stainlessDetail,
  'ss-enclosure': stainlessDetail,
  'stainless-steel-enclosure': stainlessDetail,
  'mild-steel': mildSteelDetail,
  'ms-enclosure': mildSteelDetail,
  'mild-steel-junction-box': mildSteelDetail,
  'push-button': pushButtonDetail,
  'ss-push-button-panel': pushButtonDetail,
  'push-button-panel': pushButtonDetail,
};
