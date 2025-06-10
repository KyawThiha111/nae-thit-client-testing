"use client";
import React, { useState } from "react";

export default function OurServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const galleryFilters = ["All", "Events", "Volunteers", "Community", "Causes"];

  const galleryImages = [
    {
      id: 1,
      category: "Events",
      title: "Annual Charity Gala 2023",
      description:
        "Our fundraising gala raised over $250,000 for education programs",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 2,
      category: "Volunteers",
      title: "Food Packing Day",
      description: "Volunteers preparing meals for 500+ families",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 3,
      category: "Community",
      title: "School Supplies Drive",
      description: "Distributing backpacks to local students",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 4,
      category: "Causes",
      title: "Clean Water Initiative",
      description: "Installing water filters in rural communities",
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 5,
      category: "Events",
      title: "Charity Fun Run",
      description: "500 participants raised funds for health clinics",
      image:
        "https://images.unsplash.com/photo-1530137073520-4d1a3f9d1a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 6,
      category: "Volunteers",
      title: "Senior Companion Program",
      description: "Volunteers visiting isolated elderly community members",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 7,
      category: "Community",
      title: "Neighborhood Cleanup",
      description: "Over 100 volunteers transformed local parks",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 8,
      category: "Causes",
      title: "Disaster Relief Efforts",
      description: "Providing emergency supplies after floods",
      image:
        "https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      id: 9,
      category: "Events",
      title: "Holiday Toy Drive",
      description: "Collecting gifts for 1,200 children in need",
      image:
        "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: string) => {
    if (direction === "prev") {
      setCurrentImage((prev) =>
        prev === 0 ? filteredImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImage((prev) =>
        prev === filteredImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-normal mb-4">Our Gallery</h1>
          <p className="text-xl">
            Visual stories of impact, community, and hope from our charitable
            work
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {img.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{img.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {img.category}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredImages.length > 6 && (
            <div className="mt-12 text-center">
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
          >
            &times;
          </button>

          <div className="relative max-w-4xl w-full">
            <img
              src={filteredImages[currentImage].image}
              alt={filteredImages[currentImage].title}
              className="w-full max-h-[80vh] object-contain"
            />

            <div className="bg-white p-4">
              <h3 className="text-xl font-bold">
                {filteredImages[currentImage].title}
              </h3>
              <p className="text-gray-600">
                {filteredImages[currentImage].description}
              </p>
            </div>

            <button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => navigateLightbox("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
