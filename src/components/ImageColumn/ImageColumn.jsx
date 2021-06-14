import React from 'react'
import { Link } from 'gatsby'
import * as Styled from './ImageColumn.styles'

const ImageColumn = ({columnClasses, title, imageSrc, imageAlt, timestamp, date, slug, summary}) => {
  const dateEl = date ? <Styled.Date>{ date }</Styled.Date> : null
  const titleEl = slug ? <Link to={`/articles/${slug}`}>{ title }</Link> : title
  const truncatedSummary = `${summary.split('').slice(0,80).join('')}...`

  return (
    <div className={columnClasses} key={timestamp}>
      <Styled.ImageColumn>
        <Styled.ImageColumnHeading>
          <Styled.ImageContainer>
            <img src={imageSrc} alt={imageAlt} />
          </Styled.ImageContainer>
          { titleEl }
        </Styled.ImageColumnHeading>
        <p css={Styled.Paragraph}>{ dateEl }</p><br/>
        <p css={Styled.Paragraph}>
          { truncatedSummary }
        </p>
      </Styled.ImageColumn>
    </div>
  )
}

export default ImageColumn
