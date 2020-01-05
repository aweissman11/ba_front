import styled from 'styled-components';
import { Colors } from './Colors';

export const FancyBtn = styled.div`
  width: max-content;
  padding: 10px;
  background: ${Colors.Text};
  border: 1px solid ${Colors.BG};
  border-radius: 4px;
  cursor: pointer;
  transition: .03s;
  box-shadow: 2px 2px 3px #d1e6e675;
  position: relative;
  bottom: 2px;
  right: 2px;
  margin: ${({ centerIt }) => centerIt ? '10px auto' : '10px'};
  color: ${Colors.BG};
  margin-left: ${({ hangLeft }) => hangLeft && 'auto'};

  &:hover {
    background: ${Colors.BG};
    color: ${Colors.Text};
    border: solid 1px ${Colors.Text};
  }

  &:active {
    box-shadow: none;
    bottom: 0;
    right: 0;
  }
`;
FancyBtn.displayName = 'FancyBtn';
