'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ServiceCategory = {
  key: string;
  label: string;
};

type VideoResource = {
  id: number;
  title: string;
  category: string;
  duration: string;
  description: string;
  accent: string;
};

type GalleryResource = {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  accent: string;
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  { key: 'all', label: 'All Services' },
  { key: 'chrome-plating', label: 'Chrome Plating' },
  { key: 'cylindrical-grinding', label: 'Cylindrical Grinding' },
  { key: 'thermal-spray', label: 'Thermal Spray Coatings' },
  { key: 'machining-fabrication', label: 'Machining & Fabrication' },
  { key: 'roll-manufacturing', label: 'Roll Manufacturing' },
  { key: 'inspection-quality', label: 'Inspection & Quality' },
];

const VIDEO_LIBRARY: VideoResource[] = [
  {
    id: 1,
    title: 'Hard Chrome Plating Deep Dive',
    category: 'chrome-plating',
    duration: '4:32',
    description: 'Explore how precision chrome layers restore worn rolls and extend their performance life.',
    accent: 'from-blue-400 via-sky-500 to-cyan-600',
  },
  {
    id: 2,
    title: 'Roll Surface Preparation',
    category: 'chrome-plating',
    duration: '3:58',
    description: 'Step-by-step surface conditioning process that ensures flawless adhesion before plating.',
    accent: 'from-cyan-500 via-blue-500 to-indigo-600',
  },
  {
    id: 3,
    title: 'Cylindrical Grinding Accuracy',
    category: 'cylindrical-grinding',
    duration: '5:11',
    description: 'See our multi-axis grinders achieve micron-level precision on massive industrial rolls.',
    accent: 'from-indigo-500 via-blue-600 to-purple-700',
  },
  {
    id: 4,
    title: 'Mirror Finish Polishing',
    category: 'cylindrical-grinding',
    duration: '2:47',
    description: 'Follow the finishing passes that deliver the exact surface texture your process demands.',
    accent: 'from-blue-500 via-indigo-500 to-violet-600',
  },
  {
    id: 5,
    title: 'Thermal Spray Coating Options',
    category: 'thermal-spray',
    duration: '6:05',
    description: 'Compare plasma, HVOF, and arc spray coatings engineered for abrasion and corrosion resistance.',
    accent: 'from-emerald-500 via-teal-500 to-sky-500',
  },
  {
    id: 6,
    title: 'Emergency Roll Repair Workflow',
    category: 'roll-manufacturing',
    duration: '4:14',
    description: 'A rapid-response look at roll assessment, straightening, and full rebuild capabilities.',
    accent: 'from-blue-600 via-indigo-600 to-slate-700',
  },
  {
    id: 7,
    title: 'Custom Roll Manufacturing',
    category: 'roll-manufacturing',
    duration: '7:02',
    description: 'Track the build of a new precision roll from raw stock through machining and finishing.',
    accent: 'from-sky-500 via-blue-500 to-indigo-700',
  },
  {
    id: 8,
    title: 'Machining & Fabrication Tour',
    category: 'machining-fabrication',
    duration: '3:36',
    description: 'Inside our large-format machining bays, welding stations, and fabrication cells.',
    accent: 'from-blue-400 via-indigo-500 to-fuchsia-600',
  },
  {
    id: 9,
    title: 'Quality Lab Spotlight',
    category: 'inspection-quality',
    duration: '2:55',
    description: 'How metrology, ultrasonic testing, and profilometry validate every production run.',
    accent: 'from-teal-400 via-blue-500 to-indigo-600',
  },
  {
    id: 10,
    title: 'Thermal Spray Field Performance',
    category: 'thermal-spray',
    duration: '4:21',
    description: 'Customer results from high-wear environments comparing spray options head-to-head.',
    accent: 'from-indigo-500 via-blue-500 to-cyan-500',
  },
  {
    id: 11,
    title: 'Fabrication for OEM Partners',
    category: 'machining-fabrication',
    duration: '5:44',
    description: 'Collaborative engineering on complex assemblies, fixturing, and welded structures.',
    accent: 'from-blue-500 via-slate-600 to-indigo-700',
  },
  {
    id: 12,
    title: 'Inspection Readiness Checklist',
    category: 'inspection-quality',
    duration: '3:08',
    description: 'Best practices to prep your rolls for incoming quality verification and documentation.',
    accent: 'from-indigo-400 via-blue-500 to-sky-600',
  },
];

const VIDEOS_PER_PAGE = 6;

