import React from 'react'
import { useSelector } from 'react-redux'
import GrandsonBox from './Grandsonbox'

const Box = () => {
    let count = useSelector (state => state.count )
    return (
    <div>
      { count }
      <GrandsonBox></GrandsonBox>
    </div>
  )
}

export default Box

