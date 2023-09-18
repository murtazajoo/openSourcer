import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GetRepoData, GetUserDetails } from "../../DATA/get_user_details";
import { useAppContext } from "../../utils/Context";
import { ActionTypes } from "../../utils/Reducers";

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
  const { state, dispatch } = useAppContext();
  const repoData = state.repoData;
  const userDetails = state.userDetails;

  useEffect(() => {
    async function getRepoData() {
      try {
        const result = await GetRepoData(username, repo_name);
        dispatch({ type: ActionTypes.SET_REPO_DATA, payload: result });
      } catch (error) {
        throw new Error("Error while fetching the repos data");
      }
    }
    getRepoData();
  }, []);

  function fetchUserDetails() {
    async function getUserDetails() {
      try {
        const result = await GetUserDetails(username);
        dispatch({ type: ActionTypes.SET_DETAILS, payload: result });
      } catch {
        throw new Error("Failed to load user details");
      }
    }
    getUserDetails();
  }

  return (
    <div
      className="max-w-32 min-h-[11rem]  flex flex-col justify-between items-start
     w-full bg-slate-200  dark:bg-slate-800 backdrop-blur-3xl shadow-lg rounded p-3 m1"
    >
      <p>{userDetails?.name}</p>
      <h1 className="text-xl">{name}</h1>
      <small className="text-gray-500 ">
        @{username}/{repo_name} <br />
      </small>
      <p className="text-sm line-clamp-3 text-gray-400">
        {repoData
          ? repoData.description
            ? repoData.description
            : "The repo description is not available or the API limit has exceeded"
          : "loading"}
      </p>
      <h2 className="pt-5">Main language:</h2>
      <p className="text-sm line-clamp-3 text-gray-400">
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
          className="bg-white  block hover:bg-slate-200 justify-center mt-3  active:bg-slate-500 items-center duration-300 text-black py-1 shadow px-4 rounded-full "
        >
          Repository &rarr;
        </a>
        <NavLink
          onClick={fetchUserDetails}
          to={`/profile/${username}`}
          className="hover:underline justify-center mt-3 items-center text-teal-700 dark:text-teal-200 font-medium"
        >
          See profile
        </NavLink>
      </div>
    </div>
  );
}
