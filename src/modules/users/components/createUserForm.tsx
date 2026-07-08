"use client";
import InputForm from "@/components/atoms/Input";
import useCreateUser from "../hooks/useCreateUser"
import Button from "@/components/atoms/Button";
import { useState } from "react";

export default function CreateUserForm() {
    const {mutate,isPending}=useCreateUser();
    const [form,setForm]=useState({
      name:"",
      email:"",
      password:""
    });
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
          alert("تم انشاء مستخدم جديد");   
      },
      onError:()=>{
        alert("فشل انشاء مستخدم")
      }
    }
   
    )

   }
  return (
    <div>
        <form onSubmit={handleSubmit} className="w-[50%] mx-auto ds-bg-alt p-4 rounded-md">
            <InputForm name="name" placeholder="plz enter your name" onChange={handleChange}/>
            <InputForm name="email"  placeholder="plz enter your email" onChange={handleChange}/>
            <InputForm name="password"  placeholder="plz enter your password"  onChange={handleChange}/>
            <Button type="submit">{isPending ?"LOADING":"createUser"}</Button>

        </form>
        
    </div>
  )
}
