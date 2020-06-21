import React, { useState } from 'react';
import { RepoInfo } from '../lib/githubApi'

interface Props {
    active: number,
    handleClick: Function,
}

const Paginator = (props: Props) => {
    const getButtons = (active: number): JSX.Element[] => {
        const buttons: JSX.Element[] = [];
        for (let i = 1; i <= 5; i += 1) {
            const button = <input 
                             style={{background: active === i ? 'grey' : 'white'}} 
                             key={'page:' + i} 
                             type='button' 
                             onClick={(e) => props.handleClick(i)} 
                             value={i}
                            />;

            buttons.push(button)
        }
        return buttons;
    } 
    
    return (
        <div>
            {getButtons(props.active)}
        </div>
    )
}

export default Paginator;
