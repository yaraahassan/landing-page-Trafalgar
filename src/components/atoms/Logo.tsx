import Link from "next/link";
import { Nunito } from "next/font/google";
import Images from "./Images";
import { logoImg } from "@/assets/images/images";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function Logo() {
  return (
    <Link
      href="/"
      className={`${nunito.className} select-none flex gap-3 items-center`}
    >
      <Images src={logoImg} alt="logo-img"/>
      <span className="text-2xl ds-text-logo font-bold">Trafalgar</span>
    </Link>
  );
}