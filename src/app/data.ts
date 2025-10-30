export type ServiceCategory = {
  key: string;
  label: string;
};

export type VideoResource = {
  id: number;
  title: string;
  category: string;
  duration: string;
  description: string;
  accent: string;
};

export type GalleryResource = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  accent: string;
};

export const VIDEOS_PER_PAGE = 6;
export const GALLERY_IMAGES_PER_PAGE = 6;
export const SERVICE_CATEGORIES = [
  { key: 'all', label: 'All Services' },
  { key: 'chrome-plating', label: 'Chrome Plating in Chicago' },
  { key: 'cylindrical-grinding', label: 'Cylindrical Grinding in Chicago' },
  { key: 'thermal-spray', label: 'Thermal Spray Coatings in Chicago' },
  { key: 'machining-fabrication', label: 'Machining &amp; Fabrication in Chicago' },
  { key: 'roll-manufacturing', label: 'Roll Manufacturing in Chicago' },
  { key: 'inspection-quality', label: 'Inspection &amp; Quality in Chicago' },
];

export const VIDEO_LIBRARY = [
  // ...existing video objects...
];

export const GALLERY_LIBRARY: GalleryResource[] = [
  {
    id: 1,
    title: 'Hard Chrome Plating Hero',
    category: 'chrome-plating',
    description: "Signature visual from Chromium Industries' Chicago plating page highlighting the horizontal hard chrome plating environment.",
    imageUrl: '/gallery/plating-top-bg.png',
    accent: 'from-sky-500 via-blue-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Chromium Plating Detail',
    category: 'chrome-plating',
    description: 'Supporting artwork from the Chicago plating capabilities section illustrating uniform finish and corrosion protection focus.',
    imageUrl: '/gallery/plating-sec-bg.png',
    accent: 'from-cyan-400 via-teal-500 to-blue-700',
  },
  {
    id: 3,
    title: 'Cylindrical Grinding Center',
    category: 'cylindrical-grinding',
    description: "Lead image from the roll grinding overview showcasing Chromium Industries' precision cylindrical grinding operations in Chicago.",
    imageUrl: '/gallery/grinding-top-bg-min.png',
    accent: 'from-slate-500 via-gray-600 to-zinc-800',
  },
  {
    id: 4,
    title: 'Grinding Finish Work',
    category: 'cylindrical-grinding',
    description: 'Secondary grinding visual underscoring fine finishing, tolerance control, and repeatable surface quality for Chicago converters.',
    imageUrl: '/gallery/grinding-sec-bg.png',
    accent: 'from-gray-600 via-slate-700 to-slate-900',
  },
  {
    id: 5,
    title: 'Thermal Spray Booth',
    category: 'thermal-spray',
    description: 'Hero artwork from the Chicago surface finishes page highlighting thermal spray coating capabilities for wear protection.',
    imageUrl: '/gallery/surface-finishes-bg-min.png',
    accent: 'from-amber-400 via-orange-500 to-rose-500',
  },
  {
    id: 6,
    title: 'Surface Finishing Detail',
    category: 'thermal-spray',
    description: 'Supporting surface finishes graphic emphasizing controlled spray deposition and surface restoration for Chicago manufacturers.',
    imageUrl: '/gallery/surface-finishes-sec-bg.png',
    accent: 'from-orange-500 via-red-500 to-amber-600',
  },
  {
    id: 7,
    title: 'Roll Design & Fabrication',
    category: 'machining-fabrication',
    description: "Lead visual from the roll design and fabrication page showing Chromium Industries' engineered roll design workflow in Chicago.",
    imageUrl: '/gallery/roll-design-top-bg-min.png',
    accent: 'from-emerald-400 via-teal-500 to-green-600',
  },
  {
    id: 8,
    title: 'Custom Roll Build',
    category: 'roll-manufacturing',
    description: 'Fabrication section artwork displaying the build-out of custom-engineered rolls for demanding Chicago production lines.',
    imageUrl: '/gallery/roll-design-sec-bg.png',
    accent: 'from-indigo-500 via-purple-500 to-indigo-700',
  },
  {
    id: 9,
    title: 'World-Class Roll Facility',
    category: 'roll-manufacturing',
    description: 'Homepage hero background introducing Chromium Industries LLC as a Chicago leader in roll surface engineering.',
    imageUrl: '/gallery/home-top-bg.png',
    accent: 'from-blue-700 via-indigo-700 to-purple-800',
  },
  {
    id: 10,
    title: 'Operations Overview',
    category: 'machining-fabrication',
    description: 'Homepage "What We Do" panel visual summarizing end-to-end machining and fabrication support delivered from Chicago.',
    imageUrl: '/gallery/Img-3@2x.png',
    accent: 'from-lime-400 via-emerald-500 to-teal-600',
  },
  {
    id: 11,
    title: 'Customer Industries',
    category: 'roll-manufacturing',
    description: 'Homepage "Who We Help" artwork spotlighting the variety of industries served by Chromium Industries LLC roll programs across Chicago.',
    imageUrl: '/gallery/Img-4@2x.png',
    accent: 'from-indigo-600 via-blue-500 to-purple-600',
  },
  {
    id: 12,
    title: 'Company Heritage',
    category: 'inspection-quality',
    description: 'About Chromium historical background graphic underscoring the long-term commitment to Chicago quality systems.',
    imageUrl: '/gallery/about-history-bg.png',
    accent: 'from-amber-500 via-orange-500 to-yellow-400',
  },
  {
    id: 13,
    title: 'Inspection & Reports',
    category: 'inspection-quality',
    description: 'Homepage "Who We Are" imagery supporting the inspection reporting and documentation services delivered from Chicago, Illinois.',
    imageUrl: '/gallery/Img-2@2x.png',
    accent: 'from-amber-300 via-yellow-400 to-emerald-500',
  },
  {
    id: 14,
    title: 'Quality Lab Focus',
    category: 'inspection-quality',
    description: 'Chromium Industries gallery image highlighting laboratory-grade inspection and measurement focus inside the Chicago facility.',
    imageUrl: '/gallery/Img-1@2x-min.png',
    accent: 'from-slate-400 via-blue-500 to-teal-500',
  },
  {
    id: 15,
    title: 'Documentation & Traceability',
    category: 'inspection-quality',
    description: 'Support visual illustrating traceable inspection data and certification workflows relied upon by Chicago manufacturers.',
    imageUrl: '/gallery/Img-2@2x-1.png',
    accent: 'from-blue-400 via-sky-400 to-emerald-500',
  },
  {
    id: 16,
    title: 'Process Background Texture',
    category: 'machining-fabrication',
    description: 'Reusable background motif from multiple service pages reinforcing engineered process consistency for Chicagoland customers.',
    imageUrl: '/gallery/Background@2x.png',
    accent: 'from-emerald-500 via-cyan-500 to-teal-600',
  },
];
