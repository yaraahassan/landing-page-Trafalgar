"use client";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/atoms/Input";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { AiOutlineMail } from "react-icons/ai";
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from "next-intl";
import { useState } from "react";
import useForget from "../hooks/useForget";


export default function ForgetForm() {
    const t=useTranslations();
    const {mutate,isPending}=useForget();
    const [form,setForm]=useState({
        email:""
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       setForm({
        ...form,
        [e.target.name]:e.target.value
       })
    }

    const handleSubmit=(e:React.FormEvent)=>{
       e.preventDefault();
       mutate(form,{
        onSuccess:()=>{
            alert("تم ارسال رمز التحقق الي بريدك الالكتروني")
        },
        onError:()=>{
            alert("فشل الارسال حاول ثانية")
        }
       })

    }
  return (
    <div className="w-full h-screen">
        {/* top-bar   */}
        <div className="flex justify-between items-center px-12 py-4">
            <Logo/>
            <div className="flex items-center">
                <span className="mr-5">{t("auth.forget.Login")}</span>
                <Button variant="primary" size="md" >{t("auth.forget.sign")}</Button>
            </div>
        </div>
        {/* body */}
        <div className="ds-bg-alt h-screen flex flex-col justify-center items-center gap-6">
            <Title varient="title" size="xxxxxl" className="font-bold">{t("auth.forget.title")}</Title>
            <Text varient="des" className="font-bold">{t("auth.forget.text")}</Text>
            <form onSubmit={handleSubmit}>
            <div className="relative">
                <AiOutlineMail   className="absolute  top-1 left-3 text-gray-400" size={30} />
                <InputForm type="email" onChange={handleChange} name="email" placeholder={t("auth.forget.input-placeholder")} containerClassName="w-100" className="px-13"/>
            </div>

            <Button variant="primary" className="w-100 mt-6" size="md" type="submit" disabled={isPending}>{isPending ? t("auth.forget.btn3"):  t("auth.forget.btn1")}</Button>
            <div className="relative">
                <ArrowLeft className="absolute top-4 left-20"/>
                 <Button variant="ghost" className="ml-3">{t("auth.forget.btn2")}</Button>
            </div>
            </form>
        </div>
    </div>
  )
}
