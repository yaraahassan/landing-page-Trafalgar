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
        reverse?:boolean;
    }
export default function HeroSection({title,text,btn,img, reverse=false}:props) {
 const t=useTranslations()
  return (
    <div className={`"max-w-[90%] mx-auto lg:flex justify-between items-center sm:flex flex-col " ${reverse ? "flex-row-reverse" : "flex-row"}`}>
        <div className="flex flex-col mb-6 sm:w-full text-center lg:text-start lg:w-[31%] h-[33%] gap-y-6">
            <Title size="xxxxxl" varient="title" >{t(title)}</Title>
            <Text size="lg" varient="des">{t(text)}</Text>
            <Button isRounded={true} center={false}>{t(btn)}</Button>
        </div>
        <div>
          <Images src={img} alt="hero-img" 
          // width={693} height={598}
          className=" w-full h-auto"/>
        </div>
    </div>
  )
}
