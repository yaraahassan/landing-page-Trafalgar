"use client";
import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import InputForm from "@/components/atoms/Input";
import useSignInApi from "../../hooks/useSignInApi";
import { useEffect, useState } from "react";
import { TokenService } from "@/services/tokenService";
import { useRouter } from "next/navigation";



export default function Login() {
    const {mutate,isPending}=useSignInApi();
    const router=useRouter()
    const [form,setForm]=useState({
        email:"",
        password:""
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
console.log(form);
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        mutate(form,{
            onSuccess:()=>{
                alert("تم تسجيل الدخول بنجاح");
                 
            },
            onError:()=>{
                alert("فشل تسجيل الدخول حاول مرة اخري")
            }
        })

    }
  return (
    <div className="h-screen w-full flex flex-col">
        {/* top bar */}
         <div className='flex justify-between px-8 py-4 items-center h-30 '>
            <Logo/>
            <div>
                <p>Don’t have account?<span className='ds-text-btn2'>Apply Now</span> </p>
            </div>
          </div> 
       {/* body */}
        <div className="flex  w-full h-auto ">
            {/* login form */}
            <div className="w-[60%] min-h-screen ds-bg-alt flex flex-col gap-6 items-center justify-center">
                <Title varient="btn2" size="xxxxxl" className="font-bold">SIGN IN</Title>
                <div className="flex gap-8 " >
                    <FcGoogle size={40}/>
                    <FaGithub size={40}/>
                </div>
                <Text varient="des" className="font-bold">Or register using your email address</Text>
            <form onSubmit={handleSubmit}>
                <InputForm type="email" name="email" placeholder="E-mail" containerClassName="w-100" onChange={handleChange}/>
                <InputForm type="password" name="password" placeholder="password" containerClassName="w-100" onChange={handleChange}/>
               <div className="flex justify-between items-center gap-25">
                    <div className="flex items-center relative">
                        <InputForm type="checkbox"  className="scale-50  absolute -left-20 -top-2" />
                        <span>Remember me?</span>
                    </div>
                    <span className="ds-text-btn2 ">Forget password?</span>
                </div>
                <Button type="submit">{isPending? "Loading" : "SIGN IN" }</Button>     
            </form>
            </div>
             {/* description */}
            <div className="w-[40%] ds-bg-primary min-h-screen flex flex-col gap-6 items-center  justify-center">
                
                <Title size="xxxxxl" className=" max-w-80 font-bold leading-tight">
                    New to 
                    Trafalgar?
                     Sign up here!</Title>
                <Text size="lg" className="font-bold">Become part of our community</Text>
                <Button variant="outline2" className="mt-8">SIGN UP</Button>
            </div>

        </div>
       </div>




  )
}
