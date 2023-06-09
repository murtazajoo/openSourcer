import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-[70vh] ">
      <div className="shadow-hero w-1/2 absolute"></div>
      <div className="w-full text-center sm:w-3/5  min-h-[55vh] bg-[rgba(255,255,255,0.5)] backdrop-blur-lg shadow-xl  h-96 rounded-3xl flex flex-col justify-center items-center relative">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-title mb-3">
          OPEN SOURCER
        </h1>
        <p className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-saira">
          Collaborate. Innovate. Open Source.
        </p>
        <NavLink
          to="/projects"
          className="py-5 px-10 mt-20 font-saira text-2xl border  border-white shadow-lg  rounded-2xl hover:bg-white text-sky-900  backdrop-blur-lg  duration-300"
        >
          Projects
        </NavLink>
      </div>
    </main>
  );
}
