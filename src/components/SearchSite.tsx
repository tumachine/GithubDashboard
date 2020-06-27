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
  const [perPage, setPerPage] = useState(LStorage.start('per_page', 10));

  const createSearchResponse = (): string => {
    return Github.constructPageSearchURL(search, page, sort, order, perPage);
  }

  const [searchResponse, setSearchResponse] = useSearchResponse(createSearchResponse());

  useEffect(() => {
    startSearch(page); 
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    LStorage.save('search', e.target.value);
  }

  const startSearch = (page: number) => {
    setSearchResponse(createSearchResponse());
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startSearch(1);
    setPage(1);
  }

  const handlePageClick = (pageNum: number) => {
    setPage(pageNum);
    setSearchResponse(Github.constructPageSearchURL(search, pageNum, sort, order, perPage));
    LStorage.save('page', pageNum);
  }

  useEffect(() => {
    setSearchResponse(createSearchResponse());
  }, [order, sort, perPage])

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    LStorage.save('order', val)
    setOrder(val);
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    LStorage.save('sort', val)
    setSort(val);
  }

  const handlePerPageChange = (pages: number) => {
    LStorage.save('per_page', pages)
    setPerPage(pages);
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className='search'>
            <input type='text' className='search__text' placeholder='Type name of github repository' value={search} onChange={handleChange} />
            <input type='submit' className='search__submit' value='Search'/>
        </form>

        <div className="controls">
          <label>
            Order:
            <select value={order} onChange={handleOrderChange}>
              {Object.entries(Github.SearchOrder).map(([k, v]) => {
                return (
                  <option value={v}>{k}</option>
                )
              })}
            </select>
          </label>

          <label>
            Sort:
            <select value={sort} onChange={handleSortChange}>
              {Object.entries(Github.SearchSort).map(([k, v]) => {
                return (
                  <option value={v}>{k}</option>
                )
              })}
            </select>
          </label>


          <label>
            Pages:
            {[10, 20, 30].map(num => <button onClick={() => handlePerPageChange(num)}>{num}</button>)}
          </label>
        </div>

        {searchResponse}

        <Paginator active={page} handleClick={handlePageClick}></Paginator>
    </div>
  )
}

export default SearchSite;
