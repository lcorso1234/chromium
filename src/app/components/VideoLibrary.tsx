import React from 'react';
import { SERVICE_CATEGORIES, VIDEO_LIBRARY } from '../data';

export default function VideoLibrary({ activeCategory, setActiveCategory, currentPage, setCurrentPage, VIDEOS_PER_PAGE }) {
  const filteredVideos =
    activeCategory === 'all'
      ? VIDEO_LIBRARY
      : VIDEO_LIBRARY.filter((video) => video.category === activeCategory);
  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE));
  const pageStart = (currentPage - 1) * VIDEOS_PER_PAGE;
  const visibleVideos = filteredVideos.slice(pageStart, pageStart + VIDEOS_PER_PAGE);
  const totalFiltered = filteredVideos.length;
  const rangeStart = totalFiltered === 0 ? 0 : pageStart + 1;
  const rangeEnd = pageStart + visibleVideos.length;

  const getCategoryLabel = (key: string) =>
    SERVICE_CATEGORIES.find((category) => category.key === key)?.label ?? 'All Services';

  return (
    <section id="videos" className="relative px-[18px] pb-32" aria-labelledby="videos-title">
      {/* ...existing code for video library UI... */}
    </section>
  );
}
