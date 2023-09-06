import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

type ProjectProps = {
  username: string;
  repo_name: string;
  name: string;
  link: string;
};
type RepoData = {
  description: string;
  language: string;
};
type LanguageInfo = { [key: string] : number };

export default function Project({
  username,
  repo_name,
  name,
  link,
}: ProjectProps) {
  const [data, setData] = useState<RepoData | null>(null);
  const [languagesData, setLanguagesData] = useState<LanguageInfo | null>(null);

  useEffect(() => {
    function getRepo() {
      fetch(
        `https://api.github.com/repos/${username.trim()}/${repo_name.trim()}?client_id=ec1594e91cfa6b4281cb&client_secret=02388e8e126c1f3d96d7b2a59350a3620c08c137`
      )
        .then((res) => res.json())
        .then((result: RepoData) => setData(result));
    }
    if (data) return;
    getRepo();

    function getLanguages() {
      fetch(
        `https://api.github.com/repos/${username.trim()}/${repo_name.trim()}/languages?client_id=ec1594e91cfa6b4281cb&client_secret=02388e8e126c1f3d96d7b2a59350a3620c08c137`
      ).then((res) => res.json()).then((result: LanguageInfo) => {
        setLanguagesData(result);
      });
    }
    if(languagesData) return;
    getLanguages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="max-w-32 min-h-[11rem]  flex flex-col justify-between items-start
     w-full bg-slate-200  dark:bg-slate-800 backdrop-blur-3xl shadow-lg rounded p-3 m1"
    >
      <h1 className="text-xl">{name}</h1>
      <small className="text-gray-500 ">
        @{username}/{repo_name} <br />
      </small>
      <p className="text-sm line-clamp-3 text-gray-400">
        {data
          ? data.description
            ? data.description
            : "This repository does not have a description available for display at the moment. or The API limit has exceeded"
          : "loading"}
      </p>
      <h2 className="pt-5">
        Languages:
      </h2>

       <p className="text-sm line-clamp-3 text-gray-400">
       {
          languagesData
            ? Object.entries (languagesData).map(([key]) => {return key}).join(", ") == "message, documentation_url" ?
              "No languages found. or The API limit has exceeded" :
                Object.entries (languagesData).map(([key]) => {return key}).join(", "):
            "loading"
        }
       </p>
       <div className="w-full flex flex-col items-end justify-end gap-2 pt-5">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-white  block hover:bg-slate-200 justify-center mt-3  active:bg-slate-500 items-center duration-300 text-black py-1 shadow px-4 rounded-full "
        >
          Repository &rarr;
        </a>
        <NavLink
          to={`/profile/${username}`}
          className="hover:underline justify-center mt-3 items-center text-teal-700 dark:text-teal-200 font-medium"
        >
          See profile
        </NavLink>
      </div>
    </div>
  );
}
