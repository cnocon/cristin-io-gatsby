import React from 'react'
import { Link } from 'gatsby'
import * as Styled from './Breadcrumbs.styles'

const Breadcrumbs = ({ crumbs }) => {

  return (
    <ul css={Styled.CrumbsContainer}>
      { crumbs.map(({ path, title }, index) => {
        if (path) {
          return (
            <li key={index} css={Styled.CrumbItem}>
              <Link to={path} css={Styled.CrumbLink}>{title}</Link>&nbsp;/&nbsp;
            </li>
          )
        } else {
          return (
            <li key={index} css={Styled.CrumbItem}>{title}</li>
          )
        }
      })
    }
  </ul>
  )
}


export default Breadcrumbs
