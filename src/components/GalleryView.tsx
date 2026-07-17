import React, { useState, useMemo } from 'react';
import { 
  X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2, 
  Image as ImageIcon, Filter, Tag 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../types';
import SeoManager from './SeoManager';

export default function GalleryView() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'front' | 'shelves' | 'products' | 'equipment' | 'store'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'front', label: 'Store Front' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'products', label: 'Wellness Products' },
    { id: 'equipment', label: 'Medical Equipment' },
    { id: 'store', label: 'Customers & Consultations' },
  ];

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === selectedFilter);
  }, [selectedFilter]);

  const openLightbox = (id: string) => {
    const idx = filteredItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setZoomScale(1); // reset zoom
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
      setZoomScale(1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      setZoomScale(1);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.max(prev - 0.25, 0.75));
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '#gallery' }
  ];

  return (
    <div id="gallery-view" className="animate-fade-in bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12">
      <SeoManager 
        pageTitle="Store & Product Gallery" 
        pageDescription="Take a virtual tour of Dev Medical in Titaiganj. Inspect our neat shelves, diagnostic devices, genuine product inventory, and customer counters."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-2">
          <nav className="flex text-xs font-semibold text-slate-400 gap-1.5 items-center font-mono uppercase">
            <span>Dev Medical</span>
            <span>/</span>
            <span className="text-[#0A8F6A]">Store Gallery</span>
          </nav>
          <h1 className="font-sans font-extrabold text-4xl text-blue-900 dark:text-blue-400 tracking-tight">
            Dev Medical Store Gallery Tour
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            A glimpse into our clean, climate-controlled storage environment, licensed retail counter, wellness products, and pediatric shelves in Makhdumpur.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex items-center gap-3 pb-2 border-b border-slate-200/50 dark:border-slate-800/50 overflow-x-auto scrollbar-none">
          <div className="p-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
            <Filter className="h-4 w-4" />
          </div>
          
          <div className="flex gap-2">
            {filters.map((fil) => (
              <button
                key={fil.id}
                id={`filter-tab-${fil.id}`}
                onClick={() => {
                  setSelectedFilter(fil.id as any);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedFilter === fil.id
                    ? 'bg-[#0A8F6A] text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 border border-slate-200/50 dark:border-slate-800'
                }`}
              >
                {fil.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-image-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-150 dark:border-slate-800 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group flex flex-col justify-between"
            >
              {/* Image thumbnail */}
              <div className="h-64 overflow-hidden relative bg-slate-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/20">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Description bar */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                  <Tag className="h-3 w-3 text-[#0A8F6A]" />
                  <span>{item.category}</span>
                </div>
                <h3 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* No images fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/80">
            <ImageIcon className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              No photos currently matching this segment.
            </p>
          </div>
        )}

      </div>

      {/* Popup Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          id="lightbox-backdrop"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-fade-in"
        >
          {/* Lightbox Top Control panel */}
          <div className="flex items-center justify-between w-full relative z-10">
            <div className="text-xs sm:text-sm font-sans font-mono tracking-wide text-slate-400">
              📁 Photo {lightboxIndex + 1} of {filteredItems.length}
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Zoom Buttons */}
              <button
                onClick={handleZoomOut}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                title="Zoom Out"
              >
                <ZoomOut className="h-4.5 w-4.5" />
              </button>
              <span className="text-[10px] font-mono font-bold bg-white/5 px-2 py-1 rounded text-slate-300">
                {(zoomScale * 100).toFixed(0)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white mr-4"
                title="Zoom In"
              >
                <ZoomIn className="h-4.5 w-4.5" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="p-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all"
                title="Close Fullscreen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage Image Viewer */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Image Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 z-10 p-3 bg-white/10 hover:bg-white/25 text-white hover:scale-105 rounded-full transition-all border border-white/5"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Stage Photo Box */}
            <div className="transition-transform duration-200 ease-out max-h-[70vh] max-w-[85vw] overflow-auto flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                onClick={(e) => e.stopPropagation()} // don't close on image click
                className="object-contain max-h-[70vh] max-w-[80vw] rounded-lg shadow-2xl transition-all"
                style={{ transform: `scale(${zoomScale})` }}
              />
            </div>

            {/* Next Image Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 z-10 p-3 bg-white/10 hover:bg-white/25 text-white hover:scale-105 rounded-full transition-all border border-white/5"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Lightbox Bottom Info Panel */}
          <div className="w-full text-center space-y-2 max-w-2xl mx-auto pb-4 relative z-10" onClick={(e) => e.stopPropagation()}>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#0A8F6A]">
              {filteredItems[lightboxIndex].category} department
            </span>
            <h2 className="font-sans font-bold text-xl sm:text-2xl text-white">
              {filteredItems[lightboxIndex].title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              {filteredItems[lightboxIndex].description}
            </p>
          </div>

        </div>
      )}

    </div>
  );
}
