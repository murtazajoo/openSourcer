import Menu from "./Menu";

export default function NavBar() {
  return (
    <div className=" m-auto py-3 mb-10 z-10 backdrop-blur-lg w-full sticky top-0 left-0 right-0">
      <div className="max-w-[900px] flex justify-between items-center w-full m-auto">
        <h1 className="font-logo text-6xl w-full">OS.</h1>
        <Menu />
      </div>
    </div>
  );
}
