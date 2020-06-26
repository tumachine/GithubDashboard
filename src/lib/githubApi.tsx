import axios, { AxiosResponse, AxiosError } from 'axios';

interface RepoInfo {
  id: number,
  url: string,
  name: string,
  stargazers_count: number,
  forks_count: number,
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

interface Contributor {
  login: string,
  avatar_url: string,
  url: string,
  html_url: string,
  contributions: number,
}

interface Language { 
  language: string,
  lines: number; 
}

interface DataConverter<T> {
  (data: any): T
}

interface Response<T> {
  data: T,
  message: string,
  success: boolean,
}

enum SearchSort {
  stars = 'stars',
  forks = 'forks',
  help = 'help-wanted-issues',
  updated = 'updated',
}

enum SearchOrder {
  descending = 'desc',
  ascending = 'asc',
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

const searchBy = {
  any: 'stars:>=1',
  name: (name: string) => `${name}+in:name`
}

// https://api.github.com/search/repositories?q=stars:>=1&sort=stars&order=desc&page=$1&per_page=10
// https://api.github.com/search/repositories?q=tumachine+in:name&sort=stars&order=desc&page=$4&per_page=10
const constructPageSearchURL = (search: string = '', 
                                page: number = 1, 
                                sort: SearchSort = SearchSort.stars, 
                                order: SearchOrder = SearchOrder.descending,
                                per_page: number = 10): string => {
  return `https://api.github.com/search/repositories?` +
      `q=${search === '' ? searchBy.any : searchBy.name(search)}` +
      `&sort=${sort}` +
      `&order=${order}` +
      `&page=${page}` +
      `&per_page=${per_page}`
}

function standardGet<T>(url: string, converter: DataConverter<T> = (data) => data): Promise<Response<T>> {
  console.log('getting: ' + url)
  return axios.get(url)
    .then(res => {
      return createSuccessResponse(converter(res.data))
    })
    .catch((error: AxiosError) => {
      return createErrorResponse(error.message);
    })
}

const getLanguages = (lang_url: string): Promise<Response<Language[]>> => {
  return standardGet<Language[]>(lang_url, (data) => {
      const languages: Language[] = Object.keys(data).map(key => {
        return { language: key, lines: data[key] }
      })
      return languages;
  })
}

const getContributors = (cont_url: string): Promise<Response<Contributor[]>> => {
  return standardGet<Contributor[]>(cont_url)
}

const getPage = (pageSearchURL: string): Promise<Response<RepoInfo[]>> => {
  return standardGet<RepoInfo[]>(pageSearchURL, (data) => data.items);
}

const getRepo = (repo_url: string): Promise<Response<RepoInfo>> => {
  return standardGet<RepoInfo>(repo_url, (data) => data);
}

export { 
  SearchSort,
  SearchOrder,
  constructPageSearchURL,
  getPage,
  getLanguages,
  getContributors,
  getRepo,
  RepoInfo,
  Response,
  Language,
  Contributor 
};
