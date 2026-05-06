import HeroSection from "@/components/organisms/HeroSection";
import {illustration} from "@/assets/images/images";
import { useTranslations } from "next-intl";
export default function HeroSection2() {
  const t=useTranslations()
  return (
    <div>
        <HeroSection
          title={t("HomePage.Herosection2.title")}
          text={t("HomePage.Herosection2.text")}
           btn={t("HomePage.Herosection2.btn")}
           img={illustration}/>
    </div>
  )
}
