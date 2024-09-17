import React from 'react'
import { useSelector } from 'react-redux'

const GrandsonBox = () => {
    let count = useSelector((state) => state.count)
  return (
    <div>Grandbox {count}
      
    </div>
  )
}

export default GrandsonBox
