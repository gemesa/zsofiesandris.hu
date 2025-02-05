import { cn } from "@/app/_lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { FC, PropsWithChildren, ReactNode } from "react";

const Section: FC<
  PropsWithChildren<{ title: string; icon?: ReactNode; className?: string }>
> = ({ title, icon, children, className }) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h2 className="text-3xl gap-2 flex items-center justify-center font-playfair font-medium text-center leading-none">
        {icon}
        {title}
      </h2>
      <div className="text-lg font-medium italic font-libre flex flex-col items-center text-center">
        {children}
      </div>
      <Separator
        className="w-4/5 h-0.5 mx-auto mt-6 bg-camouflage-green rounded-sm sm:hidden block"
        decorative
      />
    </div>
  );
};

export default Section;
