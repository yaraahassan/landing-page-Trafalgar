import Title from "../atoms/Title"
import Text from "../atoms/Text"
import { useTranslations } from "next-intl";

interface props{
    title:string;
    text:string;
}
export default function Heading({title,text}:props) {
  const t=useTranslations();
  return (
    <div className="">
        <Title center={true} size="xl" >{t(title)}</Title>
        <Text center={true} size="md" className="w-502">{t(text)}</Text>
    </div>
  )
}
