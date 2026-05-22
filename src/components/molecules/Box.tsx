import Images from "../atoms/Images";
import {search} from "../../assets/images/images";
import Title from "../atoms/Title";
import Text from "../atoms/Text"
import { useTranslations } from "next-intl";

interface props{
    imgs:string,
    title:string,
    text:string,
}
export default function Box({imgs,title,text}:props) {
    const t=useTranslations();
  return (
    <div className=" w-75 ds-rounded-lg py-4 px-6 gap-y-4 shadow-2xl shadow-blue-100 flex flex-col items-start hover:scale-105">
        <Images src={imgs} alt="services-imgs" center={false} />
        <Title varient="title">{t(title)}</Title>
        <Text varient="des">{t(text)}</Text>
    </div>
  )
}

//moleucles:Box
//resuable component :props
//translate :en,ar
//data