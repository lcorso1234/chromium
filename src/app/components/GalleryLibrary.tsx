import React from 'react';
import { SERVICE_CATEGORIES, GALLERY_LIBRARY } from '../data';

export default function GalleryLibrary({ galleryCategory, setGalleryCategory, galleryPage, setGalleryPage, GALLERY_IMAGES_PER_PAGE }) {
  const filteredGallery =
    galleryCategory === 'all'
      ? GALLERY_LIBRARY
      : GALLERY_LIBRARY.filter((item) => item.category === galleryCategory);
  const galleryTotalPages = Math.max(1, Math.ceil(filteredGallery.length / GALLERY_IMAGES_PER_PAGE));
  const galleryStart = (galleryPage - 1) * GALLERY_IMAGES_PER_PAGE;
  const visibleGallery = filteredGallery.slice(galleryStart, galleryStart + GALLERY_IMAGES_PER_PAGE);
  const galleryTotalFiltered = filteredGallery.length;
  const galleryRangeStart = galleryTotalFiltered === 0 ? 0 : galleryStart + 1;
  const galleryRangeEnd = galleryStart + visibleGallery.length;

  const getCategoryLabel = (key: string) =>
    SERVICE_CATEGORIES.find((category) => category.key === key)?.label ?? 'All Services';

  return (
    <section id="gallery" className="relative px-[18px] pb-32" aria-labelledby="gallery-title">
      {/* ...existing code for gallery UI... */}
    </section>
  );
}
