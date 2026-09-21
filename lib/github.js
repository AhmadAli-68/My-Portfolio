'use server';

const GITHUB_USERNAME = 'AhmadAli-68'

export const getReposData = async () => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2026-03-10',
      },
      next: {
        revalidate: 3600,
      }
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch repositories.')
  }

  return response.json()
}

export const getFeaturedProjects = async () => {
  const repositories = await getReposData();

  // console.log(repositories)

  return repositories.filter((repos) => {
    // console.log(repos.name, repos.topics)

    return repos.topics?.includes('featured')
  })
}