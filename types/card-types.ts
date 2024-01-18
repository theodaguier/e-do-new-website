export type MachineCardType = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  colSpan?: number;
};

export type ParagraphCardType = {
  titleCard?: string;
  titleColor?: string;
  paragraph: string | undefined;
  paragraph2?: string;
  callToAction?: boolean;
  ctaText?: string | null;
  ctaLink?: string;
  colSpan?: number;
  className?: string;
};

export type RetouchCardType = {
  title: string;
  image: string;
  imageAlt: string;
  colSpan?: number;
  isHovered?: boolean;
};

export type PricingCardType = {
  title: string;
  hour?:
    | { title: string; price: number }[]
    | { title: string; price: number }[];
  withDescription?: boolean;
  description?: string;
  colSpan?: number;
  className?: string;
};

export type TitleCardType = {
  title: string;
  textColor?: string;
};
