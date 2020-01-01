import styled from 'styled-components';

export const LoginButton = styled.div`
  width: 300px;
  height: 100px;
  background: magenta;
  border-radius: 20px;
  margin: 40px auto;
`;
LoginButton.displayName = 'LoginButton';

export const RsvpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
  margin: 40px auto;
`;
RsvpForm.displayName = 'RsvpForm';

export const StyledInput = styled.input`
  margin: 40px auto;
  font-size: 35px;
  background: blue;
`;
StyledInput.displayName = 'StyledInput';

export const AddBtn = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background: blue;
  margin: auto;
`;
AddBtn.displayName = 'AddBtn';

export const NewPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 40px auto;
  border: 1px solid;
  padding: 10px;
`;
NewPerson.displayName = 'NewPerson';


export const SpaceBlock = styled.div`
  margin: 100px auto;
  width: 100%;
`;
SpaceBlock.displayName = 'SpaceBlock';

