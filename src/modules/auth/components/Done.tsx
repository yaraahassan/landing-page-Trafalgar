"use client";
import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import Title from '@/components/atoms/Title';
import Text from '@/components/atoms/Text';
import { useRouter } from 'next/navigation';

export default function Done() {
        const t=useTranslations();
        const router=useRouter();
    
  return (
    <div className='w-full h-screen'>
    {/* top-bar   */}
        <div className="flex justify-between items-center px-12 py-4">
            <Logo/>
            <div className="flex items-center">
                <span className="mr-5">{t("auth.forget.Login")}</span>
                <Button variant="primary" size="md" >{t("auth.forget.sign")}</Button>
            </div>
        </div>
        {/* body */}
        <div className="w-full h-screen ds-bg-alt flex flex-col items-center justify-center gap-8 ">
 <div className='w-[600px] h-[400px] ds-rounded-lg shadow-xl flex flex-col items-center justify-center gap-8 '>        
           <div className='w-20 h-20 rounded-full bg-[#b1e6c4] relative'>
                <Check size={50} className='text-[#189747] font-bold absolute right-4 top-4'/>
          </div>
            <Title size='xxxxxl' varient="title" className='font-bold'>{t("auth.done.title")}</Title>
            <Text varient='des' size='lg'>{t("auth.done.text")}</Text>
            <Button variant='primary' onClick={()=>router.push("/sign-in")}>{t("auth.done.btn")}</Button>
</div>
        </div>
    </div>
  )
}
