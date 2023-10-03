export async function GetUserDetails(username: string) {
  const userURL = `https://api.github.com/users/${username.trim()}?client_id=ec1594e91cfa6b4281cb&client_secret=02388e8e126c1f3d96d7b2a59350a3620c08c137`;

  try {
    const userData = await fetch(userURL);
    return userData.json();
  } catch (error) {
    console.log(error);
  }
}

export async function GetRepoData(username: string, repo_name: string) {
  const repoURL = `https://api.github.com/repos/${username.trim()}/${repo_name.trim()}?client_id=ec1594e91cfa6b4281cb&client_secret=02388e8e126c1f3d96d7b2a59350a3620c08c137`;
  try {
    const repoData = await fetch(repoURL);
    return repoData.json();
  } catch (error) {
    console.log(error);
  }
}
