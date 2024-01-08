// export default function StudioPage() {
//   return (
//     <div className="container h-full flex flex-col gap-16">
//       <h1 className="text-6xl text-blue pt-16">Studio</h1>
//     </div>
//   );
// }

import Image from "next/image";

export default function Component() {
  return (
    <div className="container flex flex-col h-screen overflow-auto">
      <h1 className="text-6xl text-blue pt-16">Studio</h1>
      <div className="grid md:grid-cols-2 gap-4 lg:gap-12 items-start max-w-full mx-auto flex-grow">
        <div className="grid gap-4 md:gap-10 items-start h-full">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <Image
                alt="Image 1"
                className="aspect-square object-cover w-full h-full overflow-hidden"
                height={600}
                src="https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                width={600}
              />
              <h2 className="w-full py-2 font-abc-favorit-regular text-xl antialiased">
                Image 1
              </h2>
            </div>
            <div className="flex flex-col">
              <Image
                alt="Image 1"
                className="aspect-square object-cover w-full h-full overflow-hidden"
                height={600}
                src="https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                width={600}
              />
              <h2 className="w-full py-2 font-abc-favorit-regular text-xl antialiased">
                Image 1
              </h2>
            </div>
            <div className="flex flex-col">
              <Image
                alt="Image 1"
                className="aspect-square object-cover w-full h-full overflow-hidden"
                height={600}
                src="https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                width={600}
              />
              <h2 className="w-full py-2 font-abc-favorit-regular text-xl antialiased">
                Image 1
              </h2>
            </div>
            <div className="flex flex-col">
              <Image
                alt="Image 1"
                className="aspect-square object-cover w-full h-full overflow-hidden"
                height={600}
                src="https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                width={600}
              />
              <h2 className="w-full py-2 font-abc-favorit-regular text-xl antialiased">
                Image 1
              </h2>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="flex flex-col"></div>
          <Image
            alt="Large Image"
            className="aspect-square object-cover w-full h-full overflow-hidden"
            height={1200}
            src="https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
            width={1200}
          />
          <h2 className="w-full py-2 font-abc-favorit-regular text-xl antialiased">
            Image 1
          </h2>
        </div>
      </div>
    </div>
  );
}
