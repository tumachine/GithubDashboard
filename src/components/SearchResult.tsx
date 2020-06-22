import React, { useState } from 'react';
import { RepoInfo } from '../lib/githubApi'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    repo: RepoInfo,
}

const SearchResult = (props: Props) => {
    const history = useHistory();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const path = '/card';
        const state = { repo: props.repo}  
        history.push(path, state);
    };

    return (
        <Card onClick={handleClick}>
            <Name>{props.repo.name}</Name>
            <Container>
                <div>Stars: {props.repo.stargazers_count}</div>
                <div>Last commit on: {new Date(props.repo.updated_at).toLocaleString()}</div>
                <a href={props.repo.html_url} target='_blank' onClick={(e) => e.stopPropagation()}>Github</a>
            </Container>

        </Card>
    )   
}

const Name = styled.h3`
    font-size: 25px;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const Container = styled.div`
    padding: 2px 16px;
`;

const Card = styled.div`
    padding: 16px;
    background-color: #f4f4f4;
    &:hover {
        background-color: white;
    }
    border: 5px solid black;
`;

export default SearchResult;
