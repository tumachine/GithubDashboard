import React, { useState, useEffect } from 'react';
import * as Github from '../lib/githubApi';
import SearchResult from './SearchResult';
import Paginator from './Paginator';
import { LStorage, Fetching, generateUseResponseData } from '../lib/utils';
import './index.css';

interface Props {
}


const fetchingPage: Fetching<Github.RepoInfo[]> = {
  request: (url) => Github.getPage(url),
  render: (data) => (
        <table className='items'>
          <thead>
            <tr>
              <th className='items-head__name items__name'>Name</th>
              <th className='items-head__owner items__owner'>Owner</th>
              <th className='items-head__stars items__stars'>Stars</th>
              <th className='items-head__forks items__forks'>Forks</th>
              <th className='items-head__commit items__commit'>Commit</th>
            </tr>
          </thead>
          <tbody>
            {data.map(repo => <SearchResult key={repo.id} repo={repo}></SearchResult>)}
          </tbody>
        </table>
  ),
  message: 'Fetching page...',
}

const useSearchResponse = generateUseResponseData(fetchingPage);

const SearchSite = (props: Props) => {
  const [search, setSearch] = useState(LStorage.start('search', ''));
  const [page, setPage] = useState(LStorage.start('page', 1));
  const [sort, setSort] = useState(LStorage.start('sort', Github.SearchSort.stars));
  const [order, setOrder] = useState(LStorage.start('order', Github.SearchOrder.descending));

  const [searchResponse, setSearchResponse] = useSearchResponse(Github.constructPageSearchURL(search, page));

  useEffect(() => {
    startSearch(page); 
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    LStorage.save('search', e.target.value);
  }

  const startSearch = (page: number) => {
    setSearchResponse(Github.constructPageSearchURL(search, page));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startSearch(1);
    setPage(1);
  }

  const handlePageClick = (pageNum: number) => {
    startSearch(pageNum);
    setPage(pageNum);
    LStorage.save('page', pageNum);
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className='search'>
            <input type='text' className='search__text' placeholder='Type name of github repository' value={search} onChange={handleChange} />
            <input type='submit' className='search__submit' value='Search'/>
        </form>

        <Paginator active={page} handleClick={handlePageClick}></Paginator>

        {searchResponse}
    </div>
  )
}

export default SearchSite;
