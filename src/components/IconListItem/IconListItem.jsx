import React from 'react'
import * as Styled from './IconListItem.styles'

const IconListItem = ({ icon, link, text, classes }) => {
  return(
    <Styled.Item>
      <Styled.ItemLink href={link} rel="noreferrer" target="_blank">
        <Styled.ItemIcon className={`${icon} ${classes}`}></Styled.ItemIcon>
        <Styled.ItemText>{text}</Styled.ItemText>
      </Styled.ItemLink>
    </Styled.Item>
  )
}

export default IconListItem