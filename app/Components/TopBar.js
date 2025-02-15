"use client";

import { useScreenWidth } from "./ScreenWidthComponent";


export default function TopBar() {
  const width = useScreenWidth(); 
  return (
    <div
      className={ ` topbar-container w-11/12 font-bold fixed top-0 text-white  right-10 h-12 rounded-lg mt-2 p-2 mx-auto hover:bg-slate-800 border-2 border-teal-700 hover:border-green-500 flex justify-center items-center gap-5 hover:gap-6 transition-all duration-700 bg-slate-700 shadow-inner topbar-container"`}
    >
      <button
   
        className="p-[5px] w-auto flex justify-center items-center hover:text-orange-300  border-2 border-teal-700 hover:border-green-500 hover:w-1/6 transition-all duration-500 hover:bg-slate-950 rounded-lg  "
      >
        Home
      </button>

      <button
     
        className="p-[5px] w-auto flex justify-center items-center hover:text-orange-300 border-2 border-teal-700 hover:border-green-500 hover:w-1/6 transition-all duration-500 hover:bg-slate-950 rounded-lg "
      >
        About
      </button>

      <button

        className="p-[5px] w-auto flex justify-center items-center hover:text-orange-300 border-2 border-teal-700 hover:border-green-500 hover:w-1/6 transition-all duration-500 hover:bg-slate-950 rounded-lg "
      >
        Skills
      </button>

      <button

        className="p-[5px] w-auto flex justify-center items-center hover:text-orange-300 border-2 border-teal-700 hover:border-green-500 hover:w-1/6 transition-all duration-500 hover:bg-slate-950 rounded-lg "
      >
        Projects
      </button>

      <button
      className="p-[5px] w-auto flex justify-center items-center hover:text-orange-300 border-2 border-teal-700 hover:border-green-500 hover:w-1/6 transition-all duration-500 hover:bg-slate-950 rounded-lg "
      >
        Certificates
      </button>

      <button
      className="p-[5px] w-auto flex justify-center items-center hover:text-orange-300 border-2 border-teal-700 hover:border-green-500 hover:w-1/6 transition-all duration-500 hover:bg-slate-950 rounded-lg "
      >
        Contact
      </button>
    </div>
  );
}
