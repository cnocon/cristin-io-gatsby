import React from 'react'
import * as Styled from './SectionTitle.styles'

const SectionTitle = ({ text, icon }) => {
  return (
    <h2 css={Styled.SectionTitle}>
      <span>
        <i className={`fa ${icon}`}></i>
        { text.toUpperCase() }
      </span>
    </h2>
  )
}

export default SectionTitle
