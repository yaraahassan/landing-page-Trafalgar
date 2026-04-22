import LocaleSwitcher from '@/components/atoms/LocalSwitcher';
import Text from '@/components/atoms/Text';
import Box from '@/components/molecules/Box';
import PublicTemplate from '@/components/templates/PublicTemplate'
import { boxData } from '@/utils/data';
import {useTranslations} from 'next-intl';
export default function page() {
  const t=useTranslations("HomePage");
  return (
    <>
        <PublicTemplate>
            
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>
            {
              boxData.map((box)=>(
                  <Box key={box.id} title={box.title} text={box.text} imgs={box.img}/>
              ))
            }
          </div>

        </PublicTemplate>
      
          
    

    </>
  )
}
