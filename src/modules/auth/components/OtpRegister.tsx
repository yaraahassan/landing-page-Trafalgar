"use client";
import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
// import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import useOtpRegister from "../hooks/useOtpRegister";
import { useRouter, useSearchParams } from "next/navigation";

export default function OtpRegister() {
const router=useRouter();
 const searchParams= useSearchParams();
const email=searchParams.get("email");
  const{mutate,isPending}=useOtpRegister();
const [otp,setOtp]=useState(["","","","","",""]);
const inputRefs=useRef <(HTMLInputElement|null)[]>([])



const handleKeyDown =(index:number,e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key=="Backspace" && index >0 &&!otp[index]){
      inputRefs.current[index-1]?.focus()
    }
}

const handleChange=(index:number,value:string)=>{
    if(!/^\d*$/.test(value)) return
     const newOtp=[...otp]
     newOtp[index]=value.slice(0,1);
     setOtp(newOtp);
     if(value && index <5 ){
      inputRefs.current[index+1]?.focus();
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

//   const { mutate: verifyOtp } = useOtpRegister();

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  mutate({
    email: email ?? "",
    otp: otp.join(""),
  },{
    onSuccess:()=> {
      alert('تم التحقق من الحساب بنجاح');
      router.push(`/sign-in`)

    },
    onError:()=>{
      alert("فشل التحقق من الحساب")
    }
  });
};
  return (
    <div className="w-full h-screen">
  {/* top bar */}
        <div className='flex items-center justify-between  px-10 py-4'>
            <Logo/>
            <p>Don’t have account? <span className='ds-text-btn2'>Apply Now</span></p>
        </div>

     <div className="w-full h-full flex flex-col gap-10 items-center justify-center ds-bg-alt">
      <Title varient="title" size="xxxxxl" className="font-bold">Verify Your OTP for Register</Title>
      <Text varient="des" size="md" className="font-bold">We’ve sent a 6-digit code to your email, Please enter it below to verify your account</Text>
     <form onSubmit={handleSubmit}>
     <div className="w-full flex justify-center gap-3">
      {otp.map((digit,index)=>(
         <input
         key={index}
         value={digit}
         ref={(el)=>{inputRefs.current[index]=el}}
         maxLength={1}
         type="text"
         inputMode="numeric"
         autoFocus={index===0}
         aria-label={`otp digit ${index+1}`}
         onKeyDown={(e)=>handleKeyDown(index,e)}
         onChange={(e)=>handleChange(index,e.target.value)}
         onPaste={index === 0 ? handlePaste : undefined}
         className="w-12 h-12 
         focus:outline-none
         ds-shadow-md
         border
         border-blue-500
         rounded-md
         text-center
         "
         
         />
      ))}
     </div>
      <Text varient="des" className="text-center mt-6">This code will expire in 60 seconds</Text>
      <Button type="submit" className="w-100 mt-6" disabled={isPending}>Verify</Button>
      <Button variant="bg" className="w-100 mt-6">Send again</Button>
      </form>
      </div>

    </div>
  )
}
