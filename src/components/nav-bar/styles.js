import styled from 'styled-components';
import { Link } from 'gatsby';

export const Navbar = styled.nav`
  background: #333;
  height: 10vh;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  background-color: #272121;
  height: 100%;
`;

export const NavItem = styled.li`
  margin-left: 15px;
  color: #f6e9e9;

  a:visited {
    color: #f6e9e9;
  }
`;

export const StyledLink = styled(Link)``;
