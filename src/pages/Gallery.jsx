import React, { useState } from "react";

const images = [
  { id: 1, src: "/images/ekofestival.jpeg", title: "Traditional Sculptures" },
  { id: 2, src: "/images/nokart.jpeg", title: "Modern Canvas Art" },
  { id: 3, src: "/images/nokart2.jpeg", title: "Cultural Dance Performance" },
  { id: 4, src: "/images/sculpture.jpeg", title: "Handcrafted Beadwork" },
  { id: 5, src: "/images/bigstatue.jpeg", title: "Student Fashion Showcase" },
  { id: 6, src: "/images/gallery6.jpeg", title: "Creative Exhibition Booth" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full py-20 bg-customGreen mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Event <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="mt-4 text-white text-lg">
            BEAUTIFUL  CULTURAL HERITAGE AND FESTIVALS ACROSS NIGERIA
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[350px] object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-6 left-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-bold"
            >
              ✕
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />

            <p className="text-white text-center mt-6 text-lg font-semibold">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
