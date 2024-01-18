import prisma from "@/lib/db";
import { PricingCard } from "../../../ui/card";
import { LayoutGrid } from "@/components/layout-grid";

import { ParagraphCard, TitleCard } from "../../../ui/card";
import { LazyImage } from "@/app/utils/image-lazy-loading";
import { firstLetterToUpperCase } from "@/lib/utils";

export type Machine = {
  id: number;
  name: string;
  slug: string;
  image: string;
  hour: number;
  halfDay: number;
  fullDay: number;
};

export default async function VerticalPage({
  params,
}: {
  params: { machine: string };
}) {
  console.log(params.machine);

  const machine = await prisma.machine.findUnique({
    where: {
      slug: params.machine,
    },
  });

  const hour = [
    { title: "Horaire", price: machine?.hour },
    { title: "Demi-Journée", price: machine?.halfDay },
    { title: "Journée", price: machine?.fullDay },
  ];

  return (
    <>
      <TitleCard
        title={`${firstLetterToUpperCase(machine?.name)} /`}
        textColor="blue"
      />

      <div className="flex flex-1 gap-8">
        <div className="flex-1">
          <LazyImage
            src={machine?.image}
            alt="test"
            width={1000}
            height={1000}
            placeholderColor="blue"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <LayoutGrid className="flex-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <ParagraphCard
              titleCard={machine?.subTitle}
              titleColor="gray-500"
              paragraph={machine?.description}
              callToAction
              ctaText="Disponibilités"
              ctaLink="/"
              className="col-span-2 grid-flow-col-dense"
            />

            <PricingCard
              title="Self-Service"
              hour={hour.map((item) => ({ ...item, price: item.price ?? 0 }))}
              className="col-span-1 grid-flow-row-dense"
            />
            <PricingCard
              withDescription
              title="Full service"
              description="La formule complète avec E-Do. Transport, shooting, post-production et plus encore, on s’occupe de tout."
              className="col-span-1 grid-flow-row-dense"
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
