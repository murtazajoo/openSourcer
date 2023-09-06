import { useEffect, useState } from "react";
import {
  FaGithub,
  FaShareSquare,
} from "react-icons/fa";
import { RWebShare } from "react-web-share";

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
        `https://api.github.com/users/${username.trim()}?client_id=ec1594e91cfa6b4281cb&client_secret=02388e8e126c1f3d96d7b2a59350a3620c08c137`
      )
        .then((res) => res.json())
        .then((result: UserDetails) => setData(result));
    }
    if (data) return;
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-row justify-center gap-10 items-center sm:items-end w-full">
      {data? data.avatar_url ? <img
          alt="Profile photo"
          className="sm:w-80 sm:h-80 h-40 w-40 rounded-3xl"
          src={data?.avatar_url}
        /> : <canvas className="bg-gray-200 rounded-3xl sm:w-80 sm:h-80 h-20 w-20"></canvas> : "loading"}

      <div className="flex flex-col justify-end items-start gap-5">
        <h1 className="text-3xl text-left sm:text-5xl font-bold">{data ? data.name ? data.name : "Name not available. or The API limit has exceeded" : "loading"}</h1>

        <h2 className="text-base text-justify sm:text-2xl text-gray-500 font-medium">{data ? data.bio ? data.bio :"Bio not available. or The API limit has exceeded":"loading" }</h2>

        <div className="flex flex-col justify-start items-start gap-5 sm:flex-row sm:justify-center sm:items-center sm:gap-10 text-gray-400">
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

            <RWebShare data={{
              url: `\nhttps://opensourcer.vercel.app/profile/${username}`,
              text: `Check out the amazing OpenSourcer projects of @${username}!`,
            }}>
              <a className="hover:underline">Share</a>
            </RWebShare>

          </div>
        </div>
      </div>
    </div>
  );
}
