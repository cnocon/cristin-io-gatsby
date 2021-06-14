import React from "react"
import { Button } from '../PostPreview/PostPreview.styles'
import * as Styled from './NotFound.styles'

const NotFound = () => {
  return (
    <div style={{textAlign: 'center', padding: '4.5rem 0'}}>
      <h1 css={Styled.Heading}>404</h1>
      <p style={{fontSize: '1.6rem', fontStyle: 'italic'}}>The page you are looking for was not found!</p>
      <Button to="/">
      <i className="far fa-long-arrow-left"></i>{`   `}Homepage
      </Button>
    </div>
  )
}

export default NotFound
