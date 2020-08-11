 
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import List from './List'
import Item from './Item/index'

const Form = () => (
  <div>
    <Switch>
      <Route exact path="/resource/:resourceId/submission" component={List} />
      <Route path="/resource/:resourceId/submission/:submissionId" component={Item} />
    </Switch>
  </div>
);

export default Form