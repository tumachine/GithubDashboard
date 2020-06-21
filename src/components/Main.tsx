import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchSite from './SearchSite';
import RepositoryCard from './RepositoryCard';
import { RepoInfo } from '../lib/githubApi';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={SearchSite}></Route>
            <Route exact path='/card' component={RepositoryCard}></Route>
        </Switch>
    )
}

export default Main;
