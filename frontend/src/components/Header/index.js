import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaMale,
  FaTruck,
  FaExchangeAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import history from '../../services/history';

import { Nav } from './styled';
// import logoImg from '../../assets/images/logo.jpeg';
import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <div className="logo">
        <h1>Naxos</h1>
        {/* <img src={logoImg} alt="logo naxos" /> */}
      </div>

      <div className="nav">
        <Link to="/home" data-tip="Home">
          <FaHome size={24} />
        </Link>
        <Link to="/pedestrian-list" data-tip="Pedestre">
          <FaMale size={24} />
        </Link>
        <Link to="/vehicle-list" data-tip="Veículo">
          <FaTruck size={24} />
        </Link>
        <Link to="/control" data-tip="Controle Entrada/Saída">
          <FaExchangeAlt size={24} />
          <ReactTooltip />
        </Link>
      </div>

      <div className="navUsers" data-tip="Usuário">
        <Link to="/user">
          <FaUserAlt size={24} />
        </Link>

        {isLoggedIn ? (
          <Link id="logout" onClick={handleLogout} to="/" data-tip="Logout">
            <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link id="logout" to="/" data-tip="Login">
            <FaSignInAlt size={24} />
          </Link>
        )}

        {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
      </div>
    </Nav>
  );
}
