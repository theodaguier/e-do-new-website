"use client";

import clsx from "clsx";

import Link from "next/link";
import { LazyImage } from "../utils/image-lazy-loading";
import { useState } from "react";
import { Subtitle, Caption } from "@/components/titles";

import { Paragraph } from "@/components/titles";
import { CallToAction } from "@/app/ui/cta";
import { Title } from "@/components/titles";

import {
  MachineCardType,
  ParagraphCardType,
  PricingCardType,
  RetouchCardType,
  TitleCardType,
} from "@/types/card-types";

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
  console.log("hour from pricing", hour);

  return (
    <div
      className={clsx(
        "flex flex-col bg-gray-100 rounded-md p-4",
        colSpan && `col-span-${colSpan} important`,
        className
      )}
    >
      <div className="flex-1">
        <Subtitle textColor="gray-500">{title}</Subtitle>
      </div>
      <div className="flex-1 flex flex-col justify-between pt-2">
        <div className="">
          {!withDescription ? (
            hour?.map((item, i) => (
              <div key={i}>
                <Caption>{item.title}</Caption>
                <Caption textColor="gray-500">{item.price}€ HT</Caption>
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
  titleCard,
  titleColor,
  paragraph,
  paragraph2,
  callToAction,
  ctaText,
  ctaLink,
  colSpan,
  className,
}: ParagraphCardType) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between bg-gray-100 rounded-md mb-4 p-4 h-full",
        colSpan && `col-span-${colSpan}!important`,
        className
      )}
    >
      <Subtitle className={clsx("pb-4", `text-${titleColor}`)}>
        {titleCard}
      </Subtitle>
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
