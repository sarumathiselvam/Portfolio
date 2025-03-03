import React from 'react'
import {Element} from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import './TopContainer.css'
import Myself from './Myself'

const TopContainer = () => {
  return (
  <Element name="about" className="topContainer">
    <Myself/>
    <TopContent/>
  </Element>
  )
}

export default TopContainer