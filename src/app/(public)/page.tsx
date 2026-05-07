import LocaleSwitcher from '@/components/atoms/LocalSwitcher';
import PublicTemplate from '@/components/templates/PublicTemplate'
import CustomerSays from '@/modules/landing/components/CustomerSays';
import HeroSection2 from '@/modules/landing/components/HeroSection2';
import Herosection3 from '@/modules/landing/components/Herosection3';
import HeroSextion1 from '@/modules/landing/components/HeroSextion1';
import Services from '@/modules/landing/components/Services';
import {useTranslations} from 'next-intl';
export default function page() {
  const t=useTranslations("HomePage");
  return (
    <>
        <PublicTemplate>
          <HeroSextion1/>
          <Services/>
          <HeroSection2/>
          <Herosection3/>
          <CustomerSays/>
            


        </PublicTemplate>
      
          
    

    </>
  )
}
