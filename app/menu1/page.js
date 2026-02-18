// app/menu1/page.js
"use client";

import { useState } from "react";
import Header from "@/components/menu1/Header";
import SectionButtons from "@/components/menu1/SectionButtons";
import MenuSection from "@/components/menu1/MenuSection";
import Overlay from "@/components/menu1/Overlay";
import Footer from "@/components/menu1/Footer";

const menuData = {
  جديد: [
    {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    // ...repeat items
  ],
  برجر: [
    {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
  ],
  مشروبات: [
    {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
        {
      name: "برجر نباتي",
      price: "50₪",
      desc: "كرات بطاطا البيريه مغطاه بالجبنة الذائبة",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
  ],
};

export default function Menu1Page() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <Header />
      <SectionButtons />
      {Object.entries(menuData).map(([section, items]) => (
        <MenuSection
          key={section}
          id={section}
          title={section}
          items={items}
          onCardClick={handleCardClick}
        />
      ))}
      <Overlay isOpen={isOverlayOpen} onClose={handleCloseOverlay} item={selectedItem} />
      <Footer />
    </>
  );
}