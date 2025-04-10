import React from 'react'
import { dataContext } from '../context/dataContext'

function Unit4() {
    const data = useContext(dataContext)
  return (
    <div>
        <p>Hey, {data} congrats you have completed your unit-4</p>
    </div>
  )
}

export default Unit4