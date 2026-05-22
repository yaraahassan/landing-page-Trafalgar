import Title from "@/components/atoms/Title";
import { useTranslations } from "next-intl";
import {cardsData} from "@/modules/landing/utils/data";
import Card from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";
export default function LatestArticle() {
    const t=useTranslations();
  return (
    <div className="mb-20 max-w-[80%] mx-auto">
        <Title varient="title" size="xl" center={true} className="mb-15 font-bold">{t("HomePage.latestArticle.title")}</Title>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {
            cardsData.map((card)=>(
                <Card key={card.id} title={card.title}
                img={card.img} text={card.text} btn={card.button}/>
            )
            )
         }
         </div>
        <Button variant="bg" isRounded={true} className="text-center mt-15">{t("HomePage.latestArticle.mainBtn")}</Button>

    </div> 
  )
}
