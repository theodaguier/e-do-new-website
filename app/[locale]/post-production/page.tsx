"use client";

import { RetouchCard } from "../../ui/card";
import { LayoutGrid } from "@/components/layout-grid";
import { useState } from "react";

import Link from "next/link";
import { ParagraphCard, TitleCard } from "../../ui/card";

export default function PostProdPage() {
  const [hovered, setHovered] = useState<Boolean>(false);

  return (
    <>
      <TitleCard title="Post-production /" textColor="orange" />
      <ParagraphCard
        paragraph="Nous proposons des services de retouches photos et vidéos."
        callToAction
        ctaText="Devis"
        ctaLink="/"
      />

      <LayoutGrid>
        <RetouchCard
          title="On Model"
          image="https://dl.dropboxusercontent.com/scl/fi/juo7ixf6rg2txbm2vx6tw/_29A1281-HDR.jpg?rlkey=7tcsj4tqu0yhn3bixikgz06nh&dl=0"
          imageAlt="test"
        />

        <RetouchCard
          title="Flat"
          image="https://dl.dropboxusercontent.com/scl/fi/4mmguc49p4xb6tymvyed9/_29A1311-HDR.jpg?rlkey=btdzm445rv9jhko3lhr0orlht&dl=0"
          imageAlt="test"
        />

        <RetouchCard
          title="Ghost"
          image="https://dl.dropboxusercontent.com/scl/fi/pkdy9h9k99bcs54d0gwjq/_29A1320-HDR.jpg?rlkey=k130vwe73fipg16hnh7ejdmyi&dl=0"
          imageAlt="test"
        />
        <RetouchCard
          title="Access / Shoes"
          image="https://dl.dropboxusercontent.com/scl/fi/ur9mwlr288cwi052icalb/_29A1304-HDR.jpg?rlkey=jxmi5u0xqskctw0yvs7shspt2&dl=0"
          imageAlt="test"
        />
        <RetouchCard
          title="Glasses"
          image="https://dl.dropboxusercontent.com/scl/fi/ur9mwlr288cwi052icalb/_29A1304-HDR.jpg?rlkey=jxmi5u0xqskctw0yvs7shspt2&dl=0"
          imageAlt="test"
        />
        <RetouchCard
          title="Jewelry"
          image="https:/dl.dropboxusercontent.com/scl/fi/j0wm6a9lfuc5s6i0ykztr/_29A1260-HDR.jpg?rlkey=rwnast8jlusjsyyal3wfh4c4i&dl=0"
          imageAlt="test"
          colSpan={1}
        />
      </LayoutGrid>

      <RetouchCard
        title="Jewelry"
        image="https:/dl.dropboxusercontent.com/scl/fi/j0wm6a9lfuc5s6i0ykztr/_29A1260-HDR.jpg?rlkey=rwnast8jlusjsyyal3wfh4c4i&dl=0"
        imageAlt="test"
        colSpan={1}
      />

      <ParagraphCard
        paragraph="Vous souhaitez en savoir plus sur nos services ?"
        paragraph2="Vous pouvez-vous rendre dans notre FAQ ou nous contacter directement."
        callToAction
        ctaText="Contact"
        ctaLink="/"
      />
    </>
  );
}
