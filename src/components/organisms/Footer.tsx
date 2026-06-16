import { useTranslations } from "next-intl";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Link from "next/link";
import { navDataLinks } from "@/utils/data";
import Images from "../atoms/Images";
import { logoImg } from "@/assets/images/images";

export default function Footer() {
  const t=useTranslations();
  return (
    <div className="w-full flex flex-col md:flex-row  h-auto bg-linear-to-t from-[#5A98F2] to-[#67C3F3] flex gap-10 text-center md:text-left md:gap-20 px-6 py-12 md:px-10 md:py-20 lg:px-40 lg:gap-40">
      {/* first */}
      <div className="flex flex-col  gap-y-3">
          {/* <Logo/> */}
      <div className="flex  items-center justify-center">
      <Images src={logoImg} alt="logo-img"/>
      <span className="text-2xl ds-text-btn1 font-bold ">Trafalgar</span>
      </div>   
          <Text  size="lg">{t("HomePage.footer.text")}</Text>
          <Text size="lg">{t("HomePage.footer.copyright")}</Text>
      </div>

      {/* second */}
      <div>
        <Title size="lg" className="mb-4 font-bold ">{t("HomePage.footer.title1")}</Title>
        <div className=" flex flex-col text-lg gap-2 ds-text-btn1 hover : ds-text-title">
            {
              navDataLinks.map((index)=>(
                <Link href="#" key={index.id}>{t(index.link)}</Link>
              ))
            }
      </div>

    </div>

    {/* third */}
    <div>
        <Title size="lg" className="mb-4 font-bold">{t("HomePage.footer.title2")}</Title>
        <Text size="lg">{t("HomePage.footer.text2")}</Text>
        <Text size="lg">{t("HomePage.footer.text3")}</Text>
        <Text size="lg">{t("HomePage.footer.text4")}</Text>
        <Text size="lg">{t("HomePage.footer.text5")}</Text>

    </div>

    {/* fourth */}
        <div>
        <Title  size="lg" className="mb-4 font-bold">{t("HomePage.footer.title3")}</Title>
        <Text size="lg" >{t("HomePage.footer.text6")}</Text>
        <Text size="lg" >{t("HomePage.footer.text7")}</Text>
        <Text size="lg" >{t("HomePage.footer.text8")}</Text>
        <Text size="lg" >{t("HomePage.footer.text9")}</Text>

    </div>
    </div>
  )
}
