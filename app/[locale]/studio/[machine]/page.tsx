import { PricingCard } from "../../../ui/card";
import { LayoutGrid } from "@/components/layout-grid";

import { ParagraphCard, TitleCard } from "../../../ui/card";
import { LazyImage } from "@/app/utils/image-lazy-loading";

export default function VerticalPage({
  params,
}: {
  params: { machine: string };
}) {
  console.log(params.machine);

  const hour = [
    { title: "Horaire", price: "150€" },
    { title: "Demi-Journéee", price: "1000€" },
    { title: "Journée", price: "1500€" },
  ];

  return (
    <>
      <TitleCard title="Vertical /" textColor="blue" />

      <div className="flex flex-1 gap-8">
        <div className="flex-1">
          <LazyImage
            src="https://dl.dropboxusercontent.com/scl/fi/juo7ixf6rg2txbm2vx6tw/_29A1281-HDR.jpg?rlkey=7tcsj4tqu0yhn3bixikgz06nh&dl=0"
            alt="test"
            width={1000}
            height={1000}
            placeholderColor="blue"
          />
        </div>

        <div className="flex-1 h-full">
          <LayoutGrid className="h-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <ParagraphCard
              paragraph="Donnez de la dimension à vos produits grâce à la vertical. Choisissez votre arrière plan & configurez lumière et caméra grâce à l’iPad et shootez. Idéal pour un effet 3D !"
              callToAction
              ctaText="Disponibilités"
              ctaLink="/"
              className="col-span-2"
            />

            <PricingCard
              title="Self-Service"
              hour={hour}
              className="col-span-1"
            />
            <PricingCard
              withDescription
              title="Full service"
              description="La formule complète avec E-Do. Transport, shooting, post-production et plus encore, on s’occupe de tout."
              className="col-span-1"
            />
          </LayoutGrid>
        </div>
      </div>

      {/* <ParagraphCard
        paragraph="Vous souhaitez en savoir plus sur nos services ?"
        paragraph2="Vous pouvez-vous rendre dans notre FAQ ou nous contacter directement."
        callToAction
        ctaText="Contact"
        ctaLink="/"
      /> */}
    </>
  );
}
