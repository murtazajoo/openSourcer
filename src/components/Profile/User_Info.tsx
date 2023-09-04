import {
  FaGithub,
  FaShareAlt,
  FaShareAltSquare,
  FaShareSquare,
} from "react-icons/fa";

type UserNameProp = {
  username: string;
};

export default function ProfileInfo({ username }: UserNameProp) {
  return (
    <div className="flex flex-row gap-12">
      <img
        src={`https://github.com/${username}.png`}
        className="w-80- h-80 rounded-3xl"
      />
      <div className="flex flex-col justify-end items-start gap-5">
        <h1 className="text-4xl font-bold">Name</h1>
        <h2 className="text-2xl">Description</h2>
        <div className="flex flex-row justify-center items-center gap-10">
          <div className="flex flex-row gap-2 items-center">
            <FaGithub size={30} />
            <a
              className="hover:underline"
              href={`https://github.com/${username}`}
            >
              {username}
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
