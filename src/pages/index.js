import React from 'react';

import { Navbar } from '../components/nav-bar';
import Image from '../assets/me.jpeg';
import * as S from './styles/about-styles';
import GlobalStyle from '../styles';

const About = () => (
  <>
    <Navbar />
    <S.Container>
      <S.Image src={Image} alt="a" />
      <S.Bio>
        Olá, me chamo Pedro Pacheco, tenho 25 anos e desenvolvedor front-end.
      </S.Bio>
      <S.Bio>
        Sou apaixonado por tecnologia a muitos anos, desde pequeno, e hoje tenho
        a grande oportunidade de trabalhar com algo que amo.
      </S.Bio>
    </S.Container>
    <GlobalStyle />
  </>
);

export default About;
