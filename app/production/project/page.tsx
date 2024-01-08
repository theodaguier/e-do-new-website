// import React from "react";
// // import { useRouter } from "next/router"; // Cette ligne peut être supprimée car elle n'est pas utilisée
import { Gallery } from "./gallery";
import Image from "next/image";

// export default function ProductionDetailPage() {
//   return (
//     <div className="container h-screen flex flex-col gap-16">
//       <section className="flex flex-col justify-between py-4 bg-white">
//         <div className="flex flex-col gap-8 items-baseline pt-16">
//           <h1 className="text-6xl text-orange font-abc-favorit-regular z-50">
//             Arielle Baron
//           </h1>
//         </div>
//       </section>
//       <div className="flex flex-1">
//         <section className="flex flex-1 flex-col">
//           <Gallery />
//         </section>
//         <section className="flex flex-1">
//           <h2>Test</h2>
//         </section>
//       </div>
//     </div>
//   );
// }

export default function ProductionProjectPage() {
  return (
    <div className="flex flex-col">
      <div className="container">
        <h1 className="text-6xl text-black mix-blend- font-abc-favorit-regular z-50 fixed top-20">
          Arielle Baron
        </h1>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-full">
          <div className="flex flex-col gap-8 overflow-y-scroll w-full pt-44 bg-white">
            <Gallery />
          </div>
          <div className="grid gap-4 md:gap-10 items-start sticky top-0 pt-44">
            <div className="grid gap-4">
              <div>
                <p>
                  This project aims to capture the essence of contemporary
                  fashion through the lens of a camera. It focuses on the
                  artistry of fashion design and the models who bring these
                  designs to life.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <span>Status: Active</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <span>Duration: 6 months</span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-base">Project Team</p>
              <div className="flex flex-wrap gap-2">
                {/* <Avatar>
              <AvatarImage alt="Photographer" src="/placeholder-avatar.jpg" />
              <AvatarFallback>PH</AvatarFallback>
              <span className="text-sm">Photographer</span>
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Fashion Designer"
                src="/placeholder-avatar.jpg"
              />
              <AvatarFallback>FD</AvatarFallback>
              <span className="text-sm">Fashion Designer</span>
            </Avatar>
            <Avatar>
              <AvatarImage alt="Model" src="/placeholder-avatar.jpg" />
              <AvatarFallback>MD</AvatarFallback>
              <span className="text-sm">Model</span>
            </Avatar> */}
              </div>
            </div>
            <div className="grid gap-2">
              {/* <Label className="text-base" htmlFor="casting">
            Casting
          </Label> */}
              <div>
                <p>
                  The casting for this project was meticulously done to ensure
                  that the models perfectly embody the spirit of the fashion
                  designs. The casting process was rigorous and involved several
                  rounds of auditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
