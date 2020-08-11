import { Route, Switch } from 'react-router-dom'
import React from 'react'
import List from './List';
import Create from './Create';
import Item from './Item/index'

const Resource = () => (
  <div>
    <Switch>
      <Route exact path="/resource" component={List} />
      <Route exact path="/resource/create" component={Create} />
      <Route path="/resource/:resourceId" component={Item} />
    </Switch>
  </div>
);

export default Resource