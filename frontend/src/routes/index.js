import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Pedestrian from '../pages/Pedestrian';
import Vehicle from '../pages/Vehicle';
import Control from '../pages/Control';
import Home from '../pages/Home';
import PedestrianList from '../pages/PedestrianList';
import VehicleList from '../pages/VehicleList';
import User from '../pages/User';
import UserCreate from '../pages/UserCreate';
import UserList from '../pages/UserList';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/home" component={Home} />
      <MyRoute exact path="/user" component={User} isClosed />
      <MyRoute exact path="/user/:id/edit" component={User} isClosed />
      <MyRoute exact path="/user/user-list" component={UserList} isClosed />
      <MyRoute exact path="/user/create-user" component={UserCreate} isClosed />
      <MyRoute
        exact
        path="/pedestrian-list"
        component={PedestrianList}
        isClosed
      />
      <MyRoute
        exact
        path="/pedestrian-list/pedestrian"
        component={Pedestrian}
        isClosed
      />
      <MyRoute exact path="/vehicle-list" component={VehicleList} isClosed />
      <MyRoute
        exact
        path="/vehicle-list/vehicle"
        component={Vehicle}
        isClosed
      />
      <MyRoute exact path="/control" component={Control} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
