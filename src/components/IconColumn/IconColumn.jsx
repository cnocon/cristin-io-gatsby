import React from 'react'
import { IconColumnDiv } from './IconColumn.styles'
import ReactHtmlParser from 'react-html-parser'

const IconColumn = ({ icon, title, text, columnClasses, classes }) => {
  return (
    <div className={`${columnClasses}`}>
      <IconColumnDiv className='IconColumn'>
        <i className={`${icon} ${classes}`}></i>
        <h4>
          <span>{ title }</span>
        </h4>
        <p>{ ReactHtmlParser(text) }</p>
      </IconColumnDiv>
    </div>
  )
}

export default IconColumn
