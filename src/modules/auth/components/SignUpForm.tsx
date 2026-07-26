"use client";
import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import Text from '@/components/atoms/Text'
import Title from '@/components/atoms/Title'
import { useTranslations } from 'next-intl'
import { FcGoogle,FaGithub} from "@/assets/icons/icons"
import InputForm from '@/components/atoms/Input'
import useSignUP from '../hooks/useSignUP'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const router=useRouter();
    const {mutate,isPending}=useSignUP();
    const t=useTranslations();
    const [form,setForm]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();

        const {confirmPassword,...data}=form;
        mutate(data,{
            onSuccess:()=>{
                alert('تم تسجيل دخول مستخدم جديد بنجاح')
                router.push(`/otp-register?email=${form.email}`)
            },
            // onError:(err)=>{
            //     console.log(err);
            //     // alert("فشل حاول ثانية")
            //       alert(err.response?.data?.message || "حدث خطأ");

            // }
            
//             onError: (err: any) => {
//   console.log("Status:", err.response?.status);
//   console.log("Data:", err.response?.data);
//                   alert("فشل حاول ثانية")
                  

// }

onError: (err: any) => {
  console.log("Status:", err.response?.status);

  console.log("Response Data:", err.response?.data);

  console.log(
    "Response Data JSON:",
    JSON.stringify(err.response?.data, null, 2)
  );

  alert(err.response?.data?.message || "حدث خطأ");
}
        })

    }
  return (
    // container
    <div className='w-full h-screen'>
        {/* top bar */}
        <div className='flex items-center justify-between  px-10 py-6'>
            <Logo/>
            <p>Don’t have account? <span className='ds-text-btn2'>Apply Now</span></p>
        </div>

        {/* body */}
        <div className='w-full h-full flex ds-bg-alt'>
            {/* description */}
            <div className='w-[40%] flex flex-col gap-6 h-full text-center ds-bg-primary items-center justify-center'>
                <Title size='xxxxxl' className='px-40'>{t("auth.signup.desc-title")}</Title>
                <Text size='md' className='font-bold'>{t("auth.signup.desc-text")}</Text>
                <Button variant="outline2">{t("auth.signup.desc-btn")}</Button>

            </div>

            {/* form */}
            <div className='flex flex-col gap-6 items-center justify-center h-full w-[60%]'>
                <Title varient='btn2' size='xxxxxl' className='font-bold'>{t("auth.signup.form-title")}</Title>
                <div className='flex gap-8'>
                    < FcGoogle size={40}/>
                    <FaGithub  size={40}/>
                </div>
                <Text className='font-bold' varient='des'>{t("auth.signup.form-desc")}</Text>
                
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <InputForm type="text" placeholder={t("auth.signup.form-input1")} name="name"onChange={handleChange} containerClassName='w-100'/>
                    <InputForm type="email" placeholder={t("auth.signup.form-input2")} name="email" onChange={handleChange}/>
                    <InputForm type="password" placeholder={t("auth.signup.form-input3")} name="password" onChange={handleChange}/>
                    <InputForm type="password" placeholder={t("auth.signup.form-input4")} name="confirmPassword" onChange={handleChange}/>
                    <div className='flex relative '>
                        <InputForm type='checkbox'className='absolute scale-50 -left-45 -top-2'/>
                        <p className='absolute left-10  '>{t("auth.signup.form-input5")} <span className='ds-text-btn2'>{t("auth.signup.form-input6")}</span></p>
                    </div>

                    <Button type='submit' variant='primary' className='mt-8'>{isPending ? t("auth.signup.form-btn1") :  t("auth.signup.form-btn2")}</Button>


                </form>
            
            </div>


        </div>

       

    </div>
  )
}
