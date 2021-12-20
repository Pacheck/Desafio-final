import styled, { keyframes } from 'styled-components';

const imageEffect = keyframes`
    from {
        padding-bottom: -130px
        opacity: 0.4
    }
    to {
        padding-bottom: 0px
        opacity: 1;
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e16428;
  height: 90vh;
`;

export const Image = styled.img`
  width: 26rem;
  object-fit: cover;
  object-position: 10% 10%;
  height: 26rem;
  border-radius: 50%;
  margin-top: 20px;

  animation: ${imageEffect} 2.7s linear;
`;

export const Bio = styled.p`
  font-size: 25px;
  max-width: 700px;
  margin-top: 20px;
  color: #fefefe;
`;
