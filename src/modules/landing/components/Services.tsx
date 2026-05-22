import Button from "@/components/atoms/Button";
import Box from "@/components/molecules/Box";
import Heading from "@/components/molecules/Heading";
import { boxData } from "@/utils/data";
import { useTranslations } from "next-intl";

export default function Services() {
  const t=useTranslations();
  return (
    <div className="mb-35">
        <Heading  
        title="HomePage.services.title" 
        text="HomePage.services.text"
        />

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 max-w-[80%] mx-auto'>
            {
              boxData.map((box)=>(
                  <Box key={box.id} title={box.title} text={box.text} imgs={box.img}/>
              ))
            }
            
        </div>

        <Button variant="bg" isRounded={true} className="mt-18">{t("HomePage.services.btn")}</Button>
    </div>
  )
}
