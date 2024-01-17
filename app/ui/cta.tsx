import clsx from "clsx";
import { ArrowBody } from "@/app/components/icons/arrow-body";
import Link from "next/link";

type Props = {
  text: string;
  overlineColor?: string;
  href?: any;
};

export const CallToAction = ({ text, overlineColor, href }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        "flex w-full cursor-pointer items-center gap-4",
        `hover:bg-${overlineColor}`
      )}
    >
      <h3 className="w-[170px] text-sm font-favorit-mono uppercase">{text}</h3>
      <ArrowBody />
    </Link>
  );
};
