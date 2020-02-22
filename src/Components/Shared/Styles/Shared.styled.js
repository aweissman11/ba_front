import styled from 'styled-components';
import { Colors } from './Colors';
import { Devices } from './Devices';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #0c1b23;
  color: #d1e6e6;
  padding-top: 200px;
  padding-bottom: 75px;
  text-align: center;
`;
PageWrapper.displayName = 'PageWrapper';

export const OuterOutline = styled.div`
  border: solid 1px ${Colors.Text};
  padding: 10px;
  width: 90%;
  margin: auto;
  max-width: 1050px;
`;
OuterOutline.displayName = 'OuterOutline';

export const InnerOutline = styled.div`
  border: solid 1px ${Colors.Text};
  width: 100%;
  overflow: hidden;
  min-height: 300px;

  @media ${Devices.Laptop} {
    padding: ${({ extraPadding }) => extraPadding && extraPadding};
  }
`;
InnerOutline.displayName = 'InnerOutline';

export const BlockTextWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
BlockTextWrapper.displayName = 'BlockTextWrapper';

export const CenterIt = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  margin-bottom: ${({ noBottom }) => noBottom && '10px'};
`;
CenterIt.displayName = 'CenterIt';

export const BasicH3 = styled.h3`
  font-size: 1.4em;
  margin: 10px auto;
`;
BasicH3.displayName = 'BasicH3';

export const CenteredH3 = styled.h3`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  color: ${Colors.Text};
`;
CenteredH3.displayName = 'CenteredH3';

export const BasicText = styled.h3`
  margin: ${({ leftText }) => leftText ? '0px 0 10px 50px' : '10px auto'};
  font-size: 1em;
  color: ${Colors.Text};
  text-align: ${({ centerText }) => centerText && 'center'};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
`;
BasicText.displayName = 'BasicText';

