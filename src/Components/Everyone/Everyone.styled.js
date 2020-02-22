import styled from 'styled-components';

export const InnerTdWrap = styled.div`
  max-height: 200px;
  overflow: scroll;
  border: none;
`;
InnerTdWrap.displayName = 'InnerTdWrap';

export const Person = styled.div`
  width: max-content;
  margin: 10px;
  margin-bottom: 20px;
  text-align: left;
  line-height: 1.4em;
`;
Person.displayName = 'Person';