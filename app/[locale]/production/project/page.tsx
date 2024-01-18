import { Gallery } from "./gallery";
import Image from "next/image";

import { ParagraphCard } from "@/app/ui/card";
import { Title, Paragraph, Caption } from "@/components/titles";
import { LazyImage } from "@/app/utils/image-lazy-loading";

export default function ProductionProjectPage() {
  return (
    <>
      <Title className="pt-4" experimental>
        Arielle Baron
      </Title>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-full">
        <div className=" grid flex-col gap-8 overflow-y-scroll w-full pt-28 bg-white">
          <Gallery />
        </div>
        <div className="grid gap-4 md:gap-10 items-start sticky top-0 pt-28">
          <div className="grid gap-4">
            <div className="grid grid-cols-3">
              <Caption textColor="gray-500">Description</Caption>
              <Paragraph className="col-span-2">
                Irure sit ad dolor ex commodo officia pariatur Lorem veniam
                labore magna. Id elit id id sit veniam et qui occaecat ad ipsum
                aliqua ipsum. Voluptate tempor nisi voluptate elit et consequat
                qui consectetur id qui voluptate. Consectetur incididunt ut ad.
              </Paragraph>
            </div>
            <div className="grid grid-cols-3">
              <Caption textColor="gray-500">Year</Caption>
              <Paragraph className="col-span-2">2024</Paragraph>
            </div>
            <div className="grid grid-cols-3">
              <Caption textColor="gray-500">Client</Caption>
              <Paragraph className="col-span-2">Arielle Baron</Paragraph>
            </div>
            <div className="grid grid-cols-3">
              <Caption textColor="gray-500">Role</Caption>
              <Paragraph className="col-span-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Paragraph>
            </div>
            <ParagraphCard
              className="bg-pink"
              paragraph="
                Si vous souhaitez obtenir un devis pour votre projet, n'hésitez pas à nous contacter.
              "
              callToAction
              ctaLink="/contact"
              ctaText="Devis"
            />
            <div className="flex flex-1 justify-between">
              <Caption>Autres projets </Caption>
              <div className="flex gap-2">
                <div className="w-[50px] h-[50px]">
                  <LazyImage
                    src="https://dl.dropboxusercontent.com/scl/fi/4mmguc49p4xb6tymvyed9/_29A1311-HDR.jpg?rlkey=btdzm445rv9jhko3lhr0orlht&dl=0-6"
                    width={1920}
                    height={1080}
                    placeholderColor="pink"
                    alt="Arielle Baron"
                  />
                </div>
                <div className="w-[50px] h-[50px]">
                  <LazyImage
                    src="https://dl.dropboxusercontent.com/scl/fi/4mmguc49p4xb6tymvyed9/_29A1311-HDR.jpg?rlkey=btdzm445rv9jhko3lhr0orlht&dl=0-6"
                    width={100}
                    height={100}
                    placeholderColor="pink"
                    alt="Arielle Baron"
                  />
                </div>
                <div className="w-[50px] h-[50px]">
                  <LazyImage
                    src="https://dl.dropboxusercontent.com/scl/fi/4mmguc49p4xb6tymvyed9/_29A1311-HDR.jpg?rlkey=btdzm445rv9jhko3lhr0orlht&dl=0-6"
                    width={100}
                    height={100}
                    placeholderColor="pink"
                    alt="Arielle Baron"
                  />
                </div>
                <div className="w-[50px] h-[50px]">
                  <LazyImage
                    src="https://dl.dropboxusercontent.com/scl/fi/4mmguc49p4xb6tymvyed9/_29A1311-HDR.jpg?rlkey=btdzm445rv9jhko3lhr0orlht&dl=0-6"
                    width={100}
                    height={100}
                    placeholderColor="pink"
                    alt="Arielle Baron"
                  />
                </div>
                <div className="w-[50px] h-[50px]">
                  <LazyImage
                    src="https://dl.dropboxusercontent.com/scl/fi/4mmguc49p4xb6tymvyed9/_29A1311-HDR.jpg?rlkey=btdzm445rv9jhko3lhr0orlht&dl=0-6"
                    width={100}
                    height={100}
                    placeholderColor="pink"
                    alt="Arielle Baron"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
