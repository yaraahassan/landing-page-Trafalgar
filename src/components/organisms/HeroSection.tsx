import Title from "../atoms/Title"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import Images from "../atoms/Images";
import { useTranslations } from "next-intl";

interface props{
        title:string;
        text:string;
        btn:string;
        img:string;
    }
export default function HeroSection({title,text,btn,img}:props) {
 const t=useTranslations()
  return (
    <div className="flex justify-between items-center ">
        <div className="flex flex-col w-[31%] h-[33%] gap-y-6">
            <Title size="xxxxxl" varient="title">{t(title)}</Title>
            <Text size="lg" varient="des">{t(text)}</Text>
            <Button isRounded={true} center={false}>{t(btn)}</Button>
        </div>
        <div>
          <Images src={img} alt="hero-img" 
          // width={693} height={598}
          className="w-full h-auto"/>
        </div>
    </div>
  )
}
