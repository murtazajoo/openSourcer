import Project from "../components/Projects/Project";
import projectsData from "../DATA/projects.json";

interface Project {
  username: string;
  repo_name: string;
  name: string;
  link: string;
}

interface Data {
  github_username: string;
  Projects: { name: string; repo_name: string; link: string }[];
}

const convertData = (data: typeof projectsData): Project[] => {
  const projects: Project[] = [];

  data.forEach((item: Data) => {
    const { github_username, Projects } = item;

    Projects.forEach(
      (project: { name: string; repo_name: string; link: string }) => {
        const { repo_name, name, link } = project;
        projects.push({ username: github_username, repo_name, name, link });
      }
    );
  });

  return projects;
};

export default function Projects() {
  const allProjects = convertData(projectsData);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px] px-10 mx-auto">
        <input
          type="text"
          placeholder="search for a project"
          className="w-full p-3 rounded-full bg-[rgba(255,255,255,0.05)] border border-teal-200 outline-none "
        />
        <div className="grid mb-40 w-full lg:grid-cols-3 md:grid-cols-2 place-content-center gap-5 mt-20 mb-10">
          {allProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}
