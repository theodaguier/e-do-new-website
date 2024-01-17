import { images } from "./data";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LazyImage } from "@/app/utils/image-lazy-loading";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

gsap.registerPlugin(ScrollTrigger);

export const Gallery = ({
  index,
  galleryContainerRef,
  setIndex,
}: {
  index: number;
  galleryContainerRef: React.RefObject<HTMLDivElement>;
  setIndex: (index: number) => void;
}) => {
  useEffect(() => {
    const element = galleryContainerRef.current;

    gsap.fromTo(
      element,
      {
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
        },
      }
    );
  }, [galleryContainerRef]);

  return (
    <div className="w-full grid md:grid-cols-2 gap-2">
      {images.map((image, i) => (
        <div
          key={i}
          className="relative h-96 w-full overflow-hidden"
          onClick={() => {
            setIndex(i);
          }}
        >
          <LazyImage
            src={image.url}
            alt={image.alt}
            width={1000}
            height={500}
            pointer={true}
            placeholderColor="blue"
          />
        </div>
      ))}
      <Lightbox
        slides={images.map((image) => ({
          src: image.url,
          alt: image.alt,
          width: 800,
          height: 500,
        }))}
        render={{
          slide: ({ slide, offset, rect }) => {
            return (
              <div>
                <LazyImage
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  quality={80}
                  placeholderColor="black"
                />
              </div>
            );
          },
        }}
        open={index !== -1}
        index={index}
        close={() => {
          setIndex(-1);
        }}
        plugins={[Thumbnails]}
        thumbnails={{
          border: 0,
          width: 100,
          height: 100,
        }}
      />
    </div>
  );
};
