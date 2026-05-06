import HeroSection from "@/components/organisms/HeroSection";
import { useTranslations } from "next-intl";
import {sec03} from "@/assets/images/images";

export default function Herosection3() {
    const t=useTranslations();
  return (
    <div>
        <HeroSection
            title={t("HomePage.Herosection3.title")}
            text={t("HomePage.Herosection3.text")}
            btn={t("HomePage.Herosection3.btn")}
            img={sec03}
        />
    </div>
  )
}
