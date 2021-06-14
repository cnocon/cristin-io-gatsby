import styled from '@emotion/styled'
import Theme from '../Theme/Theme';

export const Container = styled.div`
  .row {
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: center;
    display: flex;
  }

  h2 + .row {
    padding-top: 0;
  }

  .testo {
    border-radius: 5px;
    padding: 22.5px 27.5px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    /* background-color: ${Theme.colors.grays.border}; */
    position: relative;
    border-radius: 7.5px;
    background-color: ${Theme.colors.grays.border};

    .icon-wrapper {
      position: absolute;
      top: 20px;
      left: 20px;

      i {
        font-weight: 900;
        font-size: 22px;
        color: ${Theme.colors.grays.textLight};
      }
    }

    blockquote {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      padding-left: 22.5px;
      color: ${Theme.colors.default.darker};

      @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
      /* IE10+ specific styles go here */  
        display: block;
      }

      p {
        margin: 0 0 5px;
        padding: 0;
        font-size: 16px;
        font-family: ${Theme.fonts.headings.family};
        strong {
          font-weight: 700;
        }
      }

      cite {
        font-size: 14px;
        /* color: ${Theme.colors.grays.textDarkest}; */
      }
    }
  }
`

