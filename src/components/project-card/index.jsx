import React from 'react';

import * as S from './styles';
const ProjectCard = ({ name, link, img }) => {
  const handleProjectLink = () => (window.location.href = link);
  return (
    <S.Container onClick={handleProjectLink}>
      <S.Name>{name}</S.Name>
      <S.Img src={img.url} alt="tesaasdasdf" />
    </S.Container>
  );
};

export default ProjectCard;
