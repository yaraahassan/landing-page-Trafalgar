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
    <div className="w-[68%] mt-48 mx-auto mb-20">
        <Title center={true} size="xl">{t(title)}</Title>
        <Text center={true} size="md">{t(text)}</Text>
        
    </div>
    
  )
}
