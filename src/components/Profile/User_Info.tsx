import { FaGithub, FaShareSquare } from "react-icons/fa";
import { RWebShare } from "react-web-share";
import { useAppContext } from "../../utils/Context";

type UserNameProp = {
  username: string;
};

export default function ProfileInfo({ username }: UserNameProp) {
  const { state } = useAppContext();
  const userDetails = state.userDetails;

  return (
    <div className="flex flex-row justify-start gap-10 items-center sm:items-end w-full">
      {userDetails ? (
        <img
          src={userDetails.avatar_url}
          className="bg-gray-200 rounded-3xl sm:w-80 sm:h-80 h-20 w-20"
          alt=""
        />
      ) : (
        <canvas className="bg-gray-200 rounded-3xl sm:w-80 sm:h-80 h-20 w-20"></canvas>
      )}

      <div className="flex flex-col justify-end items-start gap-5">
        <h1 className="text-3xl text-left sm:text-5xl font-bold">
          {userDetails
            ? userDetails.name
              ? userDetails.name
              : "Name not available. or The API limit has exceeded"
            : "loading"}
        </h1>

        <h2 className="text-base text-justify sm:text-2xl text-gray-500 font-medium">
          {userDetails
            ? userDetails.bio
              ? userDetails.bio
              : "Bio not available. or The API limit has exceeded"
            : "loading"}
        </h2>

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

            <RWebShare
              data={{
                url: `\nhttps://opensourcer.vercel.app/profile/${username}`,
                text: `Check out the amazing OpenSourcer projects of @${username}!`,
              }}
            >
              <a className="hover:underline">Share</a>
            </RWebShare>
          </div>
        </div>
      </div>
    </div>
  );
}
