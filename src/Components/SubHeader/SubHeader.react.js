import React from 'react'
import { SubHeaderWrapper, LoginButton, UserAvatar, LogoutWrapper } from './SubHeader.styled';

import { useAuth0 } from '../../react-auth0-spa';

const SubHeader = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  // TODO: login and don't change the URL
  return (
    <SubHeaderWrapper className='sub-header-wrapper'>
      {!isAuthenticated &&
        <LoginButton
          className='login-btn'
          onClick={() => loginWithRedirect({})}
        >
          Login/Register
      </LoginButton>
      }

      {isAuthenticated &&
        <LogoutWrapper>
          <UserAvatar
            src={user.picture}
            alt="Profile"
            className="user-avatar"
            width="50"
          />
          <LoginButton
            onClick={() => logoutWithRedirect()}
          >
            Logout
        </LoginButton>
        </LogoutWrapper>
      }
    </SubHeaderWrapper>
  )
}

export default SubHeader