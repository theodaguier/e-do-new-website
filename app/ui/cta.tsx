import clsx from "clsx";
import { ArrowBody } from "@/app/components/icons/arrow-body";

type Props = {
  text: string;
  overlineColor?: string;
};

export const CallToAction = ({ text, overlineColor }: Props) => {
  return (
    <div
      className={clsx(
        "flex w-full cursor-pointer items-center gap-4",
        `hover:bg-${overlineColor}`
      )}
    >
      <h3 className="w-[170px] text-sm font-favorit-mono uppercase">{text}</h3>
      <ArrowBody />
    </div>
  );
};
