import React from 'react'
import { LoadingContainer } from './Loading.styled';

const Loading = ({ isModal }) => {
  return (
    <LoadingContainer className='loading-container' isModal={isModal}>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </LoadingContainer>
  )
}

export default Loading