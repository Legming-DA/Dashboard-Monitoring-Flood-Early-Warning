"use client";
import { GlobalContext } from "@/context";
import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useContext } from "react";
// import { FiAlignJustify } from "react-icons/fi";


export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { setOpenSidebar, openSidebar } = useContext(GlobalContext);
  const pathName = usePathname();

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <p className="text-[32px] capitalize text-navy-700 dark:text-white">
          {pathName === '/' ? 'DASHBOARD' : pathName.split("/")[1].toUpperCase()}
        </p>
      </div>
      <div className="relative flex mt-[3px] items-center justify-end gap-4 rounded-full bg-white px-2 py-2 shadow-xl dark:!bg-navy-800 dark:shadow-none xl:gap-2">
        <span
          onClick={() => setOpenSidebar(!openSidebar)}
          className=" cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
        >
          {/* <FiAlignJustify className="h-5 w-5" /> */}
        </span>
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer text-gray-600"
        >
          {theme === "light" ? (
            <Sun1 size="32" color="#FF8A65" variant="Bold"/>
          ) : (
            <Moon size="32" color="#FF8A65" variant="Bold"/>
          )}
        </div>
      </div>
    </nav>
  );
}
