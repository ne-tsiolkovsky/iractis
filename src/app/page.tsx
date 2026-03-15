import Hero from "@/sections/Hero";
import ValueProps from "@/sections/ValueProps";
import ProductSection from "@/sections/ProductSection";
import BentoGrid from "@/sections/BentoGrid";
import ComparisonTable from "@/sections/ComparisonTable";
import MigrationSlider from "@/sections/MigrationSlider";
import SocialProof from "@/sections/SocialProof";
import AboutCompany from "@/sections/AboutCompany";
import FinalCTA from "@/sections/FinalCTA";
import Contacts from "@/sections/Contacts";
import { PRODUCT_SECTIONS } from "@/lib/constants";

const mockupVariants = ["timeline", "analytics", "project"] as const;

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />

      {/* Numbered product sections: 1.0, 2.0, 3.0 */}
      <div id="features">
        {PRODUCT_SECTIONS.map((section, i) => (
          <ProductSection
            key={section.number}
            section={section}
            mockupVariant={mockupVariants[i]}
          />
        ))}
      </div>

      <BentoGrid />

      <div id="comparison">
        <ComparisonTable />
      </div>

      <div id="migration">
        <MigrationSlider />
      </div>

      <div id="about">
        <SocialProof />
        <AboutCompany />
      </div>

      <div id="cta">
        <FinalCTA />
      </div>

      <div id="contacts">
        <Contacts />
      </div>
    </>
  );
}
