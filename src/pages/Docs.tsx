import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Docs() {
  return (
    <div className="container mx-auto px-4 py-8 selection:text-yellow-900 selection:bg-purple-300">
      <h1 className="text-5xl bg-purple-100 text-yellow-900 max-w-fit p-5  font-bold mb-4">
        Follow these steps to contribute
      </h1>

      <h2 className="text-lg font-semibold mb-2">
        How to add your projects to openSoucer
      </h2>

      <h3 className="text-xl my-5 text-blue-300 font-semibold mb-2">
        1. Fork this repository
      </h3>
      <img
        src="https://github.com/murtazajoo/openSourcer/assets/98375522/34da207e-ab7b-4279-a672-0f590613bb56"
        alt="Fork this repository"
        className="my-4"
      />

      <h3 className="text-xl my-5 text-blue-300 font-semibold mb-2">
        2. Click on 'Go to file'
      </h3>
      <img
        src="https://github.com/murtazajoo/openSourcer/assets/98375522/96f1411c-0e23-4e95-afa6-9e8578b99171"
        alt="Go to file"
        className="my-4"
      />

      <h3 className="text-xl my-5 text-blue-300 font-semibold mb-2">
        3. Add following code to end of{" "}
        <span className="text-yellow-300">'src/DATA/projects.json'</span>
      </h3>
      <SyntaxHighlighter
        language="json"
        style={darcula}
        showLineNumbers={false}
      >
        {`{
  "github_username": "YOUR_GITHUB_USERNAME",
  "Projects": [
    {
      "link": "PROJECT_LINK",
      "name": "PROJECT_NAME",
      "repo_name":"REPOSITORY_NAME"
    },
    {
      "link": "PROJECT_LINK",
      "name": "PROJECT_NAME",
      "repo_name":"REPOSITORY_NAME"
    }
  ]
}`}
      </SyntaxHighlighter>

      <blockquote className="italic mt-4">
        <p className="mb-2">
          **Important**: You should write the `repo_name` same as in GitHub
        </p>
      </blockquote>

      <h3 className="text-xl text-blue-300 font-semibold mb-2">
        4. Commit all changes.
      </h3>

      <ul className="list-disc list-inside ml-4">
        <li>
          Add a commit like this for only projects addition{" "}
          <code>
            chore: project addition by [your-githubuser-name] #issue_number
          </code>
        </li>
      </ul>

      <h2 className="text-5xl bg-purple-100 text-yellow-900 max-w-fit p-5 mt-52 font-semibold  mb-10">
        Alternatively, if you prefer to run the project locally, follow these
        steps:
      </h2>

      <ol className="list-decimal list-inside ml-4">
        <li>
          Go to preferred folder in your computer and paste the following
          command after forking our repository (Only one of it if you don't have
          SSH setup then go with HTTP command)
          <SyntaxHighlighter
            language="bash"
            style={darcula}
            showLineNumbers={false}
          >
            {`git clone https://github.com/<YOUR-USERNAME>/openSoucer.git`}
          </SyntaxHighlighter>
        </li>

        <li>
          Navigate to the project folder
          <SyntaxHighlighter
            language="bash"
            style={darcula}
            showLineNumbers={false}
          >
            {`cd openSourcer`}
          </SyntaxHighlighter>
        </li>

        <li>
          Install dependencies
          <SyntaxHighlighter
            language="bash"
            style={darcula}
            showLineNumbers={false}
          >
            {`npm i`}
          </SyntaxHighlighter>
        </li>

        <li>
          Now do ahead and create a new branch and move to the branch
          <SyntaxHighlighter
            language="bash"
            style={darcula}
            showLineNumbers={false}
          >
            {`git checkout -b fix-issue-<ISSUE-NUMBER>`}
          </SyntaxHighlighter>
          <blockquote className="italic mt-2">
            <p>
              **Note**: Replace `ISSUE-NUMBER` with the issue number you are
              working on
            </p>
          </blockquote>
        </li>

        <li>
          Run in local
          <SyntaxHighlighter
            language="bash"
            style={darcula}
            showLineNumbers={false}
          >
            {`npm run dev`}
          </SyntaxHighlighter>
        </li>

        <li>Add new features or fix bugs according to your issue number</li>

        <li>
          After done, you can now push these changes by following the command
          chain:
          <SyntaxHighlighter
            language="bash"
            style={darcula}
            showLineNumbers={false}
          >
            {`git status -s
git add --all
git commit -m "feat/docs/fix: <EXPLAIN-YOUR_CHANGES>"
git remote add upstream https://github.com/murtazajoo/openSourcer.git
git push origin fix-issue-<ISSUE-NUMBER>`}
          </SyntaxHighlighter>
        </li>

        <li>
          After this, go to your forked GitHub repository and go to 'Pull
          Request' section. Now you might be able to see a pop-up saying 'Pull
          Request'. Click on the pop-up, and you will be redirected to the pull
          request page.
        </li>

        <li>
          Now fill in the form template of the pull request and give the
          necessary description.
        </li>

        <li>Click on 'Submit'.</li>

        <li>
          Hurray! You just made your first contribution to this project 🎉
        </li>

        <li>Wait for your pull request to be reviewed and merged.</li>
      </ol>

      <h2 className="text-lg font-semibold mt-8">Useful Links</h2>

      <ul className="list-disc list-inside ml-4">
        <li>
          <a
            href="https://docs.github.com/en/get-started/quickstart/fork-a-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="underline duration-300 hover:text-gray-400"
          >
            GitHub Forking Guide
          </a>
        </li>
        <li>
          <a
            href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"
            target="_blank"
            rel="noopener noreferrer"
            className="underline duration-300 hover:text-gray-400"
          >
            GitHub Pull Requests Guide
          </a>
        </li>
        <li>
          <a
            href="https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues"
            target="_blank"
            rel="noopener noreferrer"
            className="underline duration-300 hover:text-gray-400"
          >
            GitHub Issues Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline duration-300 hover:text-gray-400"
          >
            Contributor Covenant Code of Conduct
          </a>
        </li>
        <li>
          <a
            href="https://www.conventionalcommits.org/en/v1.0.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline duration-300 hover:text-gray-400"
          >
            Conventional Commits
          </a>
        </li>
      </ul>
    </div>
  );
}
