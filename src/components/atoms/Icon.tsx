import { cn } from "@/lib/cn";
interface Props {
  size?: number;
  color?: "black" | "disabled"|"btn2";
  className?: string;
  IconComponent: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
}
export default function Icon({
  IconComponent,
  color = "btn2",
  size,
  className,
}: Props) {
  const colors = {
    black: "ds-text-primary",
    disabled: "ds-text-disabled",
    btn2: "ds-text-btn2",

  };
  return <IconComponent size={size} className={cn(colors[color], className)} />;
}