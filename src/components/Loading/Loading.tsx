import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import {Container} from './Loadingstyle'

const Loading = () => {
  return (
    <Container>
        <RingLoader color='#090154'/>
    </Container>
  )
}

export default Loading