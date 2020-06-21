import React, { useState, useEffect } from 'react';
import * as Github from '../lib/githubApi';
import SearchResult from '../components/SearchResult';
import Paginator from '../components/Paginator';

interface Props {
}

const startLocalStorage = (item: string, defVal: string) => {
  const value = window.localStorage.getItem(item)
  if (value !== null) {
    return value;
  }
  window.localStorage.setItem(item, defVal)
  return defVal;
}

const setLocalStorage = (item: string, val: string) => {
  window.localStorage.setItem(item, val)
}

const SearchSite = (props: Props) => {
  const [search, setSearch] = useState(startLocalStorage('search', ''));
  const [results, setResults] = useState<Github.RepoInfo[]>([]);
  const [page, setPage] = useState(parseInt(startLocalStorage('page', '1')));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setLocalStorage('search', e.target.value);
  }

  const startSearch = () => {
    Github.getPage(page, search)
      .then(repo => {
          setResults(repo)
      })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (page === 1) {
        startSearch();
    } else {
        setPage(1);
    }
  }

  const handlePageClick = (pageNum: number) => {
      setPage(pageNum);
  }

  useEffect(() => {
    startSearch();
    setLocalStorage('page', page.toString());
  }, [page])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Type name of github repository
                <input type='text' value={search} onChange={handleChange} />
            </label>
            <input type='submit' value='Search' />
        </form>
        <div>
            <Paginator active={page} handleClick={handlePageClick}></Paginator>
        </div>

        <div>
          {results === null
            ? 'Cannot get data, most likely exceeded request limit'
            : results.length === 0 
              ? 'No info for this page'
              : results.map(result => <SearchResult key={result.id} repo={result}></SearchResult>)
          } 
        </div>
    </div>
  )
}

export default SearchSite;
