import React from 'react'
import IconListItem from '../IconListItem/IconListItem'
import * as Styled from './IconList.styles'

const IconList = ({ listItems, classes }) => {
  const mappedItems = listItems.map(item => <IconListItem key={item.link} {...item} />)
  
  return <Styled.IconList className={classes}>{mappedItems}</Styled.IconList>
}

export default IconList