import React, { useState, useEffect } from 'react';
import * as Github from '../lib/githubApi';
import SearchResult from '../components/SearchResult';
import Paginator from '../components/Paginator';
import { responseData, startLocalStorage, createResponseData, setLocalStorage } from '../lib/utils';
import styled from 'styled-components';

interface Props {
}

const SearchSite = (props: Props) => {
  const [data, setData] = useState<responseData<Github.RepoInfo[]>>(createResponseData('Fetching', [], false))
  const [search, setSearch] = useState(startLocalStorage('search', ''));
  const [page, setPage] = useState(parseInt(startLocalStorage('page', '1')));

  useEffect(() => {
    startSearch(page); 
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setLocalStorage('search', e.target.value);
  }

  const startSearch = (page: number) => {
    setData(createResponseData('Fetching', data.data, true));
    Github.getPage(page, search)
      .then(res => {
        setData(createResponseData(res.message, res.data, false));
      })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startSearch(1);
    setPage(1);
  }

  const handlePageClick = (pageNum: number) => {
    startSearch(pageNum);
    setPage(pageNum);
    setLocalStorage('page', pageNum.toString());
  }

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

        <div>Status: {data.message}</div>

        {data.data && data.data.map(repo => (
          <CardContainer key={repo.id}>
            <Row>
              <SearchResult repo={repo}></SearchResult>
            </Row>
          </CardContainer>
        ))} 
    </div>
  )
}

const CardContainer = styled.div`
    box-sizing: border-box;
`;

const Row = styled.div`
    margin: 0 -5px;
    width: 100%;
    padding: 0 10px;
`;


export default SearchSite;
