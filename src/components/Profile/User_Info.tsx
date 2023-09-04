import { useEffect, useState } from "react";
import {
  FaGithub,
  FaShareSquare,
} from "react-icons/fa";

type UserNameProp = {
  username: string;
};

type UserDetails = {
  avatar_url: string;
  name: string;
  bio: string;
}

export default function ProfileInfo({ username }: UserNameProp) {
  const [data, setData] = useState<UserDetails | null>(null);

  useEffect(() => {
    function getUserDetails() {
      fetch(
        `https://api.github.com/users/${username.trim()}`,
        {
          headers: {
            authorization: "token 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"
          }
        }
      )
        .then((res) => res.json())
        .then((result: UserDetails) => setData(result));
    }
    // ?client_id=ec1594e91cfa6b4281cb&client_secret=02388e8e126c1f3d96d7b2a59350a3620c08c137
    if (data) return;
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="flex flex-row gap-12">
      
      {data? data.avatar_url ? <img
          className="w-80 h-80 rounded-3xl"
          src={data?.avatar_url}
        /> : <canvas className="bg-gray-200 rounded-3xl w-80 h-80"></canvas> : "loading"}

      <div className="flex flex-col justify-end items-start gap-5">
        <h1 className="text-5xl font-bold">{data ? data.name ? data.name : "Name not available. or The API limit has exceeded" : "loading"}</h1>
        
        <h2 className="text-2xl text-gray-500 font-medium">{data ? data.bio ? data.bio :"Bio not available. or The API limit has exceeded":"loading" }</h2>

        <div className="flex flex-row justify-center items-center gap-10 text-gray-400">
          <div className="flex flex-row gap-2 items-center ">
            <FaGithub size={30} />
            <a
              className="hover:underline"
              href={`https://github.com/${username}`}
            >
              @{username}
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FaShareSquare size={30} />
            <a
              className="hover:underline"
              href={`https://github.com/${username}`}
            >
              Share
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
