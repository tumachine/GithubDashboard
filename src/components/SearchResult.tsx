import React, { useState } from 'react';
import { RepoInfo } from '../lib/githubApi'
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import './index.css'

interface Props {
    repo: RepoInfo,
}

const SearchResult = (props: Props) => {
    const history = useHistory();

    const [hovered, setHovered] = useState(false);

    const toogleHover = () => {
        setHovered(!hovered);
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const path = '/card';
        const state = { url: props.repo.url}  
        history.push(path, state);
    };

    return (
        <tr onMouseEnter={toogleHover} onMouseLeave={toogleHover} onClick={handleClick}>
            {/* <td className='items-row__name items__name'>
                <a className='items--link' href={props.repo.html_url} target='_blank' onClick={(e) => e.stopPropagation()}>{props.repo.name}</a>
            </td> */}
            <td className='items-row__name items__name'>{props.repo.name}</td>
            <td className='items-row__owner items__owner'>
                <a className='items--link' href={props.repo.owner.html_url} target='_blank' onClick={(e) => e.stopPropagation()}>{props.repo.owner.login}</a>
            </td>
            <td className='items-row__stars items__stars'>{props.repo.stargazers_count}</td>
            <td className='items-row__forks items__forks'>{props.repo.forks_count}</td>
            <td className='items-row__commit items__commit' style={{fontSize: hovered ? '18px': '24px'}}>
                {hovered 
                    ? moment(props.repo.updated_at).format('lll')
                    : moment(props.repo.updated_at).fromNow()}
            </td>
        </tr>
    )   
}

export default SearchResult;
