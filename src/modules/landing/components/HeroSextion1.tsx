import HeroSection from "@/components/organisms/HeroSection";
import { trafalgar } from "@/assets/images/images";

export default function HeroSextion1() {
  return (
    <div>
        <HeroSection
         title="HomePage.HeroSection.title"
         text="HomePage.HeroSection.text"
         btn="HomePage.HeroSection.btn"
         img={trafalgar }
          />
    </div>
  )
}
