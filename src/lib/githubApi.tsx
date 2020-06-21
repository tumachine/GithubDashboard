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
  message: string,
  languages: string[],
  contributors: string[],
}

const baseURL = 'https://api.github.com/';

const URLS = {
  top: (page: number) => `${baseURL}search/repositories?q=stars:>0&sort=stars&order=desc&page=${page}&per_page=10`,
  find: (search: string, page: number) => `${baseURL}search/repositories?q=${search}+in:name&sort=stars&order=desc&page=${page}&per_page=10`,
}

const getLanguagesAndContributors = (lang_url: string, cont_url: string): Promise<LangAndContributors> => {
  return axios.all([axios.get(lang_url), axios.get(cont_url)])
    .then(axios.spread((lang, cont) => {  
      const languages = Object.keys(lang.data);
      const contributors = cont.data.map((c: any) => c.login);
      return {
        message: 'success',
        languages,
        contributors,
      }
    }))
    .catch((error: Error) => {
      return null;
    })
}

const getPage = (page: number, search?: string): Promise<RepoInfo[]> => {
  const request = search !== ''
    ? axios.get(URLS.find(search, page))
    : axios.get(URLS.top(page))

  return request
    .then(res => res.data.items)
    .catch((error: Error) => {
      return null;
    })
}

const extractRepoInfo = (data: RepoInfo): Promise<CardInfo> => {

    return getLanguagesAndContributors(data.languages_url, data.contributors_url)
      .then(d => {
        return {
          name: data.name,
          stars: data.stargazers_count,
          last_commit: new Date(data.updated_at),
          avatar_url: data.owner.avatar_url,
          owner_nickname: data.owner.login,
          owner_url: data.owner.html_url,
          description: data.description,
          languages: d.languages,
          contributors: d.contributors,
        }
      })
      .catch((error: Error) => {
        return null;
      })
}

export { extractRepoInfo, getPage, RepoInfo };
