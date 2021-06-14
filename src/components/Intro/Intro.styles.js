import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const RotateWordsWrapper = styled.div`
  text-align: center;
  padding: 0;
  font-family: ${Theme.fonts.headings.family};

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    padding: 0 0 3rem;
  }
 `

export const RotateWords = styled.h2`
  &.rotate-header {
    font-weight: 300;
    font-size: ${Theme.fonts.sizes.lg};
    line-height: 1.4;
    font-family: ${Theme.fonts.headings.family};
    text-transform: none;
    color: #345;
    text-align: center;
    font-weight: 300;
    margin-bottom: 0;

    @media all and (max-width: ${Theme.breakpoints.max.sm}) {
      font-size: 2rem;
      line-height: 1.6;
    }

    strong {
      letter-spacing: -1px;
      font-weight: 800 !important;
    }

    .rotate-words {
      font-size: inherit;
      min-height: 2.8rem;
      font-family: ${Theme.fonts.headings.family};
      display: inline-block;
      min-width: 18rem;
      text-align: left;

      @media all and (max-width: ${Theme.breakpoints.max.sm}) {
        min-height: 2.25rem;
        min-width: 16rem;
      }

      @media all and (min-width: ${Theme.breakpoints.min.lg}) {
        min-width: 21rem;
      }

      span {
        font-size: inherit;
        line-height: 1.4;
        position: absolute;
        opacity: 0;
        letter-spacing: -1px;
        font-family: ${Theme.fonts.headings.family};
        font-weight: 300;

        @media all and (min-width: ${Theme.breakpoints.min.sm}) {
          font-size: inherit;
        }

        &:first-of-type {
          opacity: 1;
        }

        &.rotate-in {
          font-size:inherit;
          line-height: 1.4;
          animation: rotateInWord .5s linear forwards;
          -webkit-animation: rotateInWord .5s linear forwards;
          font-weight: 800;

          @media all and (min-width: ${Theme.breakpoints.min.sm}) {
            font-size: inherit;
          }
        }

        &.rotate-out {
          font-size: inherit;
          animation: rotateOutWord .5s linear forwards;
          -webkit-animation: rotateOutWord .5s linear forwards;
          position: absolute;
          opacity: 0;
          font-weight: 800;
          letter-spacing: -1px;
          line-height: inherit;

          @media all and (min-width: ${Theme.breakpoints.min.sm}) {
            font-size: inherit;
          }
        }
      }

      @-webkit-keyframes rotateInWord {
          0% { opacity: 0; -webkit-transform: translateY(-39px); }
        100% { opacity: 1; -webkit-transform: translateY(0px); }
      }
      @-webkit-keyframes rotateOutWord {
          0% { opacity: 1; -webkit-transform: translateY(0px); }
        100% { opacity: 0; -webkit-transform: translateY(39px); }
      }
      @keyframes rotateInWord {
          0% { opacity: 0; transform: translateY(-39px); }
        100% { opacity: 1; transform: translateY(0px); }
      }
      @keyframes rotateOutWord {
          0% { opacity: 1; transform: translateY(0px); }
        100% { opacity: 0; transform: translateY(39px); }
      }
    }
  }
`
