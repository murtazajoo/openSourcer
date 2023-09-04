import { useParams } from "react-router-dom";
import ProfileInfo from "../components/Profile/User_Info";
import projectsData from "../DATA/projects.json";
import UserProjects from "../components/Profile/User_Projects";

interface Project {
  repo_name: string;
  name: string;
  link: string;
}

interface Data {
  github_username: string;
  Projects: { name: string; repo_name: string; link: string }[];
}



export default function Profile() {
  const { username } = useParams();
  const convertData = (data: typeof projectsData): Project[] => {
    const projects: Project[] = [];
  
    data.forEach((item: Data) => {
      const { github_username, Projects } = item;
  
      Projects.forEach(
        (project: { name: string; repo_name: string; link: string }) => {
          const { repo_name, name, link } = project;
          
          if(github_username === username){
            projects.push({ repo_name, name, link });
          }
        }
      );
    });
  
    return projects;
  };
  
  const userProjects = convertData(projectsData);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[1200px] px-10 mx-auto">
      <ProfileInfo username={username ? username : "Username not found"} />
      <canvas className="my-5 bg-gray-200 dark:bg-gray-800 h-1 w-full"></canvas>
      <div className="flex flex-col justify-start items-start w-full">
        <h2 className="text-4xl font-bold">Projects added:</h2>
        <ul className="flex flex-col gap-6 w-full pt-4">
          {userProjects.map((project, index) => {
              return <UserProjects name={project.name} repo_name={project.repo_name} username={username ? username : "Username not found"} key={index} />;
            })
          }
        </ul>

      </div>

    </div>
  );
}
