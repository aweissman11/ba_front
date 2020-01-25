import React from 'react'
import styled from 'styled-components';
import { Colors } from '../Styles/Colors';

const Dots = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px auto;
`;

const DotsContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-around;
`;

const SpacerDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: ${Colors.Text};
`;

const SpacerDots = () => {
  return (
    <Dots>
      <DotsContainer>
        <SpacerDot />
        <SpacerDot />
        <SpacerDot />
      </DotsContainer>
    </Dots>
  )
}

export default SpacerDots