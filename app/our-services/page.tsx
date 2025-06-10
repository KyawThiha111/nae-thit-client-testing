"use client";
import DaungMyiSection from "@/components/pages/our-services/DaungMyiSection";
import OurServiceSection from "@/components/pages/our-services/OurServiceSection";
import Image from "next/image";
import React, { useState } from "react";

const threeKeys = [
  {
    title: "Hepatitis",
    description:
      "Comprehensive care and prevention through vaccination, screening, counseling, and treatment for Hepatitis B and C.",
    img: "/source/Hepatitis.png",
  },
  {
    title: "NCD (Diabetes, Hypertension)",
    description:
      "Ensuring early detection, effective treatment, lifelong management while promoting healthy lifestyles to prevent complications, disability, and premature death.",
    img: "/source/NCD.png",
  },
  {
    title: "RMNCH",
    description:
      "Ensuring access to reproductive health services, maternal and child health through quality antenatal care, safe deliveries, immunization  and postpartum support.",
    img: "/source/ANC_MCH.png",
  },
];

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
    <div className="min-h-screen pb-10">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-xl">
            We are dedicated to making a positive impact in our community
            through various services.
          </p>
        </div>
      </section>

      <section className=" py-16">
        <div className=" container">
          <h2 className=" text-3xl font-bold text-center">
            We primarily focuses on{" "}
            <span className=" text-4xl text-primary">3 key</span> health
            priorities with{" "}
            <span className="text-4xl text-primary">
              high national prevalence rates.
            </span>
          </h2>
        </div>
      </section>

      <section className=" py-5">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {threeKeys.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-7 shadow border rounded-3xl"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className=" text-2xl font-bold mb-3 ">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <OurServiceSection />

      <DaungMyiSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" order-2 lg:order-1 flex">
            <div className=" my-auto">
              <h2 className="text-3xl font-bold mb-6">
                Specialized instead of{" "}
                <span className=" text-primary">Specialists</span>
              </h2>
              <div className="space-y-6  text-gray-700">
                <p>
                  While non-profits have long focused on primary healthcare
                  (PHC), Myanmar’s evolving crisis has outpaced this model:
                  Worsening economic inequality pushes more people into
                  self-treatment via informal pharmacies, where unregistered,
                  low-quality medications dominate. Decreased affordability of
                  specialist visits has led to lower compliance and more
                  complications.
                </p>
              </div>
            </div>
          </div>
          <div className=" min-h-[200px] lg:h-auto bg-gray-200 rounded-lg order-1 lg:order-2">
            <Image
              src={"/imgs/special.jpg"}
              alt="special"
              width={500}
              height={500}
              className=" w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" min-h-[200px] lg:h-auto bg-gray-200 rounded-lg">
            <Image
              src={"/imgs/affordable.jpg"}
              alt="affordable"
              width={500}
              height={600}
              className=" w-full lg:max-h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className=" flex">
            <div className=" my-auto h-fit">
              <h2 className="text-3xl font-bold mb-2 text-primary leading-10">
                HOW CAN WE MAKE IT <br />
                <span className=" text-secondary text-4xl">AFFORDABLE ?</span>
              </h2>
              <h3 className=" text-2xl font-semibold mb-3">
                Balancing <span className=" text-primary">cost-efficiency</span>{" "}
                with maintaining{" "}
                <span className=" text-primary">high standards of care</span>
              </h3>
              <div className="space-y-6 text-gray-700">
                <p>
                  High operational costs, limited access to affordable
                  technologies, economic disparities among patients, systemic
                  issues like inadequate healthcare funding, regulatory
                  barriers, and workforce shortages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
