import React from 'react'


import { Dot, LoadingWrapper } from './styles'

const Loading = ( ) => {
  return (
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
  )
}

export default Loading;