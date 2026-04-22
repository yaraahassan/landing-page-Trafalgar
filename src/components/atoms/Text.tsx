import { cn } from "@/lib/cn";

interface props{
size?:"sm"|"md"|"lg";
varient?:"des"|"btn1"|"btn2";
children?:React.ReactNode;
className?:string;
center?:boolean;
}

export default function Text({
    size="md",
    varient="des",
    children,
    className="capitalize pt-2",
    center
}:props) {
    const sizes={
        sm:"ds-text-sm",
        md:"ds-text-base",
        lg:"ds-text-lg",
    };
    const varients={
        des:"ds-text-des",
        btn1:"ds-text-btn1",
        btn2:"ds-text-btn2"
        

    };


  return (
    <p className={cn(sizes[size],varients[varient],center ? "text-center" : "" ,className)}>
        {children}
    </p>
  )
}
