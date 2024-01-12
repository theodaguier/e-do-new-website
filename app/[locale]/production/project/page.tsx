import { Gallery } from "./gallery";
import Image from "next/image";

export default function ProductionProjectPage() {
  return (
    <div className="flex flex-col">
      <div className="container">
        <h1 className="text-6xl text-white mix-blend-exclusion font-abc-favorit-regular z-50 fixed top-20">
          Arielle Baron
        </h1>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-full">
          <div className="flex grid flex-col gap-8 overflow-y-scroll w-full pt-44 bg-white">
            <Gallery />
          </div>
          <div className="grid gap-4 md:gap-10 items-start sticky top-0 pt-44">
            <div className="grid gap-4">
              <div className="grid grid-cols-2">
                <h2 className="font-abc-favorit-regular antialiased">
                  Description
                </h2>
                <p className="font-abc-favorit-regular antialiased">
                  This project aims to capture the essence of contemporary
                  fashion through the lens of a camera. It focuses on the
                  artistry of fashion design and the models who bring these
                  designs to life.
                </p>
              </div>
              <div className="grid grid-cols-2">
                <h2 className="font-abc-favorit-regular antialiased">Year</h2>
                <p className="font-abc-favorit-regular antialiased">2024</p>
              </div>
              <div className="grid grid-cols-2">
                <h2 className="font-abc-favorit-regular antialiased">Client</h2>
                <p className="font-abc-favorit-regular antialiased">
                  Arielle Baron
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
