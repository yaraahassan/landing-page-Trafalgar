import { cn } from "@/lib/cn";

interface props{
size?:"sm"|"md"|"lg"|"xxxxxl";
varient?:"des"|"btn1"|"btn2"|"title";
children?:React.ReactNode;
className?:string;
center?:boolean;
}

export default function Title({
    size="md",
    varient="title",
    children,
    className="capitalize pt-2 text-bold",
    center
}:props) {
    const sizes={
        sm:"ds-text-sm",
        md:"ds-text-base",
        lg:"ds-text-lg",
        xxxxxl:"text-5xl",
    };
    const varients={
       title:"ds-text-title",
       btn1:"ds-text-btn1",
    };


  return (
    <h2 className={cn(sizes[size],varients[varient],center ? "text-center" : "" ,className)}>
        {children}
    </h2>
  )
}
