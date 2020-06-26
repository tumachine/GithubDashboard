import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchSite from './SearchSite';
import RepositoryCard from './RepositoryCard';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={SearchSite}></Route>
            <Route exact path='/card' component={RepositoryCard}></Route>
        </Switch>
    )
}

export default Main;
