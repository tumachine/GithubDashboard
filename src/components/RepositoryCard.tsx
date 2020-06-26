import React, { useState, useEffect } from 'react';
import * as Github from '../lib/githubApi';
import { Fetching, generateUseResponseData, LStorage } from '../lib/utils';
import './index.css';
import moment from 'moment';

interface Props {
    location: any;
}

const fetchingLanguages: Fetching<Github.Language[]> = {
  request: (url) => Github.getLanguages(url),
  render: (data) => data.map(lang => (
    <li key={lang.language}><strong>{lang.language}</strong>: {lang.lines}</li>
  )),
  message: 'Fetching languages...',
}

const fetchingContributors: Fetching<Github.Contributor[]> = {
  request: (url) => Github.getContributors(url),
  render: (data) => {
    const cont = data.length > 10
        ? data.slice(0, 10)
        : data;

    return cont.map(c => (
      <li key={c.url}><a href={c.html_url}>{c.login}</a></li>
    ));
  },
  message: 'Fetching contributors...',
}

const useLanguagesResponse = generateUseResponseData(fetchingLanguages);
const useContributorsResponse = generateUseResponseData(fetchingContributors);


const RepositoryCard = (props: Props) => {
  // https://api.github.com/repositories/28457823
  const [languages, setLanguages] = useLanguagesResponse();
  const [contributors, setContributors] = useContributorsResponse();
  const [isFetching, setIsFetching] = useState(true);
  const [repo, setRepo] = useState<Github.RepoInfo>(null);

  useEffect(() => {
    Github.getRepo(getUrl())
      .then(data => {
        setLanguages(data.data.languages_url);
        setContributors(data.data.contributors_url);
        setRepo(data.data);
        setIsFetching(false);
      })
  }, [])

  const getUrl = () => {
    const url = props?.location?.state?.url;
    if (url) {
      LStorage.save('repo', url)
      return url
    }
    return Github.getRepo(LStorage.start('repo', "https://api.github.com/repos/freeCodeCamp/freeCodeCamp"))
  }

  const convertDescription = (description: string, charLimit: number = 100) => {
      if (!description) {
          return ''
      }

      if (description.length > charLimit) {
          return description.substr(0, charLimit) + '...'
      }
      return description;
  }

  return (
      <div className='container'>
        {!isFetching && (
        <div className="card">
          <div className='card__intro'>
            <h1 className='card__intro__name'>{repo.name}</h1>
          </div>

          <div className="card__subintro">
            <h2 className='card__subintro__stars'>Stars: <strong>{repo.stargazers_count}</strong></h2>
            <h2 className='card__subintro__forks'>Forks: {repo.forks_count}</h2>
            <h2 className='card__subintro__commit'>Commit: {moment(repo.updated_at).format('lll')}</h2>
          </div>

          <div className='card__body'>
            <div className='card__owner'>
              <img className='card__owner__img' src={repo.owner.avatar_url}></img>
              <p className='card__owner__link'>Owner: <a href={repo.owner.html_url} target='_blank'>{repo.owner.login}</a></p>
            </div>

            <div className='card__description'>
              <div className='card__desc'>
                <h2 className='card__desc__title'>Description:</h2>
                <p className='card__desc__text'>{convertDescription(repo.description)}</p>
              </div>

              <div className='card__info'>
                <div className='card__info__lang'>
                  <h2 className='card__info__lang__title card__info__title'>Languages:</h2>
                  <ul className='card__info__lang__list'>
                    {languages}
                  </ul>
                </div>

                <div className='card__info__cont'>
                  <h2 className='card__info__cont__title card__info__title'>Contributors:</h2>
                  <ul className='card__info__cont__list'>
                    {contributors}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
  )
}

export default RepositoryCard;
