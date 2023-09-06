import { useEffect, useState } from "react";

type ProjectsData = {
  name:string;
    repo_name: string;
    username: string;
}

type RepoData = {
  description: string;
  language: string;
};

type LanguageInfo = { [key: string] : number };


export default function UserProjects({name, repo_name, username} : ProjectsData){
  const [data, setData] = useState<RepoData | null>(null);
  const [languagesData, setLanguagesData] = useState<LanguageInfo | null>(null);
  const link = `https://github.com/${username.trim()}/${repo_name.trim()}`;

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

    return(
        <div
        className="max-w min-h-[11rem]  flex flex-col justify-between items-start
                    bg-slate-200  dark:bg-slate-800 backdrop-blur-3xl shadow-lg rounded p-3 m1"
      >
        <h1 className="text-3xl font-medium">{name}</h1>
        <p className="text-lg line-clamp-3 text-gray-400">
          {data
            ? data.description
              ? data.description
              : "This repository does not have a description available for display at the moment. or The API limit has exceeded"
            : "loading"}
        </p>

        <h2 className="pt-5 text-2xl font-medium">
          Languages:
        </h2>

         <p className="text-lg line-clamp-3 text-gray-400">
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
            className="bg-white  block hover:bg-slate-200 justify-center mt-3  active:bg-slate-500 items-center duration-300 text-black py-2 shadow px-6 rounded-full "
          >
            Repository &rarr;
          </a>
        </div>
      </div>
    );
}

