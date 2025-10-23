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
  { key: 'chrome-plating', label: 'Chrome Plating' },
  { key: 'cylindrical-grinding', label: 'Cylindrical Grinding' },
  { key: 'thermal-spray', label: 'Thermal Spray Coatings' },
  { key: 'machining-fabrication', label: 'Machining &amp; Fabrication' },
  { key: 'roll-manufacturing', label: 'Roll Manufacturing' },
  { key: 'inspection-quality', label: 'Inspection &amp; Quality' },
];

export const VIDEO_LIBRARY = [
  // ...existing video objects...
];

export const GALLERY_LIBRARY = [
  // ...existing gallery objects...
];
