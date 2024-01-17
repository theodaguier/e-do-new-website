"use client";

import clsx from "clsx";

import Link from "next/link";
import { LazyImage } from "../utils/image-lazy-loading";
import { useState } from "react";
import { Subtitle, Caption } from "@/components/titles";

import { Paragraph } from "@/components/titles";
import { CallToAction } from "@/app/ui/cta";
import { Title } from "@/components/titles";

type MachineCardType = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  colSpan?: number;
};

type ParagraphCardType = {
  paragraph: string;
  paragraph2?: string;
  callToAction?: boolean;
  ctaText?: string | null;
  ctaLink?: string;
  colSpan?: number;
  className?: string;
};

type RetouchCardType = {
  title: string;
  image: string;
  imageAlt: string;
  colSpan?: number;
  isHovered?: boolean;
};

type PricingCardType = {
  title: string;
  hour?: { title: string; price: string }[];
  withDescription?: boolean;
  description?: string;
  colSpan?: number;
  className?: string;
};

type TitleCardType = {
  title: string;
  textColor?: string;
};

export const MachineCard = ({
  title,
  description,
  image,
  imageAlt,
  colSpan,
}: MachineCardType) => {
  const [hovered, setHovered] = useState<Boolean>(false);

  return (
    <div
      className={clsx(
        "bg-gray-100 rounded-md p-4 flex-1 h-full flex flex-col justify-between gap-4 cursor-pointer hover:transition-transform duration-300 ease-in-out hover:-translate-y-2",
        colSpan && `col-span-${colSpan}important`,
        hovered && "shadow-lg"
      )}
      // style={{
      //   gridColumn: colSpan !== undefined ? `span-${colSpan}` : "span-1",
      // }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LazyImage
        className={["flex-1", "h-full"]}
        height="500"
        src={image}
        alt={imageAlt}
        style={{
          objectFit: "cover",
        }}
        placeholderColor="blue"
        width="500"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-baseline">
          <Subtitle>{title}</Subtitle>
        </div>
        <Caption textColor="gray-500">{description}</Caption>
      </div>
    </div>
  );
};

export const RetouchCard = ({
  title,
  image,
  imageAlt,
  colSpan,
  isHovered,
}: RetouchCardType) => {
  const [hovered, setHovered] = useState<Boolean>(false);

  return (
    <div
      className={clsx(
        "bg-gray-100 rounded-md p-4 flex-1 h-full flex flex-col justify-between gap-4 cursor-pointer hover:transition-transform duration-300 ease-in-out hover:-translate-y-2",
        colSpan && `col-span-${colSpan}important`,
        hovered && "shadow-lg"
      )}
      // style={{
      //   gridColumn: colSpan !== undefined ? `span-${colSpan}` : "span-1",
      // }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LazyImage
        className="flex-1 h-full"
        height="500"
        src={image}
        alt={imageAlt}
        style={{
          objectFit: "cover",
        }}
        isHovered={hovered}
        placeholderColor="blue"
        width="500"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-baseline">
          <Subtitle>{title}</Subtitle>
        </div>
      </div>
    </div>
  );
};

export const PricingCard = ({
  title,
  hour,
  withDescription,
  description,
  colSpan,
  className,
}: PricingCardType) => {
  return (
    <div
      className={clsx(
        "flex flex-col bg-gray-100 rounded-md p-4",
        colSpan && `col-span-${colSpan} important`
      )}
    >
      <div className="flex-1">
        <Subtitle>{title}</Subtitle>
      </div>
      <div className="flex-1 flex flex-col justify-between pt-2">
        <div className="">
          {!withDescription ? (
            hour?.map((item, i) => (
              <div key={i}>
                <Caption>{item.title}</Caption>
                <Caption textColor="gray-500">{item.price}</Caption>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4">
              <Caption>{description}</Caption>
              <Link href="/">
                <Caption textColor="gray-500">Sur devis</Caption>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ParagraphCard = ({
  paragraph,
  paragraph2,
  callToAction,
  ctaText,
  ctaLink,
  colSpan,
  ...props
}: ParagraphCardType) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between bg-gray-100 rounded-md mb-4 p-4 h-full",
        colSpan && `col-span-${colSpan}!important`,
        props.className
      )}
    >
      <Paragraph className="flex-1">
        {paragraph}
        {paragraph2 && <br />}
        {paragraph2}
      </Paragraph>
      {callToAction && (
        <CallToAction
          text={callToAction ? ctaText || "" : ""}
          overlineColor="blue"
          href={ctaLink}
        />
      )}
    </div>
  );
};

export const TitleCard = ({ title, textColor }: TitleCardType) => {
  return (
    <div className="flex bg-gray-100 rounded-md p-4">
      <Title className="flex-1" textColor={textColor}>
        {title}
      </Title>
    </div>
  );
};
