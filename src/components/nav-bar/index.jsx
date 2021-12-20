import React from 'react';

import * as S from './styles';

const routes = [
  {
    component: (
      <S.StyledLink to="/" activeStyle={{ color: '#E16428' }}>
        Sobre
      </S.StyledLink>
    ),
  },
  {
    component: (
      <S.StyledLink to="/projects" activeStyle={{ color: '#E16428' }}>
        Projetos
      </S.StyledLink>
    ),
  },
  {
    component: (
      <a href="https://www.linkedin.com/in/pacheckdev/" target="_blank">
        Linkedin
      </a>
    ),
  },
  {
    component: (
      <a href="https://www.github.com/Pacheck" target="_blank">
        Github
      </a>
    ),
  },
];

export const Navbar = () => (
  <S.Navbar>
    <S.NavList>
      {routes.map((route) => (
        <S.NavItem>{route.component}</S.NavItem>
      ))}
    </S.NavList>
  </S.Navbar>
);
