"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "./section-heading";

const galleryImages = [
  {
    src: "/images/ideathon.png",
    alt: "Ideathon'26 - 1st Prize Winner",
    title: "Ideathon'26 – 1st Prize",
    description: "Secured 1st Prize among 300+ teams with an innovative AI-driven solution.",
  },
  {
    src: "/images/enthral26.png",
    alt: "Enthral'26 - 1st Prize Winner",
    title: "Enthral'26 – 1st Prize",
    description: "Won 1st Prize in a national-level hackathon with a scalable tech solution.",
  },
  {
    src: "/images/projectX.png",
    alt: "ProjectX Hackathon - Top 10 Finalist",
    title: "ProjectX Hackathon – Top 10",
    description: "Finalist among top 10 teams nationwide, competing with elite developers.",
  },
];

export function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Event Gallery"
            title="Highlights from competitions and events"
            description="Memorable moments from hackathons and competitions where these achievements were earned."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="glass-card rounded-[1.75rem] overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground">{image.title}</h3>
                  <p className="mt-2 text-sm text-muted">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-auto max-h-[90vh]">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="100vw"
              priority
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="mt-4 text-center text-white text-sm">
              {galleryImages[selectedImage].title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
