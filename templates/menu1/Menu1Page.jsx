"use client";

import { useState } from "react";
import Header from "@/components/menu1/Header";
import SectionButtons from "@/components/menu1/SectionButtons";
import MenuSection from "@/components/menu1/MenuSection";
import Overlay from "@/components/menu1/Overlay";
import Footer from "@/components/menu1/Footer";

export default function Menu1Page({ menuData }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <SectionButtons sections={menuData} />

      {menuData.map((section) => (
        <MenuSection
          key={section.title}
          id={section.title}
          title={section.title}
          items={section.items}
          onCardClick={setSelectedItem}
        />
      ))}

      <Overlay
        isOpen={!!selectedItem}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      <Footer />
    </>
  );
}
