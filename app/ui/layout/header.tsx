"use client";

import Link from "next/link";
import CompleteLogo from "@/public/complete-complete.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <header className="flex w-full sticky z-[9999]">
      <div className="flex fixed lg:top-5 lg:left-1/2 lg:-translate-x-1/2 z-3 backdrop-blur-md w-full lg:max-w-3xl px-4 py-2 items-center justify-between transition-[background,color] duration-500 ease-expo-out bg-black/10 text-black">
        <nav className="flex flex-1 md:flex-row justify-between">
          <div className="block md:hidden">
            <h3 className="text-sm bg-black text-white font-favorit-mono uppercase">
              Menu
            </h3>
          </div>
          <Link href="/">
            <Image
              className="w-24 h-auto object-cover cursor-pointer"
              width={1000}
              src={CompleteLogo}
              alt="e-do studio complete logo"
            />
          </Link>
          <ul
            className={clsx(
              "hidden md:flex flex-col md:flex-row items-center gap-4",
              {
                hidden: !isOpen,
              }
            )}
          >
            <li>
              <Link
                className="hover:bg-blue text-sm antialiased font-favorit-mono uppercase hover:text-white"
                href="/studio"
              >
                studio
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-pink text-sm antialiased font-favorit-mono uppercase hover:text-white"
                href="/production"
              >
                production
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-orange text-sm antialiased font-favorit-mono uppercase hover:text-black"
                href="#"
              >
                post-production
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-black text-sm antialiased font-favorit-mono uppercase hover:text-white"
                href="#"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-black text-sm antialiased font-favorit-mono uppercase hover:text-white"
                href="#"
              >
                contact
              </Link>
            </li>
            <li>
              <Button className="bg-black text-white mt-4 sm:mt-0" size="sm">
                Réserver
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden">
          {/* Contenu spécifique pour le menu mobile */}
          <a href="#" className="block text-white py-2">
            Mobile Item 1
          </a>
          <a href="#" className="block text-white py-2">
            Mobile Item 2
          </a>
          {/* ... Ajoutez d'autres éléments pour le menu mobile */}
        </div>
      )}
    </header>
  );
};
