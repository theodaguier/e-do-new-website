"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [selectedColumn, setSelectedColumn] = useState<any | null>(null);
  const columns = [
    {
      title: "Studio",
      imageUrl:
        "url('https://previews.dropbox.com/p/thumb/ACFo-ECXUr2an8cUo1tWULqSQeKTyRaJ7vbaptDKPPptP7g2zBJ6KHUBRnHL4_-O7zTwt2x6giS5wsLy9i2v1YP5VnLtF-Aq4HyQ9wWOoCnMbiKD2b3f4HChvM8pV5QZDnUuDhg10mpFZ5QKT2suDVM7ELt5olAxsTUyPt0-5yfQ1ErYsJYeo5Hv2fc9WAZima0nVf__2o0TvaoHQkszH7sWop9c5MY6NycavI_fJ02LpVEEztvgCJ710j9E1jQJrC0RjAvz4IAlAn0m-_-7iubF5mKu5H6-QbuwKuEQZ9Bkiox-hFGzDlhKiegme1Db-LwsbZAAkz-EBWae0nVbmo6E/p.jpeg')",
      route: "/studio",
    },
    {
      title: "Production",
      imageUrl:
        "url('https://images.unsplash.com/photo-1701630714252-0b6778466e5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D')",
      route: "/production",
    },
    {
      title: "Post-Production",
      imageUrl:
        "url('https://previews.dropbox.com/p/thumb/ACFnEdjL9A9u0DKFsWaYIEldTyUma6kIFy1WBQViIvPb4dYP-2PrmfkhhonYmSHTET0_yf-2LQt7MVr4FHdE5Dol1Ea4w5vB-0OFuTHpfTbEc2rocDDco1Vf0Vu2Sv85RW91X8tDXH_GwlZrztIAWMG34RzfK5YWsQsCvdnrZKfakPw0b7Qzinpm4eGoFrqrNhYaKhlm8JgVBmCdjFR9631RGPx03fC03R0jDN7P1BlMcbjWZYjOFbWo1OmcL0yhndawgOEZvl0eBqFmCpBOCtp16O_dkbsSpvvhwjC3d5qS_CvWQgCli00offUVHEPhCo62rO8TWCyrIi5Tl6lAGzIT/p.jpeg')",
      route: "/post-production",
    },
  ];

  const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <div className="flex flex-1">
      <AnimatePresence>
        {columns.map((column, index) => (
          <motion.div
            key={index}
            whileHover={{
              width: "150%",
              backgroundImage: column.imageUrl,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            initial={{ width: "100%" }}
            exit={{ width: "100%" }}
            transition={transition}
            className={`w-full flex flex-col justify-end border-r cursor-pointer ${
              selectedColumn === column ? "bg-gray-200" : ""
            }`}
            onClick={router.push.bind(router, column.route)}
          >
            <div>
              <motion.h2 className="antialiased text-white mix-blend-exclusion text-4xl mb-4 text-center">
                {column.title}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
