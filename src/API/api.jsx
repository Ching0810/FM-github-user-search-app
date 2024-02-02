import { Octokit } from "@octokit/core";

const token = import.meta.env.GITHUB_TOKEN

const octokit = new Octokit({ auth: token });

export const getUserInfo = async (payload) =>  {
  try {
    const result = await octokit.request(`GET /users/${payload}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    return result.data
  } catch (error) {
    console.error('[Get user info failed]: ', error)
  }
}