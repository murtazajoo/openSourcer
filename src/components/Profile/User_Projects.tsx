import { useAppContext } from "../../utils/Context";

type ProjectsData = {
  name: string;
  repo_name: string;
  username: string;
};

export default function UserProjects({
  name,
  repo_name,
  username,
}: ProjectsData) {
  const link = `https://github.com/${username.trim()}/${repo_name.trim()}`;
  const { state } = useAppContext();
  const repoData = state.repoData;

  return (
    <div
      className="max-w min-h-[11rem]  flex flex-col justify-between items-start
                    bg-slate-200  dark:bg-slate-800 backdrop-blur-3xl shadow-lg rounded p-3 m1"
    >
      <h1 className="text-3xl font-medium">{name}</h1>
      <p className="text-lg line-clamp-3 text-gray-400">
        {repoData
          ? repoData.description
            ? repoData.description
            : "The repo description is not available or the API limit has exceeded"
          : "loading"}
      </p>

      <h2 className="pt-5 text-2xl font-medium">Languages:</h2>

      <p className="text-lg line-clamp-3 text-gray-400">
        {repoData
          ? repoData.language
            ? repoData.language
            : "The language is not available or the API limit has exceeded"
          : "loading"}
      </p>
      <div className="w-full flex flex-col items-end justify-end gap-2 pt-5">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-white  block hover:bg-slate-200 justify-center mt-3  active:bg-slate-500 items-center duration-300 text-black py-2 shadow px-6 rounded-full "
        >
          Repository &rarr;
        </a>
      </div>
    </div>
  );
}
