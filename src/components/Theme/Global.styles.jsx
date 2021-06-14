import { css } from '@emotion/core'
import Theme from './Theme'

export default {styles: css`
  *,
  *:after,
  *::before {
    -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
  }


  html {
    font-size: 10px;
    overflow-x: hidden;
    max-width: 100%;
    height: 100vh;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    font-size: ${Theme.fonts.sizes.default};
    box-sizing: inherit;
    position: relative; 
    width: 100%; 
    height: 100%;
    color: ${Theme.colors.default.base};
    max-width: 100%;
    margin: 0;
    overflow-x: hidden;
    font-family: ${Theme.fonts.body.family};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;

    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
      /* IE10+ specific styles go here */  
      display: block;
    }
  }

  input,
  textarea,
  select,
  button {
    font-family: ${Theme.fonts.accent.family};
  }

  a {
    text-decoration: none; outline: none;
  }
  hr {
    padding: .6em 0 1em 0; 
    margin-bottom: 3em;
    outline: 0;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #eee;
  }
  /* tables  */
  table {
    font-size: .9em;
    margin-bottom: 3em; 
    text-align: center;
  }
  tr th {
    padding: .8em 2em .8em 2em; 
    font-weight: 800; 
    border-bottom: 2px solid #DDE4E6; 
    text-transform: uppercase;
  }
  tr td {
    color: #6A7686; padding: .8em 1em .6em 1em; border-bottom: 1px solid #eee;
  }
  tfoot tr td {
    border-bottom: 0
  }
  tr:nth-of-type(odd) td {
    background: #FAFCFD;
  }
  ol,
  ul {
    margin: .2em 0 1em 0; 
    line-height: ${Theme.fonts.sizes.lineHeights.md};
  }
  ul {
    list-style: disc;
  }
  ul > ul { list-style: disc; }

  blockquote:before {
    font-family: FontAwesome;
    font-weight: normal;
    text-align: left;
    font-style: normal;
    display: inline-block;
    text-decoration: inherit;
  }

  img {
    max-width: 100%; 
    height: auto;
  }

  main {
    height: 100%;
  }

  .wrapper-outer {
    padding: ${Theme.spacing.xs} ${Theme.spacing.default} ${Theme.spacing.xl};
    font-size: 1.4rem;
  }


  pre.prettyprint {
    padding: 1rem 1.5rem !important;
    border-radius: 0 !important;
    background-color: #282b36 !important;
    margin: 1rem 0 !important;
    border-radius: 4px !important;
    border: 1px solid transparent;
    padding: 2rem 3rem !important;
    width: 100% !important;
  }

  pre.prettyprint,
  pre.prettyprint span {
    font-family: Menlo,Monaco,Consolas,"Courier New",monospace !important;
    font-weight: 400 !important;
    font-size: 1.6rem;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
  }

    /* PULLQUOTES */
  .pullquote {
    padding: 1rem 2rem;
    border: 4px solid ${Theme.colors.grays.border};
    border-radius: 5px;
    margin-left: 0;
    margin-right: 0;
    text-align: center
  }

  .pullquote.alignleft,
  .pullquote.alignright {
    max-width: 320px;
    float: right;
    margin: 10px 0 ${Theme.spacing.md} ${Theme.spacing.md};

    @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
      max-width: 100%;
      margin: 0 0 20px;
    }
  }

  .pullquote.alignleft {
    float: left;
    margin: 10px ${Theme.spacing.md} ${Theme.spacing.md} 0;
  }

  .pullquote p {
    font-size: 28px;
    line-height: 1.6em;
    font-family: ${Theme.fonts.body.family};
    font-style: italic;
    font-weight: 400;
    margin: 10px 0;
  }

  .entry-content .pullquote p {
    margin: 10px 0;
    font-size: 16px;
    line-height: 1.8em;
    font-family: ${Theme.fonts.headings.family};
    font-style: italic;
    font-weight: 300;
    margin: 10px 0;
    color: ${Theme.colors.grays.textDarkest};
  }
  
  .pullquote i {
    margin-top: 10px;
    border-radius: 50%;
    box-shadow: 0 1.75px 1px ${Theme.colors.accents.green},       
                -1.75px 0 1px ${Theme.colors.accents.yellow},
                1.75px 0 1px ${Theme.colors.accents.text.purple},
                0 -1.75px 1px ${Theme.colors.accents.text.red};
    border-color: transparent;
  }

  .entry-content .pullquote i {
    margin-top: 10px;
    border-radius: 50%;
    box-shadow: 0 2.25px 2px ${Theme.colors.accents.green},       
              -2.25px 0 2px ${Theme.colors.accents.yellow},
              2.25px 0 2px ${Theme.colors.accents.text.purple},
              0 -2.25px 2px ${Theme.colors.accents.text.red};
    border-color: transparent;
    font-size: 28px;
    font-weight: 200;
    color: ${Theme.colors.grays.borderDark} !important;
  }

  .pullquote cite,
  .pullquote footer {
    position: relative
  }

  .pullquote cite {
    color: inherit
  }

  .border-radius {
    border-radius: 50%;
    line-height: 1;
  }

  .rainbow-background {
    background-image: linear-gradient(140deg, 
    ${Theme.colors.accents.yellow} 0%,
    ${Theme.colors.accents.background.green} 35%, 
    ${Theme.colors.accents.blue} 55%, 
    ${Theme.colors.accents.background.purple} 75%,
    ${Theme.colors.accents.red} 95%,
    ${Theme.colors.accents.red} 100%);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }


  .rainbow-background-skewed {
    background-image: linear-gradient(25deg, 
    ${Theme.colors.accents.background.yellow} 0%,
    ${Theme.colors.accents.green} 35%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.purple} 75%,
    ${Theme.colors.accents.red} 100%);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }
  .rainbow-background-vivid {
    background-image: linear-gradient(90deg, 
    ${Theme.colors.accents.green} 0, 
    ${Theme.colors.accents.blue} 25%, 
    ${Theme.colors.accents.purple} 50%,
    ${Theme.colors.accents.red} 70%,
    ${Theme.colors.accents.yellow} 85%,
    ${Theme.colors.accents.yellow} 100%);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }

  .rainbow-border,
  .rainbow-border-sm,
  .rainbow-border-left {
    background-image: linear-gradient(205deg, 
    ${Theme.colors.accents.yellow} 10%,
    ${Theme.colors.accents.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%);
    background-size: 100% 2px;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }

  .rainbow-border-sm { background-size: 100% 1.5px; }

  .rainbow-border-left {
    background-position: left;
    background-size: 3px 85%;
  }

  a.rainbow-border:hover,
  a.rainbow-border-sm:hover,
  a.rainbow-border-left:hover {
    background-image: linear-gradient(90deg, 
      ${Theme.colors.accents.vivid.red} 5%,
      ${Theme.colors.accents.vivid.yellow} 20%, 
      ${Theme.colors.accents.vivid.green} 40%, 
      ${Theme.colors.accents.vivid.green} 50%, 
      ${Theme.colors.accents.text.blue} 65%,
      ${Theme.colors.accents.vivid.blue} 80%,
      ${Theme.colors.accents.vivid.purple} 100%);
  }

  .rainbow-border-top {
    background-image: linear-gradient(90deg, 
    ${Theme.colors.accents.yellow} 10%,
    ${Theme.colors.accents.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%);
    background-size: 100% 3px;
    background-position: center top;
    background-repeat: no-repeat;
  }

  .rainbow-box-shadow-rounded { 
    border-radius: 50%;
    box-shadow: 0 1.75px 1px ${Theme.colors.accents.green},       
                -1.75px 0 1px ${Theme.colors.accents.yellow},
                1.75px 0 1px ${Theme.colors.accents.text.purple},
                0 -1.75px 1px ${Theme.colors.accents.text.red};
  }
    
  .rainbow-box-shadow-rounded-thick {
    border-radius: 50%;
    box-shadow: 0 3px 2px ${Theme.colors.accents.green},       
              -3px 0 2px ${Theme.colors.accents.yellow},
              3px 0 2px ${Theme.colors.accents.text.purple},
              0 -3px 2px ${Theme.colors.accents.text.red};
  }

  .rainbow-box-shadow { 
    border-radius: 4px;
    box-shadow: 0 1.75px 1px ${Theme.colors.accents.green},       
                -1.75px 0 1px ${Theme.colors.accents.yellow},
                1.75px 0 1px ${Theme.colors.accents.text.purple},
                0 -1.75px 1px ${Theme.colors.accents.text.red};
  }
    
  .rainbow-box-shadow-thick {
    box-shadow: inset 0 2px 1px ${Theme.colors.accents.green},       
    inset -2px 0 1px ${Theme.colors.accents.vivid.yellow},
    inset 2px 0 1px ${Theme.colors.accents.vivid.purple},
    inset 0 -1.5px 1px ${Theme.colors.accents.vivid.red};
  }

  .rainbow-icon {    
    position: relative;
    border-radius: 50%;
    display: inline-block;
    z-index: 1000;
    background-color: none;
  }
  .rainbow-icon:before {
    font-weight: 100;
    position: absolute;
    width: 66px;
    height: 66px;
    z-index: 3;
    left: 50%;
    border-radius: 50%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transform: translate(-50%, 0);
    content: '';
    background-color: rgb(245,237,0);
    background-image: linear-gradient(90deg, 
                                    ${Theme.colors.accents.text.yellow} 10.5%,
                                    ${Theme.colors.accents.text.green} 39.5%, 
                                    ${Theme.colors.accents.text.blue} 50%, 
                                    ${Theme.colors.accents.text.purple} 67.5%,
                                    ${Theme.colors.accents.text.red} 82.5%,
                                    ${Theme.colors.accents.text.yellow} 95%);
    }

    .rainbow-icon-narrow {
      display: inline-block;
    }

    .rainbow-icon-narrow::before {
      opacity: 1;
      z-index: 0;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(90deg,
                ${Theme.colors.accents.red} 0%,                   
                ${Theme.colors.accents.yellow} 20%,
                ${Theme.colors.accents.text.green} 50%, 
                ${Theme.colors.accents.text.blue} 60%, 
                ${Theme.colors.accents.text.purple} 87%);
    }
    
  .rainbow-text {
    z-index: 0;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg,
                      ${Theme.colors.accents.text.yellow} 0%,
                      ${Theme.colors.accents.text.green} 10%, 
                      ${Theme.colors.accents.text.blue} 30%, 
                      ${Theme.colors.accents.text.purple} 50%,
                      ${Theme.colors.accents.text.red} 65%,
                      ${Theme.colors.accents.text.yellow} 80%);
  }

  .rainbow-text-narrow {
    z-index: 0;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg,
                      ${Theme.colors.accents.text.yellow} 10%,
                      ${Theme.colors.accents.text.green} 20%, 
                      ${Theme.colors.accents.text.blue} 40%, 
                      ${Theme.colors.accents.text.purple} 50%,
                      ${Theme.colors.accents.text.red} 60%,
                      ${Theme.colors.accents.text.yellow} 70%);
  }
`}
