import React, { useState, useEffect } from 'react';
import * as Github from '../lib/githubApi';
import SearchResult from '../components/SearchResult';
import Paginator from '../components/Paginator';
import styled from 'styled-components';
import { responseData, createResponseData } from '../lib/utils';

interface Props {
    location: any;
}

interface ContLang {
    contributors: string[],
    languages: string[]
}

const RepositoryCard = (props: Props) => {
    // https://api.github.com/repositories/28457823
    const repo = props.location.state.repo as Github.RepoInfo;

    const [lastData, setLastData] = useState<responseData<ContLang>>(createResponseData('Fetching', { contributors: [], languages: []}, false));

    useEffect(() => {
      setLastData(createResponseData('Fetching', lastData.data, true));
        Github.extractRepoInfo(repo)
          .then(cardInfo => {
              setLastData(createResponseData(cardInfo.message, cardInfo.data, false));
          })
    }, [])

    const loadDescription = (description: string, charLimit: number = 100) => {
        if (!description) {
            return ''
        }

        if (description.length > charLimit) {
            return description.substr(0, charLimit) + '...'
        }
        return description;
    }

    const loadContributorsLanguages = (addInfo: ContLang) => {
        const cont = addInfo.contributors.length > 10
           ? addInfo.contributors.slice(0, 10)
           : addInfo.contributors;

        return (
            <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <div>
                    Top Contributors: {cont.map(cont => <div key={cont}>{cont}</div>)}
                </div>
                <div>
                    Languages: {addInfo.languages.map(lang => <div key={lang}>{lang}</div>)}
                </div>
            </div>
        )
    }


    return (
        <Card>

            <Avatar src={repo.owner.avatar_url}></Avatar>
            <Info>
                <h1>{repo.name}</h1>

                <Title>Stars: {repo.stargazers_count}</Title>
                <Title>Last commit on: {new Date(repo.updated_at).toLocaleString()}</Title>

                <a href={repo.owner.html_url} target='_blank'>Owner: {repo.owner.login}</a>

                <h2>Short description:</h2>
                <p>{loadDescription(repo.description)}</p>

                <h2>Status: {lastData.message}</h2>
                <div>
                {lastData.data && loadContributorsLanguages(lastData.data)} 
                </div>
            </Info>
        </Card>
    )
}
const Title = styled.p`
    color: grey;
    font-size: 18px;
`;

const Stars = styled.div`
    font-size: 30px;
`;

const Updated = styled.div`
    font-size: 20px;
`;

const Avatar = styled.img`
    width: 400px;
    height: 100%;
`;

const Info = styled.div`
    text-align: center;
    font-family: arial;
    width: 100%;
`;

const Card = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 800px;
    margin: auto;
`;

export default RepositoryCard;
