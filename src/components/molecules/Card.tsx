import { useTranslations } from "next-intl";
import Button from "../atoms/Button";
import Images from "../atoms/Images";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { ArrowRight } from "@/assets/icons/icons";
//resuable - loop

interface props{
    img:string,
    title:string,
    text:string,
    btn:string
}
export default function Card({img,title,text,btn}:props) {
  const t=useTranslations();
  return (
    <div className="flex flex-col gap-y-6 shadow-2xl shadow-blue-100 ds-rounded-lg ds-hover hover:scale-105">
        <Images src={img} alt="card-img" className="w-full"/>
        <div className="flex flex-col gap-y-3">
          <Title varient="title"  className="font-bold px-6">{t(title)}</Title>
          <Text varient="des" className="px-6" size="sm"> {t(text)}</Text>
          <Button className="px-6 border-none " variant="bg" center={false} size="sm">{t(btn)} <span><ArrowRight/></span></Button>
        </div>
    </div>
  )
}
