import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 10rem;
  background: #fff;

  .logo {
    width: 30%;
    margin-left: 19.5%;
  }

  .logo img {
    width: 150px;
    height: 100px;
  }

  .nav {
    margin: auto;
    width: 30rem;
  }

  .logo h1 {
    font-family: Castellar;
    font-size: 3rem;
    margin: 3rem auto;
  }

  .navUsers {
    margin: auto;
    width: 30%;
  }

  a {
    color: ${primaryDarkColor};
    margin-left: 10px;
    font-weight: bold;
    transition: 0.8s;
  }

  a:hover {
    color: ${primaryColor};
  }

  #logout {
    margin-right: 10px;
  }
  #usuario {
    margin-left: 10px;
  }
`;
