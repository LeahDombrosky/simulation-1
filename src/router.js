import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Bins from './components/Bins/Bins';
import Item from './components/Item/Item';


export default (
<Switch>
<Route exact path="/" component={ Landing }/>
<Route path="/bins/:shelf" component={ Bins }/>
<Route path='/bin/:num' compenent={ Item }/>
</Switch>
)