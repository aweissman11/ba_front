import styled from 'styled-components';
import { Colors } from './Colors';
import { Devices } from './Devices';


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
`;
InnerOutline.displayName = 'InnerOutline';

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
  margin: 10px auto;
  font-size: .8em;
  color: ${Colors.Text};
`;
BasicText.displayName = 'BasicText';