const GALLERY_LIBRARY: GalleryResource[] = [
  {
    id: 101,
    title: 'Hard Chrome Plating Cells',
    category: 'chrome-plating',
    description: 'Multi-station plating cells delivering uniform deposits on critical process rolls.',
    imageUrl: 'https://images.unsplash.com/photo-1614064575910-aca5c4193aae?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-blue-500 via-sky-500 to-cyan-600',
  },
  {
    id: 102,
    title: 'Roll Surface Finishing',
    category: 'chrome-plating',
    description: 'Bright polishing stages that seal and perfect the plated surface.',
    imageUrl: 'https://images.unsplash.com/photo-1517434322-67bb603052cb?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-cyan-500 via-blue-500 to-indigo-600',
  },
  {
    id: 103,
    title: 'Precision Grinding Bay',
    category: 'cylindrical-grinding',
    description: 'CNC grinders holding tight tolerances on large-diameter workpieces.',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-indigo-500 via-blue-600 to-purple-700',
  },
  {
    id: 104,
    title: 'Surface Measurement',
    category: 'cylindrical-grinding',
    description: 'Metrology validation to confirm roundness and roughness specifications.',
    imageUrl: 'https://images.unsplash.com/photo-1544476915-ed1370594142?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-blue-500 via-indigo-500 to-violet-600',
  },
  {
    id: 105,
    title: 'Thermal Spray Booth',
    category: 'thermal-spray',
    description: 'High-velocity coating cell engineered for extreme wear resistance applications.',
    imageUrl: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-emerald-500 via-teal-500 to-sky-500',
  },
  {
    id: 106,
    title: 'Arc Spray Application',
    category: 'thermal-spray',
    description: 'Controlled arc spray delivering dense, bonded overlays in production volumes.',
    imageUrl: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-teal-500 via-cyan-500 to-blue-600',
  },
  {
    id: 107,
    title: 'Heavy Roll Fabrication',
    category: 'machining-fabrication',
    description: 'Large-format fabrication cell assembling new roll bodies and cores.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-blue-500 via-slate-600 to-indigo-700',
  },
  {
    id: 108,
    title: 'Precision CNC Turning',
    category: 'machining-fabrication',
    description: 'Multi-axis machining on hardened materials with process monitoring.',
    imageUrl: 'https://images.unsplash.com/photo-1559013816-50e10258d7d5?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-indigo-500 via-blue-500 to-slate-700',
  },
  {
    id: 109,
    title: 'New Roll Assembly',
    category: 'roll-manufacturing',
    description: 'Final assembly bay bringing together journals, bearings, and core bodies.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-sky-500 via-blue-500 to-indigo-700',
  },
  {
    id: 110,
    title: 'Emergency Repair Team',
    category: 'roll-manufacturing',
    description: 'Rapid turnaround rebuild capability for mission-critical production rolls.',
    imageUrl: 'https://images.unsplash.com/photo-1581092586513-67677f8f5d32?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-blue-600 via-indigo-600 to-slate-700',
  },
  {
    id: 111,
    title: 'Ultrasonic Inspection',
    category: 'inspection-quality',
    description: 'Technicians validating structural integrity before shipment.',
    imageUrl: 'https://images.unsplash.com/photo-1548716664-46c9b53f9607?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-teal-400 via-blue-500 to-indigo-600',
  },
  {
    id: 112,
    title: 'Surface Profilometry',
    category: 'inspection-quality',
    description: 'Detailed profilometry scanning confirming finish metrics meet spec.',
    imageUrl: 'https://images.unsplash.com/photo-1581092919534-9acaeb1f30d8?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-indigo-400 via-blue-500 to-sky-600',
  },
];

const GALLERY_IMAGES_PER_PAGE = 6;

type TransformationState = {
  key: 'before' | 'after';
  headline: string;
  subhead: string;
  bulletPoints: string[];
  tone: 'negative' | 'positive';
};

