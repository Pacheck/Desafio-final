import React from 'react';

import { Navbar } from '../components/nav-bar';
import CardProject from '../components/project-card';

import { useProjects } from '../hooks/useProjects';

import GlobalStyle from '../styles';
import GlobalThemeProvider from '../theme';
import * as S from './styles/project-styles';

const Projects = () => {
  const projects = useProjects();
  console.log(projects);
  const handleProjectsRender = () =>
    projects.map((project) => <CardProject {...project} />);

  return (
    <GlobalThemeProvider>
      <S.Container>
        <Navbar />
        <S.Wrapper>
          <S.ProjectWrapper>{handleProjectsRender()}</S.ProjectWrapper>
        </S.Wrapper>
      </S.Container>
      <GlobalStyle />
    </GlobalThemeProvider>
  );
};

export default Projects;
