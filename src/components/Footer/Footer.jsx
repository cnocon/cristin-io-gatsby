import React, { useEffect } from "react"
import * as Styled from "./Footer.styles"
import logo from "./buttercms-logo.png"
// import IconList from "../IconList/IconList"
// import { window, document } from 'browser-monads';
// import { document } from 'browser-monads';

const Footer = () => {
  // const [offset, setOffset] = useState(`2000px`);

  // const positionFooter = () => {
    // const footerHeight = document.querySelector('.footer').offsetHeight;
    // const contentHeight = document.querySelector('main').offsetHeight;
    // const topOffset = contentHeight < window.innerHeight ? (window.innerHeight + .25*footerHeight) : contentHeight + footerHeight;
    // setOffset(topOffset)
  // }

  useEffect(() => {
    // positionFooter();
  }, [])

  return(
    // <Styled.Footer className="footer" style={{top: offset}} offsetTop={offset}>
    <Styled.Footer className="footer">
      <Styled.FooterInner>
        <Styled.Row>
          <Styled.LeftBlock>
            <p css={Styled.paragraph}>

              <span css={Styled.date}>
                &copy;{` `}{new Date().getFullYear()}
              </span>
              {` `}<span css={Styled.date}>Cristin O'Connor</span>
            </p>
            <p css={Styled.smParagraph}>
              Built using{` `}
              <Styled.FooterLink
                href="https://www.gatsbyjs.org"
                rel="noreferrer"
                target="_blank">
                Gatsby
              </Styled.FooterLink>
              {` `}and{` `}
              <Styled.FooterLink
                href="https://emotion.sh/docs/introduction"
                rel="noreferrer"
                target="_blank">
                Emotion
              </Styled.FooterLink>
            </p>
          </Styled.LeftBlock>

          <Styled.RightBlock>
            <p css={Styled.flexParagraph}>
              <span css={Styled.date}>BLOG POWERED BY</span>
              <a href="https://buttercms.com" rel="noreferrer" target="_blank">
                <Styled.Image src={logo} alt="ButterCMS"/>
              </a>
            </p>
          </Styled.RightBlock>
        </Styled.Row>
      </Styled.FooterInner>
    </Styled.Footer>
  )
}

export default Footer