const TRANSFORMATION_STATES: TransformationState[] = [
  {
    key: 'before',
    headline: 'Before Chromium',
    subhead: 'Quality slips, downtime grows, and uncertainty hangs over every production run.',
    bulletPoints: [
      'Inconsistent surface finishes create costly scrap and rework cycles',
      'Emergency roll repairs disrupt schedules and erode customer confidence',
      'Limited partners stretch inspection and QC teams thin',
    ],
    tone: 'negative',
  },
  {
    key: 'after',
    headline: 'After Chromium',
    subhead: 'Quality is repeatable, uptime is predictable, and teams focus on growth.',
    bulletPoints: [
      'Precision-finished rolls deliver flawless results shift after shift',
      '24/7 response and full-service rebuilds eliminate production anxiety',
      'Certified inspection data proves compliance on every shipment',
    ],
    tone: 'positive',
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [galleryPage, setGalleryPage] = useState(1);

  const filteredVideos =
    activeCategory === 'all'
      ? VIDEO_LIBRARY
      : VIDEO_LIBRARY.filter((video) => video.category === activeCategory);
  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const pageStart = (currentPage - 1) * VIDEOS_PER_PAGE;
  const visibleVideos = filteredVideos.slice(pageStart, pageStart + VIDEOS_PER_PAGE);
  const totalFiltered = filteredVideos.length;
  const rangeStart = totalFiltered === 0 ? 0 : pageStart + 1;
  const rangeEnd = pageStart + visibleVideos.length;

  const filteredGallery =
    galleryCategory === 'all'
      ? GALLERY_LIBRARY
      : GALLERY_LIBRARY.filter((item) => item.category === galleryCategory);
  const galleryTotalPages = Math.max(1, Math.ceil(filteredGallery.length / GALLERY_IMAGES_PER_PAGE));

  useEffect(() => {
    if (galleryPage > galleryTotalPages) {
      setGalleryPage(galleryTotalPages);
    }
  }, [galleryPage, galleryTotalPages]);

  const galleryStart = (galleryPage - 1) * GALLERY_IMAGES_PER_PAGE;
  const visibleGallery = filteredGallery.slice(galleryStart, galleryStart + GALLERY_IMAGES_PER_PAGE);
  const galleryTotalFiltered = filteredGallery.length;
  const galleryRangeStart = galleryTotalFiltered === 0 ? 0 : galleryStart + 1;
  const galleryRangeEnd = galleryStart + visibleGallery.length;

  const getCategoryLabel = (key: string) =>
    SERVICE_CATEGORIES.find((category) => category.key === key)?.label ?? 'All Services';

  const renderFaceIcon = (tone: 'negative' | 'positive') => {
    const isPositive = tone === 'positive';
    const faceColor = isPositive ? '#22c55e' : '#ef4444';
    const eyeY = isPositive ? 18 : 20;
    const mouthPath = isPositive
      ? 'M12 28c2.5-3 5.5-4.5 8-4.5s5.5 1.5 8 4.5'
      : 'M12 30c2.5-3 5.5-4.5 8-4.5s5.5 1.5 8 4.5';
    const ariaLabel = isPositive
      ? 'Smiling face representing assured quality with Chromium Industries'
      : 'Concerned face representing inconsistent quality before Chromium Industries';

    return (
      <svg
        width="80"
        height="80"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
        role="img"
        aria-label={ariaLabel}
      >
        <circle cx="24" cy="24" r="22" fill={faceColor} opacity="0.9" />
        <circle cx="17" cy={eyeY} r="3" fill="#0f172a" />
        <circle cx="31" cy={eyeY} r="3" fill="#0f172a" />
        <path d={mouthPath} stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="22" stroke="white" strokeOpacity="0.6" strokeWidth="2" />
      </svg>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <header className="relative">
        {/* Mobile Menu Popup */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed bottom-32 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md" id="mobile-primary-nav">
            <div className="bg-gradient-to-br from-blue-900/95 to-blue-700/95 backdrop-blur-xl border-2 border-blue-400/30 p-6 shadow-2xl" style={{ borderRadius: '18px' }}>
              <div className="grid grid-cols-2 gap-4" role="menu" aria-label="Mobile navigation links">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="bg-blue-800/60 backdrop-blur-sm border-2 border-blue-400/40 py-6 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform" style={{ borderRadius: '18px' }}>
                  Home
                </a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="bg-blue-800/60 backdrop-blur-sm border-2 border-blue-400/40 py-6 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform" style={{ borderRadius: '18px' }}>
                  About
                </a>
                <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="bg-blue-800/60 backdrop-blur-sm border-2 border-blue-400/40 py-6 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform" style={{ borderRadius: '18px' }}>
                  Videos
                </a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="bg-blue-800/60 backdrop-blur-sm border-2 border-blue-400/40 py-6 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform" style={{ borderRadius: '18px' }}>
                  Gallery
                </a>
                <a href="#connect" onClick={() => setMobileMenuOpen(false)} className="bg-blue-800/60 backdrop-blur-sm border-2 border-blue-400/40 py-6 flex items-center justify-center text-white font-bold text-lg hover:scale-105 transition-transform col-span-2" style={{ borderRadius: '18px' }}>
                  Connect
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="fixed bottom-[18px] left-1/2 -translate-x-1/2 z-50 max-w-5xl w-full mx-4" aria-label="Primary">
        {/* Desktop Menu */}
        <div className="hidden lg:block bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-blue-900/80 backdrop-blur-xl border-4 border-blue-700/50 shadow-2xl" style={{ borderRadius: '18px' }}>
          <div className="flex items-center justify-between px-8 py-4 gap-6">
            <div className="flex items-center">
              <button className="w-14 h-14 bg-blue-700/90 border-2 border-blue-600/50 flex items-center justify-center hover:bg-blue-600/90 transition-all shadow-lg group" style={{ borderRadius: '18px' }} aria-label="Go to saved projects">
                <svg className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a href="#home" className="px-6 py-2.5 bg-transparent border-2 border-blue-700/50 text-white font-bold text-sm tracking-wide hover:bg-blue-700/30 hover:border-blue-600/60 transition-all shadow-md hover:shadow-lg uppercase" style={{ borderRadius: '18px' }}>
                HOME
              </a>
              <a href="#about" className="px-6 py-2.5 bg-transparent border-2 border-blue-700/50 text-white font-bold text-sm tracking-wide hover:bg-blue-700/30 hover:border-blue-600/60 transition-all shadow-md hover:shadow-lg uppercase" style={{ borderRadius: '18px' }}>
                ABOUT
              </a>
              <a href="#videos" className="px-6 py-2.5 bg-transparent border-2 border-blue-700/50 text-white font-bold text-sm tracking-wide hover:bg-blue-700/30 hover:border-blue-600/60 transition-all shadow-md hover:shadow-lg uppercase" style={{ borderRadius: '18px' }}>
                VIDEOS
              </a>
              <a href="#gallery" className="px-6 py-2.5 bg-transparent border-2 border-blue-700/50 text-white font-bold text-sm tracking-wide hover:bg-blue-700/30 hover:border-blue-600/60 transition-all shadow-md hover:shadow-lg uppercase" style={{ borderRadius: '18px' }}>
                GALLERY
              </a>
              <a href="#connect" className="px-6 py-2.5 bg-transparent border-2 border-blue-700/50 text-white font-bold text-sm tracking-wide hover:bg-blue-700/30 hover:border-blue-600/60 transition-all shadow-md hover:shadow-lg uppercase" style={{ borderRadius: '18px' }}>
                CONNECT
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="w-12 h-12 bg-blue-400/90 border-2 border-blue-700/50 flex items-center justify-center hover:bg-blue-300/90 transition-all shadow-lg hover:scale-110 group"
                style={{ borderRadius: '18px' }}
                aria-label="Share Chromium Industries services"
              >
                <svg className="w-6 h-6 text-blue-900 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <button
                className="w-12 h-12 bg-blue-400/90 border-2 border-blue-700/50 flex items-center justify-center hover:bg-blue-300/90 transition-all shadow-lg hover:scale-110 group"
                style={{ borderRadius: '18px' }}
                aria-label="Contact Chromium Industries"
              >
                <svg className="w-6 h-6 text-blue-900 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>
              <button
                className="w-12 h-12 bg-blue-400/90 border-2 border-blue-700/50 flex items-center justify-center hover:bg-blue-300/90 transition-all shadow-lg hover:scale-110 group"
                style={{ borderRadius: '18px' }}
                aria-label="Open chat with Chromium Industries"
              >
                <svg className="w-6 h-6 text-blue-900 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden bg-gradient-to-r from-blue-900/80 to-blue-800/80 backdrop-blur-xl border-2 border-blue-400/30 shadow-2xl" style={{ borderRadius: '18px' }} role="navigation" aria-label="Mobile navigation bar">
          <div className="flex items-center justify-between px-6 py-4">
            <button className="w-16 h-16 bg-gradient-to-br from-blue-600/90 to-blue-800/90 flex items-center justify-center hover:scale-110 transition-transform shadow-xl" style={{ borderRadius: '18px' }} aria-label="Share Chromium Industries services">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-1">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-primary-nav"
                aria-label={mobileMenuOpen ? "Close primary navigation" : "Open primary navigation"}
                className="px-12 py-3 bg-gradient-to-br from-blue-700/80 to-blue-800/80 backdrop-blur-sm border-2 border-blue-400/50 text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                style={{ borderRadius: '18px' }}
              >
                MENU
              </button>
            </div>

            <button className="w-16 h-16 bg-gradient-to-br from-blue-600/90 to-blue-800/90 flex items-center justify-center hover:scale-110 transition-transform shadow-xl" style={{ borderRadius: '18px' }} aria-label="Contact Chromium Industries">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative p-[18px] pb-32" aria-labelledby="hero-title">
        {/* Gradient Background Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 shadow-2xl" style={{ minHeight: 'calc(100vh - 200px)', borderRadius: '3vw' }}>
          {/* Decorative Elements */}
          <div className="absolute right-[4vw] bottom-[4vw] opacity-10" style={{ width: '24vw', height: '24vw' }}>
            <svg viewBox="-30 -30 460 460" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="60" fill="none"/>
              <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="40" fill="none"/>
              <path d="M200 50 L350 200 L200 350 L50 200 Z" fill="white" opacity="0.2"/>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 p-10 sm:p-12 md:p-14 lg:p-12">
            {/* Top Right Description */}
            <div className="flex justify-end mb-10 sm:mb-12 md:mb-14 lg:mb-12">
              <div className="text-right max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[40vw]">
                <p className="text-white leading-relaxed opacity-90 text-base sm:text-lg md:text-xl lg:text-[1.2vw]">
                  For over 70 years, Chromium Industries has pioneered industrial roll engineering—pairing precision chrome plating, cylindrical grinding, thermal spray coatings, and full roll refurbishment to keep packaging, plastics, and converting production lines running with flawless quality.
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-20">
              <h1 id="hero-title" className="text-white font-black leading-none tracking-tight uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] max-w-full lg:max-w-[80vw]">
                THE MOST POWERFUL ELEMENT IN PRECISION ROLL ENGINEERING IS EXCELLENCE.
              </h1>
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-6 mt-16 sm:mt-20 md:mt-24 lg:mt-20">
              <div className="text-white/80">
                <p className="uppercase tracking-wider text-sm sm:text-base lg:text-[0.8vw] mb-2">World Leaders Since 1955</p>
                <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[1.8vw]">CHROMIUM INDUSTRIES</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 sm:gap-6 lg:gap-[1vw]">
                <a
                  href="https://www.facebook.com/ChromiumIndustries"
                  aria-label="Chromium Industries on Facebook"
                  className="bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 w-14 h-14 sm:w-16 sm:h-16 lg:w-[3vw] lg:h-[3vw]"
                >
                  <svg className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-[1.5vw] lg:h-[1.5vw]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/chromium-industries"
                  aria-label="Chromium Industries on LinkedIn"
                  className="bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 w-14 h-14 sm:w-16 sm:h-16 lg:w-[3vw] lg:h-[3vw]"
                >
                  <svg className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-[1.5vw] lg:h-[1.5vw]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/ChromiumInd"
                  aria-label="Chromium Industries on X"
                  className="bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 w-14 h-14 sm:w-16 sm:h-16 lg:w-[3vw] lg:h-[3vw]"
                >
                  <svg className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-[1.5vw] lg:h-[1.5vw]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-[18px] pb-32" aria-labelledby="about-title">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 shadow-2xl"
          style={{ borderRadius: '3vw', minHeight: 'calc(100vh - 220px)' }}
        >
          {/* Decorative Elements */}
          <div className="absolute left-[4vw] bottom-[4vw] opacity-10" style={{ width: '24vw', height: '24vw' }}>
            <svg viewBox="-30 -30 460 460" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <circle cx="200" cy="200" r="170" stroke="white" strokeWidth="50" fill="none"/>
              <circle cx="200" cy="200" r="110" stroke="white" strokeWidth="35" fill="none"/>
              <path d="M80 80 L320 120 L280 320 L120 280 Z" fill="white" opacity="0.15"/>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-12 p-10 sm:p-12 md:p-14 lg:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="text-white lg:text-right lg:order-2">
                <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 text-sm sm:text-base lg:text-[0.8vw] mb-2 sm:mb-3 lg:mb-[0.6vw]">
                  About Chromium Industries
                </p>
                <h2 id="about-title" className="font-black leading-none uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] max-w-full lg:max-w-[34vw]">
                  Seven Decades of Excellence
                </h2>
              </div>
              <div className="max-w-full lg:max-w-[40vw] text-white/90 text-base sm:text-lg md:text-xl lg:text-[1.2vw] lg:order-1">
                <p>
                  Since 1955, we've been the trusted partner for precision roll engineering, delivering solutions that keep production lines running flawlessly across packaging, plastics, and converting industries worldwide.
                </p>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(59,130,246,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-sky-500/20 to-cyan-600/20 opacity-60" />
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-400/90 rounded-full flex items-center justify-center" style={{ borderRadius: '18px' }}>
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Quality First</h3>
                  </div>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    Every roll, coating, and finish meets exacting specifications backed by certified inspection data and decades of metallurgical expertise.
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(59,130,246,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-blue-600/20 to-purple-700/20 opacity-60" />
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-400/90 rounded-full flex items-center justify-center" style={{ borderRadius: '18px' }}>
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">24/7 Response</h3>
                  </div>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    Emergency roll repair and rapid turnaround services ensure your production lines stay running with minimal downtime.
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(59,130,246,0.35)]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-sky-500/20 opacity-60" />
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-400/90 rounded-full flex items-center justify-center" style={{ borderRadius: '18px' }}>
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Innovation</h3>
                  </div>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    Advanced thermal spray coatings, precision grinding technology, and continuous process improvements keep us at industry forefront.
                  </p>
                </div>
              </article>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2">70+</p>
                <p className="text-white/70 text-sm sm:text-base uppercase tracking-wider">Years in Business</p>
              </div>
              <div className="text-center">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2">24/7</p>
                <p className="text-white/70 text-sm sm:text-base uppercase tracking-wider">Emergency Service</p>
              </div>
              <div className="text-center">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2">100%</p>
                <p className="text-white/70 text-sm sm:text-base uppercase tracking-wider">Quality Certified</p>
              </div>
              <div className="text-center">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2">1000s</p>
                <p className="text-white/70 text-sm sm:text-base uppercase tracking-wider">Rolls Serviced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Library Section */}
      <section id="videos" className="relative px-[18px] pb-32" aria-labelledby="videos-title">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 shadow-2xl"
          style={{ borderRadius: '3vw', minHeight: 'calc(100vh - 220px)' }}
        >
          {/* Decorative Elements */}
          <div className="absolute left-[4vw] top-[4vw] opacity-10" style={{ width: '22vw', height: '22vw' }}>
            <svg viewBox="-30 -30 460 460" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="48" fill="none" />
              <circle cx="200" cy="200" r="90" stroke="white" strokeWidth="32" fill="none" />
              <path d="M200 20 L380 140 L320 360 L80 300 Z" fill="white" opacity="0.18" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-12 p-10 sm:p-12 md:p-14 lg:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-full lg:max-w-[40vw] text-white/90 text-base sm:text-lg md:text-xl lg:text-[1.2vw]">
                <p>
                  Every service we deliver is backed by decades of specialized experience. Explore our video
                  briefs to see how Chromium Industries applies craft, technology, and speed to solve unique
                  production challenges across industries.
                </p>
              </div>
              <div className="text-white lg:text-right">
                <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 text-sm sm:text-base lg:text-[0.8vw] mb-2 sm:mb-3 lg:mb-[0.6vw]">
                  Video Library
                </p>
                <h2 id="videos-title" className="font-black leading-none uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] max-w-full lg:max-w-[34vw]">
                  Precision Engineering In Motion
                </h2>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {SERVICE_CATEGORIES.map((category) => {
                const isActive = activeCategory === category.key;
                return (
                  <button
                    key={category.key}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setCurrentPage(1);
                    }}
                    className={`px-6 py-2.5 rounded-full border-2 text-sm font-semibold tracking-wide transition-all backdrop-blur-sm ${
                      isActive
                        ? 'bg-white/25 border-white/60 text-white shadow-lg'
                        : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {visibleVideos.length > 0 ? (
                visibleVideos.map((video) => (
                  <article
                    key={video.id}
                    className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(59,130,246,0.35)]"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-80"
                      style={{ clipPath: 'inset(0 0 20% 0 round 28px)' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.accent} opacity-60`} />
                    <div className="relative z-10 flex flex-col gap-6">
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className={`aspect-video w-full bg-gradient-to-br ${video.accent} opacity-90`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-white/90 p-4 shadow-lg transition-transform group-hover:scale-105">
                            <svg
                              className="h-6 w-6 text-blue-700"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 text-white">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                          <span>{getCategoryLabel(video.category)}</span>
                          <span className="h-px flex-1 bg-white/20" />
                          <span>{video.duration}</span>
                        </div>
                        <h3 className="text-2xl font-semibold leading-tight">{video.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{video.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm text-white/80">
                        <button
                          className="rounded-full border border-white/20 px-4 py-2 font-semibold uppercase tracking-wider transition-all hover:border-white/60 hover:bg-white/20"
                          aria-label={`Watch preview for ${video.title}`}
                        >
                          Watch Preview
                        </button>
                        <a
                          href="#"
                          className="flex items-center gap-2 font-semibold uppercase tracking-wider hover:text-white"
                          aria-label={`Share ${video.title}`}
                        >
                          Share
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full rounded-3xl border border-white/15 bg-white/10 p-12 text-center text-white/80">
                  We&apos;re preparing new media for this service. Check back soon or explore another category above.
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-4 text-white/80 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm uppercase tracking-[0.3em]">
                Showing {rangeStart === 0 ? '0' : `${rangeStart}-${rangeEnd}`} of {totalFiltered} videos
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={currentPage === 1}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/30 hover:border-white/60 hover:bg-white/20"
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`h-10 w-10 rounded-full border-2 text-sm font-semibold transition-all ${
                          isActive
                            ? 'border-white bg-white text-blue-800 shadow-xl'
                            : 'border-white/20 text-white/70 hover:border-white/60 hover:text-white'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={currentPage === totalPages || totalFiltered === 0}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/30 hover:border-white/60 hover:bg-white/20"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative px-[18px] pb-32" aria-labelledby="gallery-title">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 shadow-2xl"
          style={{ borderRadius: '3vw', minHeight: 'calc(100vh - 220px)' }}
        >
          {/* Decorative Elements */}
          <div className="absolute right-[4vw] top-[4vw] opacity-10" style={{ width: '22vw', height: '22vw' }}>
            <svg viewBox="-30 -30 460 460" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="48" fill="none" />
              <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="32" fill="none" />
              <path d="M120 60 L360 120 L320 360 L40 260 Z" fill="white" opacity="0.16" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-12 p-10 sm:p-12 md:p-14 lg:p-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-full lg:max-w-[40vw] text-white/90 text-base sm:text-lg md:text-xl lg:text-[1.2vw]">
                <p>
                  Every roll, sleeve, and engineered surface we deliver is purpose-built for demanding
                  production environments. Browse our gallery to see recent applications spanning the full
                  Chromium Industries service portfolio.
                </p>
              </div>
              <div className="text-white lg:text-right">
                <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 text-sm sm:text-base lg:text-[0.8vw] mb-2 sm:mb-3 lg:mb-[0.6vw]">
                  Gallery
                </p>
                <h2 id="gallery-title" className="font-black leading-none uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] max-w-full lg:max-w-[34vw]">
                  Project Showcase
                </h2>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {SERVICE_CATEGORIES.map((category) => {
                const isActive = galleryCategory === category.key;
                return (
                  <button
                    key={`gallery-${category.key}`}
                    onClick={() => {
                      setGalleryCategory(category.key);
                      setGalleryPage(1);
                    }}
                    className={`px-6 py-2.5 rounded-full border-2 text-sm font-semibold tracking-wide transition-all backdrop-blur-sm ${
                      isActive
                        ? 'bg-white/25 border-white/60 text-white shadow-lg'
                        : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {visibleGallery.length > 0 ? (
                visibleGallery.map((item) => (
                  <article
                    key={item.id}
                    className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(59,130,246,0.35)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={`${item.title} project by Chromium Industries`}
                        fill
                        sizes="(min-width: 1280px) 24vw, (min-width: 768px) 40vw, 90vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={item.id <= 103}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-50 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
                          <span>{getCategoryLabel(item.category)}</span>
                          <span className="h-px flex-1 bg-white/30" />
                        </div>
                        <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col gap-6 p-6 text-white">
                      <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                      <div className="flex items-center justify-between text-sm text-white/80">
                        <button
                          className="rounded-full border border-white/20 px-4 py-2 font-semibold uppercase tracking-wider transition-all hover:border-white/60 hover:bg-white/20"
                          aria-label={`View ${item.title}`}
                        >
                          View
                        </button>
                        <a
                          href="#"
                          className="flex items-center gap-2 font-semibold uppercase tracking-wider hover:text-white"
                          aria-label={`Share ${item.title}`}
                        >
                          Share
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full rounded-3xl border border-white/15 bg-white/10 p-12 text-center text-white/80">
                  We&apos;re curating new visuals for this category. Explore another discipline above or contact our team for examples.
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-4 text-white/80 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm uppercase tracking-[0.3em]">
                Showing {galleryRangeStart === 0 ? '0' : `${galleryRangeStart}-${galleryRangeEnd}`} of {galleryTotalFiltered}{' '}
                projects
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setGalleryPage((page) => Math.max(1, page - 1))}
                  disabled={galleryPage === 1}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/30 hover:border-white/60 hover:bg-white/20"
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: galleryTotalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = galleryPage === pageNumber;
                    return (
                      <button
                        key={`gallery-page-${pageNumber}`}
                        onClick={() => setGalleryPage(pageNumber)}
                        className={`h-10 w-10 rounded-full border-2 text-sm font-semibold transition-all ${
                          isActive
                            ? 'border-white bg-white text-blue-800 shadow-xl'
                            : 'border-white/20 text-white/70 hover:border-white/60 hover:text-white'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setGalleryPage((page) => Math.min(galleryTotalPages, page + 1))}
                  disabled={galleryPage === galleryTotalPages || galleryTotalFiltered === 0}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/30 hover:border-white/60 hover:bg-white/20"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="relative px-[18px] pb-32" aria-labelledby="connect-title">
        <div
          className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 shadow-2xl"
          style={{ borderRadius: '3vw' }}
        >
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
              <circle cx="320" cy="80" r="120" stroke="white" strokeOpacity="0.3" strokeWidth="36" />
              <circle cx="60" cy="320" r="90" stroke="white" strokeOpacity="0.25" strokeWidth="28" />
              <path d="M40 60L140 20L220 120L120 200Z" fill="white" opacity="0.1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16 p-10 sm:p-12 md:p-14 lg:p-12">
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 text-white lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-full lg:max-w-[40vw]">
                <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 text-sm sm:text-base lg:text-[0.8vw] mb-2 sm:mb-3 lg:mb-[0.6vw]">
                  Before &amp; After
                </p>
                <h2 id="connect-title" className="font-black leading-none uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] max-w-full lg:max-w-[34vw]">
                  The Chromium Difference
                </h2>
              </div>
              <p className="max-w-full lg:max-w-[38vw] text-white/85 text-base sm:text-lg md:text-xl lg:text-[1.2vw]">
                When process-critical surfaces demand perfection, our teams deliver certainty. Compare the reality
                manufacturers face before partnering with Chromium Industries and the confidence they gain after.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {TRANSFORMATION_STATES.map((state) => {
                const isPositive = state.tone === 'positive';
                return (
                  <article
                    key={state.key}
                    className={`relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-10 shadow-2xl transition-transform ${
                      isPositive ? 'hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(34,197,94,0.25)]' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-80" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        isPositive ? 'from-emerald-500/40 via-blue-500/30 to-indigo-600/40' : 'from-rose-500/40 via-blue-500/20 to-indigo-600/30'
                      } mix-blend-lighten`}
                    />
                    <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="flex-shrink-0">
                          {renderFaceIcon(state.tone)}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/70">{state.headline}</p>
                          <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-white mt-1">{state.subhead}</p>
                        </div>
                      </div>
                      <ul className="flex flex-col gap-3 sm:gap-4 text-white/85 text-sm sm:text-base lg:text-[1.05vw]">
                        {state.bulletPoints.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span
                              className={`mt-1 inline-flex h-3 w-3 flex-shrink-0 rounded-full ${
                                isPositive ? 'bg-emerald-300' : 'bg-rose-300'
                              }`}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Subscription */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-sky-500/30 opacity-80" />
              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl text-white">
                  <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/70 text-sm sm:text-base lg:text-[0.8vw]">Stay in the know</p>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Subscribe for precision surface insights</h3>
                  <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-[1.2vw] leading-relaxed">
                    Get quarterly updates on advanced coatings, roll maintenance strategies, and success stories from
                    manufacturers that trust Chromium Industries with their most critical production assets.
                  </p>
                </div>
                <form
                  className="flex w-full flex-col gap-4 rounded-2xl bg-white/10 p-3 backdrop-blur-sm sm:flex-row sm:p-4 lg:w-auto"
                  aria-label="Subscribe to Chromium Industries insights"
                >
                  <label className="flex-1">
                    <span className="sr-only">Email</span>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-white/60 focus:ring-2 focus:ring-blue-200"
                    />
                  </label>
                  <button
                    type="submit"
                    className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
}
