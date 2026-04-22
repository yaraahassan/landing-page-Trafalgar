import Link from "next/link";
import Logo from "../atoms/Logo";
import { ThemeToggle } from "../atoms/ThemeButton";
import { useTranslations } from "next-intl";
import { navDataLinks } from "@/utils/data";

export default function Navbar() {
  const t=useTranslations()
  return (
    <nav className="ds-container flex justify-between items-center py-6">
        <Logo />
        <div className="flex items-center gap-6 ds-text-des hover : ds-text-title">
            {/* <Link href="#" className="ds-text-title">Home</Link>
            <Link href="#">Find a doctor</Link>
            <Link href="#">Apps</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">About us</Link> */}

            {
              navDataLinks.map((index)=>(
                <Link href="#" key={index.id}>{t(index.link)}</Link>
              ))
            }
            <ThemeToggle/>
            
        </div>

    </nav>
  )
}
