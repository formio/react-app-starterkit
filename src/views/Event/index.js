import { Route, Switch } from 'react-router-dom'
import React from 'react'
import List from './List'
import Create from './Create'
import Item from './Item/index'
import { PrivateRoute } from '../../containers/routes';

const Form = () => (
  <div>
    <Switch>
      <PrivateRoute exact path="/event" component={List} />
      <PrivateRoute exact path="/event/create" component={Create} />
      <Route path="/event/:eventId" component={Item} />
    </Switch>
  </div>
)

export default Form
