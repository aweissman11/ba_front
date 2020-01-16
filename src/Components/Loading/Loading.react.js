import React from 'react'
import { LoadingContainer } from './Loading.styled';

const Loading = () => {
  return (
    <LoadingContainer className='loading-container'>
      <div id="main">
        <span class="spinner"></span>
      </div>
    </LoadingContainer>
  )
}

export default Loading