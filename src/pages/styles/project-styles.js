import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.orange};

  ${(props) => console.log(props)}
`;

export const ProjectWrapper = styled.div``;
