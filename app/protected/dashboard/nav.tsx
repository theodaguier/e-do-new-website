"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { navigation } from "@/config/dashboard";
import Link from "next/link";

export function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-64">
      <Menu
        className="fixed top-0 start-0 z-[50] md:hidden"
        aria-label="Main Menu"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex-1 md:translate-x-0 transition-transform transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto md:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Dashboard
          </a>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-4">
            {navigation.map((item, i) => (
              <li key={i}>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href={item.link}
                >
                  <item.icon className="w-4 h-4" />

                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
