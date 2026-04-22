import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  center?:boolean
}
export default function Images({
  src,
  alt,
  className,
  width = 41,
  height = 41,
  priority = false,
  center=false,
}: Props) {
  const baseClasses = "w-full  flex justify-end items-center";
  return (
    <div className={cn(baseClasses)}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={width}
        height={height}
        priority={priority}
        className={cn(className ,center ? "text-center" : "")}
      />
    </div>
  );
}