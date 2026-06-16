"use client";
import Link from "next/link";
import Logo from "../atoms/Logo";
import { ThemeToggle } from "../atoms/ThemeButton";
import { useTranslations } from "next-intl";
import { navDataLinks } from "@/utils/data";
import {TextAlignJustify} from "@/assets/icons/icons"
import { useState } from "react";
import { X } from "lucide-react";

export default function Navbar() {
  const [isClicked,setIsClicked]=useState(false)

  const t=useTranslations()
  return (
    <nav className="ds-container flex justify-between items-center py-6">
        <Logo />
        
        {isClicked  &&(

        <div className="fixed inset-0 flex flex-col items-center justify-center z-10 gap-10 bg-[#5A98F2] ds-text-btn1 font-bold ds-text-lg  md:flex items-center gap-6 ds-text-des hover : ds-text-title">
            <div className="absolute top-6 right-6" onClick={()=>setIsClicked(false)}>
                  <X />
              </div>

           {
              navDataLinks.map((index)=>(
                <Link href="#" key={index.id} onClick={()=>setIsClicked(false)}>{t(index.link)}</Link>
              ))
            }
            </div>
            )}
            <div
                 className="md:hidden"
                 onClick={() => setIsClicked(!isClicked)}
               >
                  <TextAlignJustify />
            </div>
            <ThemeToggle/>
            
        {/* </div> */}

    </nav>
  )
}
