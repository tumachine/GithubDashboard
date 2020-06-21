import React, { useState, useEffect } from 'react';
import * as Github from '../lib/githubApi';
import SearchResult from '../components/SearchResult';
import Paginator from '../components/Paginator';
import styled from 'styled-components';

interface Props {
    location: any;
}

interface ContLang {
    contributors: string[],
    languages: string[]
}

const RepositoryCard = (props: Props) => {
    const repo = props.location.state.repo as Github.RepoInfo;
    const [additionalInfo, setAdditionalInfo] = useState<ContLang>({contributors: [], languages: []});

    useEffect(() => {
        Github.extractRepoInfo(repo)
            .then(cardInfo => {
                setAdditionalInfo({
                    contributors: cardInfo.contributors,
                    languages: cardInfo.languages,
                })
            })
    }, [])

    const loadContributorsLanguages = (addInfo: ContLang) => {
        const cont = addInfo.contributors.length > 10
           ? addInfo.contributors.slice(0, 10)
           : addInfo.contributors;

        return (
            <div>
                <div>
                    Top Contributors: {cont.map(cont => <div key={cont}>{cont}</div>)}
                </div>
                <br></br>
                <br></br>
                <div>
                    Languages: {addInfo.languages.map(lang => <div key={lang}>{lang}</div>)}
                </div>
            </div>
        )
    }


    return (
        <Card>
            <Name>Name - {repo.name}</Name>
            <Stars>Stars: {repo.stargazers_count}</Stars>
            <Updated>Last commit on: {new Date(repo.updated_at).toLocaleString()}</Updated>
            <Avatar src={repo.owner.avatar_url}></Avatar>
            <br></br>
            <a href={repo.owner.html_url} target='_blank'>Owner: {repo.owner.login}</a>
            <br></br>
            <div>Short description:</div>
            <div>{
                repo.description &&
                    repo.description.length > 100 
                        ? repo.description.substr(0, 100) + '...'
                        : repo.description
            }</div>
            <br></br>

            {additionalInfo === null
                ? 'Cannot get languages and contributors, most likely exceeded request limit'
                : loadContributorsLanguages(additionalInfo)
            } 
        </Card>
    )
}
const Name = styled.h1`
    font-size: 24px;
    border: 2px solid black;
    background: grey;
    color: white;
`;

const Stars = styled.div`
    font-size: 30px;
`;

const Updated = styled.div`
    font-size: 20px;
`;

const Avatar = styled.img`
    width: 100px;
    height: 100px;
`;

const Card = styled.div`
    font-weight: bold;
`;

export default RepositoryCard;
