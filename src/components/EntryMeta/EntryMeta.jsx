import React from 'react'
import { Link } from 'gatsby'
import * as Styled from './EntryMeta.styles'

const EntryMeta = ({ categories, published, classes })  => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  const date = new Date(published).toLocaleDateString(undefined, options)

  const links = categories.map(c => {
    return <Link to={`/articles/${c.slug}/page-1`} key={c.slug}>{c.name}</Link>
  });

  return (
    <div css={Styled.EntryMeta} className={classes}>
      <span className="posted-in">Posted in {links}</span>
      <span className="posted-on">on<time className="entry-date" dateTime={published}>{date}</time></span>
    </div>
  )
}

export default EntryMeta
