type ProjectProps = {
  username: string;
  repo_name: string;
  name: string;
  link: string;
};

export default function Project({
  username,
  repo_name,
  name,
  link,
}: ProjectProps) {
  return (
    <div
      className="max-w-32 min-h-[11rem]  flex flex-col justify-between items-start
     w-full bg-slate-800 backdrop-blur-3xl shadow rounded p-3 m1"
    >
      <h1 className="text-xl">{name}</h1>
      <small className="text-gray-500 ">
        @{username}/{repo_name}
      </small>
      <p className="text-sm line-clamp-3 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        praesentium nesciunt soluta placeat modi quis tenetur libero ratione
        voluptatem sit.
      </p>
      <div className="w-full flex items-end justify-end">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-white  justify-center mt-3 block active:bg-slate-500 items-center text-black py-1 shadow px-4 rounded-full"
        >
          Repository &rarr;
        </a>
      </div>
    </div>
  );
}
