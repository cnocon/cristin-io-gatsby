import React from "react"
import ReactHtmlParser from 'react-html-parser';
import * as Styled from './PostPreview.styles'
import EntryMeta from "../EntryMeta/EntryMeta"

const PostPreview = ({ post }) => {
  
  return (
    <Styled.PostPreview>
      <Styled.Header>
        <Styled.Title>
          <Styled.TitleLink
            to={`/articles/${post.slug}`}
            rel="bookmark"
            className={`rainbow-border`}>
            {post.title}
          </Styled.TitleLink>
          
        </Styled.Title>
        <EntryMeta
          published={post.published}
          categories={post.categories}
          className="preview-entry-meta"
        />
      </Styled.Header>

      <div className="entry-content">
        <p>
          {ReactHtmlParser(post.summary)}
        </p>
      </div>

      <Styled.Button to={`/articles/${post.slug}`}>
        Read Full Article <i className="far fa-long-arrow-right"></i>
      </Styled.Button>
    </Styled.PostPreview>
  )
}

export default PostPreview;
