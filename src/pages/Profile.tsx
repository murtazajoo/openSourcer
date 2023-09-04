import { useParams } from "react-router-dom";
import ProfileInfo from "../components/Profile/User_Info";

export default function Profile() {
  const { username } = useParams();

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1200px] px-10 mx-auto">
      <ProfileInfo username={username ? username : "Username not found"} />
    </div>
  );
}
