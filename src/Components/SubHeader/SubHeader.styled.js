import styled from 'styled-components';
import { Colors } from '../Shared/Styles/Colors';
import { Devices } from '../Shared/Styles/Devices';

export const SubHeaderWrapper = styled.div`
  height: 110px;
  width: 100%;
  background: ${Colors.BG};
  padding-top: 70px;
  display: flex;
  justify-content: center;
  border: 1px solid ${Colors.BG};
  margin-bottom: 100px;
`;
SubHeaderWrapper.displayName = 'SubHeaderWrapper';

export const LoginButton = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  line-height: 30px;
  font-weight: bold;
  color: ${Colors.Text};
  cursor: pointer;
  border: 1px solid ${Colors.Text};
  height: min-content;
  padding: 5px;
  border-radius: 4px;

  &:hover {
    background: #484747;
  }

  @media ${Devices.Laptop} {
    margin-right: 6%;
  }
`;
LoginButton.displayName = 'LoginButton';

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 135px;
  padding-top: 45px;
  margin: 20px;

  @media ${Devices.Laptop} {
    margin-right: 6%;
  }
`;
LogoutWrapper.displayName = 'LogoutWrapper';

export const UserAvatar = styled.img`
  border-radius: 50% 50%;
  max-width: 2.885rem;
  height: auto;
  box-shadow: 0 0 4px 0 #b3bac7;
  position: relative;
  top: 4px;
`;
UserAvatar.displayName = 'UserAvatar';