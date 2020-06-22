import axios from 'axios';

interface CardInfo {
  name: string,
  stars: number,
  last_commit: Date,
  avatar_url: string,
  owner_nickname: string,
  owner_url: string,
  description: string,
  languages: string[],
  contributors: string[],
}

interface RepoInfo {
  id: number,
  name: string,
  stargazers_count: number,
  updated_at: string,
  languages_url: string,
  contributors_url: string,
  owner: {
    avatar_url: string,
    login: string,
    html_url: string,
  },
  description: string,
  html_url: string,
}

interface LangAndContributors {
  languages: string[],
  contributors: string[],
}

interface Response<T> {
  data: T,
  message: string,
  success: boolean,
}

function createResponse<T>(data: T, message: string, success: boolean): Response<T> {
  return { data, message, success };
}

function createErrorResponse<T>(message: string = 'Error'): Response<T> {
  return createResponse(null, message, false);
}

function createSuccessResponse<T>(data: T, message: string = 'Success'): Response<T> {
  return createResponse(data, message, true);
}

const baseURL = 'https://api.github.com/';

const URLS = {
  top: (page: number) => `${baseURL}search/repositories?q=stars:>=1&sort=stars&order=desc&page=${page}&per_page=10`,
  find: (search: string, page: number) => `${baseURL}search/repositories?q=${search}+in:name&sort=stars&order=desc&page=${page}&per_page=10`,
}

const getLanguagesAndContributors = (lang_url: string, cont_url: string): Promise<Response<LangAndContributors>> => {
  return axios.all([axios.get(lang_url), axios.get(cont_url)])
    .then(axios.spread((lang, cont) => {  
      const languages = Object.keys(lang.data);
      const contributors = cont.data.map((c: any) => c.login);
      const data: LangAndContributors = { languages, contributors };
      return createSuccessResponse(data);
    }))
    .catch((error: Error) => {
      return createErrorResponse('Could not fetch languages and contributors');
    })
}

const getPage = (page: number, search?: string): Promise<Response<RepoInfo[]>> => {
  const request = search !== ''
    ? axios.get(URLS.find(search, page))
    : axios.get(URLS.top(page))

  return request
    .then(res => {
      if (res.data.items.length === 0) {
        return createSuccessResponse(res.data.items, 'No info on this page')
      }
      return createSuccessResponse(res.data.items);

    })
    .catch((error: Error) =>  createErrorResponse('Could not fetch page'))
}

const extractRepoInfo = (repoInfo: RepoInfo): Promise<Response<CardInfo>> => {
    return getLanguagesAndContributors(repoInfo.languages_url, repoInfo.contributors_url)
      .then(res => {
        if (!res.success) {
          return createErrorResponse<CardInfo>(res.message);
        }

        const data = {
          name: repoInfo.name,
          stars: repoInfo.stargazers_count,
          last_commit: new Date(repoInfo.updated_at),
          avatar_url: repoInfo.owner.avatar_url,
          owner_nickname: repoInfo.owner.login,
          owner_url: repoInfo.owner.html_url,
          description: repoInfo.description,
          languages: res.data.languages,
          contributors: res.data.contributors,
        }
        return createSuccessResponse(data);
      })
      .catch((error: Error) => {
        return createErrorResponse('Could not get languages and contributors')
      })
}

export { extractRepoInfo, getPage, RepoInfo, Response };
