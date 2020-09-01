import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import User from '../pages/User';
import UserCreate from '../pages/UserCreate';
import UserList from '../pages/UserList';
import Pedestrian from '../pages/Pedestrian';
import PedestrianList from '../pages/PedestrianList';
import PedestrianRegister from '../pages/PedestrianRegister';
import Vehicle from '../pages/Vehicle';
import VehicleList from '../pages/VehicleList';
import VehicleRegister from '../pages/VehicleRegister';
import Control from '../pages/Control';
import ControlList from '../pages/ControlList';
import PedestrianControl from '../pages/PedestrianControl';
import VehicleControl from '../pages/VehicleControl';

export default function Routes() {
  return (
    <Switch>
      {/* LOGIN */}
      <MyRoute exact path="/" component={Login} />

      {/* HOME */}
      <MyRoute exact path="/home" component={Home} />

      {/* USER */}
      <MyRoute exact path="/user" component={User} isClosed />
      <MyRoute exact path="/user/:id/edit" component={User} isClosed />
      <MyRoute exact path="/user/user-list" component={UserList} isClosed />
      <MyRoute exact path="/user/create-user" component={UserCreate} isClosed />

      {/* PEDESTRIAN */}
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
      <MyRoute
        exact
        path="/pedestrian-list/register/"
        component={Pedestrian}
        isClosed
      />
      <MyRoute
        exact
        path="/pedestrian-list/register/:id"
        component={PedestrianRegister}
        isClosed
      />
      <MyRoute
        exact
        path="/pedestrian/:id/edit"
        component={Pedestrian}
        isClosed
      />

      {/* VEHICLE */}
      <MyRoute exact path="/vehicle-list" component={VehicleList} isClosed />
      <MyRoute
        exact
        path="/vehicle-list/vehicle"
        component={Vehicle}
        isClosed
      />
      <MyRoute
        exact
        path="/vehicle-list/register/"
        component={Vehicle}
        isClosed
      />
      <MyRoute
        exact
        path="/vehicle-list/register/:id"
        component={VehicleRegister}
        isClosed
      />
      <MyRoute exact path="/vehicle/:id/edit" component={Vehicle} isClosed />

      {/* CONTROL */}
      <MyRoute exact path="/control" component={Control} isClosed />
      <MyRoute
        exact
        path="/pedestrian-control"
        component={PedestrianControl}
        isClosed
      />
      <MyRoute
        exact
        path="/vehicle-control"
        component={VehicleControl}
        isClosed
      />
      <MyRoute exact path="/control-list" component={ControlList} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
