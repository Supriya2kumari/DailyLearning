import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../context/dataContext'
import Unit2 from './Unit2'

function unit1() {
    const data = useContext(dataContext)
  return (
    <div>
        <p>Welcome, {data} to unit-1</p>
        <Unit2 />
    </div>
  )
}

export default unit1