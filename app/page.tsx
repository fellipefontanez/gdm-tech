import FeatureCards from "@/src/components/FeatureCards/cards";
import Footer from "@/src/components/Footer/Footer";
import HeroBanner from "@/src/components/HeroBanner/banner";
import SecuritySection from "@/src/components/SecuritySection/SecuritySection";

export default function Home() {
  return (
    <section>
      <HeroBanner />
      <FeatureCards />
      <SecuritySection />
    </section>
  );
}
