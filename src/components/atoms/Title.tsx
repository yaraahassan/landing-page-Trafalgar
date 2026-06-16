import { cn } from "@/lib/cn";

interface props{
size?:"sm"|"md"|"lg"|"xl"|"xxxxxl";
varient?:"des"|"btn1"|"btn2"|"title";
children?:React.ReactNode;
className?:string;
center?:boolean;
}

export default function Title({
    size="md",
    varient="btn1",
    children,
    className="capitalize pt-2 text-bold",
    center
}:props) {
    const sizes={
        sm:"text-sm",
        md:"text-base",
        lg:"text-lg",
        xl:"text-xl",
        xxxxxl:"text-5xl",
    };
    const varients={
       title:"ds-text-title",
       btn1:"ds-text-btn1",
       des:"ds-text-des",
       btn2:"ds-text-btn2"
    };


  return (
    <h2 className={cn(sizes[size],varients[varient],center ? "text-center" : "" ,className)}>
        {children}
    </h2>
  )
}
