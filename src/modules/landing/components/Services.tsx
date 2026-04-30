import Box from "@/components/molecules/Box";
import Heading from "@/components/molecules/Heading";
import { boxData } from "@/utils/data";

export default function Services() {
  return (
    <div className="mt-60">
        <Heading  
        title="HomePage.services.title" 
        text="HomePage.services.text"
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
