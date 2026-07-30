"use client";
import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

export default function OtpForgetForm() {
    const t=useTranslations();
    const [otp,setOtp]=useState(["","","","","",""])
    const inputRefs=useRef <(HTMLInputElement|null)[]>([])
    const handleKeyDown=(index:number,e:React.KeyboardEvent<HTMLInputElement>)=>{
       if(e.key=="Backspace" && index>0 && !otp[index])
        inputRefs.current[index-1]?.focus
    }
    const handleChange=(index:number,value:string)=>{
     if(!/^\d*$/.test(value)) return
     
        const newOtp=[...otp];
        newOtp[index]=value.slice(0,1)
        setOtp(newOtp)
        if(value && index<5){
            inputRefs.current[index+1]?.focus
        }
        
    }

     const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("");
      const newOtp = [...otp];
      digits.forEach((digit, idx) => {
        if (idx < 6) newOtp[idx] = digit;
      });
      setOtp(newOtp);
      const lastIndex = Math.min(digits.length - 1, 5);
      inputRefs.current[lastIndex]?.focus();
    }
  };
  return (
    <div className="w-full h-screen">
        {/* top bar */}
              <div className="flex justify-between items-center px-12 py-4">
                    <Logo/>
                    <div className="flex items-center">
                        <span className="mr-5">{t("auth.forget.Login")}</span>
                        <Button variant="primary" size="md" >{t("auth.forget.sign")}</Button>
                    </div>
              </div>

              {/* body */}
              <div className="h-screen ds-bg-alt flex flex-col items-center justify-center gap-6">
                <Title varient="title" size="xxxxxl" className="font-bold">{t("auth.otp-forget.title")}</Title>
                <Text varient="des" className="font-bold max-w-160 text-center" size="lg">{t("auth.otp-forget.text1")}</Text>
              {/* otp */}
                 <div className="flex gap-6 ">
                 {
                    otp.map((digit,index)=>(
                        <input 
                        maxLength={1}
                        type="text"
                        ref={(el=>{inputRefs.current[index]=el})}
                        inputMode="numeric"
                        value={digit}
                        key={index}
                        autoFocus={index===0}
                        aria-label={`otp digit ${index+1}`}
                        onKeyDown={(e)=>handleKeyDown(index,e)}
                        onChange={(e)=>handleChange(index,e.target.value)}
                        onPaste={index === 0 ? handlePaste : undefined}

                        className=" w-12 h-12 border border-blue-500 focus:outline-none text-center"
                        />
                    ))
                 }
                 </div>

                <Text varient="des">{t("auth.otp-forget.text2")}</Text>
                <Button variant="primary" className="w-100">{t("auth.otp-forget.btn1")}</Button>
                <Button variant="bg" className="w-100">{t("auth.otp-forget.btn2")}</Button>

              </div>

    </div>
  )
}
