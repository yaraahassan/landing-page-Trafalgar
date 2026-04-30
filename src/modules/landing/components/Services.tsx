import Box from "@/components/molecules/Box";
import Heading from "@/components/molecules/Heading";
import { boxData } from "@/utils/data";

export default function Services() {
  return (
    <div className="">
        <Heading  
        title="Our services" 
        text="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        />

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>
            {
              boxData.map((box)=>(
                  <Box key={box.id} title={box.title} text={box.text} imgs={box.img}/>
              ))
            }
            
        </div>
    </div>
  )
}
