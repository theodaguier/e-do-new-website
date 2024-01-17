import { LazyImageWithCaption } from "../../utils/image-lazy-loading";
import { images } from "./data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutGrid } from "@/components/layout-grid";
import { ParagraphCard } from "@/app/ui/card";

export function Gallery() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <LayoutGrid>
      <ParagraphCard
        paragraph="Confiez-nous votre production, on se charge du reste !"
        paragraph2="Casting, catering, talents, transport, equipements..."
      />

      {images.map((image: any, index: any) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => router.push(`/production/project/`)}
        >
          <LazyImageWithCaption
            key={index}
            src={image.img}
            alt={image.alt}
            hovered={true}
            width={1000}
            height={1000}
            placeholderColor="pink"
            title="test"
            year="2023"
          />
        </div>
      ))}
    </LayoutGrid>
  );
}
