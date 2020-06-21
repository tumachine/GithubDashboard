import React, { useState } from 'react';
import { RepoInfo } from '../lib/githubApi'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    repo: RepoInfo,
}

const SearchResult = (props: Props) => {
    return (
        <Card>
            <StyledLink 
                to={{
                    pathname: '/card',
                    state: {
                        repo: props.repo,
                    }
                }}>
                {props.repo.name}
            </StyledLink>

            <div>Stars: {props.repo.stargazers_count}</div>
            <div>Last commit on: {new Date(props.repo.updated_at).toLocaleString()}</div>
            <a href={props.repo.html_url} target='_blank'>Github</a>
        </Card>
    )   
}

const StyledLink = styled(Link)`
    font-size: 25px;
    color: blue;
`;

const Card = styled.div`
    width: 100%;
    height: auto;
    border: 5px solid grey;
`;

export default SearchResult;
