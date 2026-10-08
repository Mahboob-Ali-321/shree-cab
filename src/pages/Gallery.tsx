import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Camera } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SafeImage from "../components/SafeImage";
import { images } from "../images";

export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const photos = images.gallery;

  const filteredPhotos = filter === "all"
    ? photos
    : photos.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  const activePhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Header Banner with Unique Image */}
      <PageBanner
        title="Visual Journey & Travel Gallery"
        hindiTitle="यात्रा व गैलरी"
        subtitle="Glimpses of our sanitized cars, express highway journeys, temple pilgrimages, and scenic drives across Jharkhand and West Bengal."
        badge="Moments on the Road"
        imageSrc={images.pageBanners.gallery}
      />

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar w-full sm:w-auto">
            {["all", "Fleet", "Highway", "Tours", "Airport", "Safety"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer min-h-[38px] ${
                  filter.toLowerCase() === cat.toLowerCase()
                    ? "bg-[#0B1F3A] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat === "all" ? "All Photos" : cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-amber-500" />
            <span>Click any photo to view in high-resolution lightbox</span>
          </div>
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => {
                  const originalIndex = photos.findIndex((p) => p.id === photo.id);
                  setSelectedPhotoIndex(originalIndex);
                }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
              >
                <SafeImage
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  containerClassName="w-full h-full"
                />

                {/* Dark Hover Scrim with Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {photo.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mt-3">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Buttons */}
            <button
              onClick={() =>
                setSelectedPhotoIndex(
                  selectedPhotoIndex > 0 ? selectedPhotoIndex - 1 : photos.length - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setSelectedPhotoIndex(
                  selectedPhotoIndex < photos.length - 1 ? selectedPhotoIndex + 1 : 0
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <SafeImage
                src={activePhoto.fullUrl || activePhoto.url}
                alt={activePhoto.title}
                loading="eager"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="p-6 bg-[#0B1F3A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400">
                  {activePhoto.category} · Photo {selectedPhotoIndex + 1} of {photos.length}
                </span>
                <h3 className="text-lg font-bold mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {activePhoto.caption}
                </p>
              </div>

              <span className="text-xs text-slate-400 whitespace-nowrap">
                Shree Balajee Travels · Dhanbad
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
