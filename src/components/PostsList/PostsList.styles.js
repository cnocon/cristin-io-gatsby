import styled from "@emotion/styled"
import Theme from "../Theme/Theme"

export const Button = styled.a`
  text-align: center;
  color: ${Theme.colors.default.base};
  font-size: ${Theme.fonts.sizes.xs};
  line-height: 1.2;
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${Theme.fonts.sizes.default};
  outline: 0;
  transition: all .2s;

  &:hover {
    background-color: #fff;
    color: ${Theme.colors.default.base};
    border: 2px solid ${Theme.colors.grays.borderDark};
    cursor: pointer;
    transform: scale(1.05);
  }

  span {
    display: inline-block;
    line-height: inherit;
    height: unset;
    padding: 0;
    font-family: Roboto;
    line-height: 1.2;
    margin-right: 0;
    font-size: ${Theme.fonts.sizes.default};
    font-weight:900;
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: space-between;
  justify-content: start;

  .col-sm-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .nav-prev {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-next {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  h4 {
    color: ${Theme.colors.grays.textLight};
  }

  a {
    font-family: ${Theme.fonts.headings.family};
    font-weight: 300;
    color: ${Theme.colors.default.base};
    font-size: ${Theme.fonts.sizes.default};
    transform: scale(1.0);

    &:hover,
    &:active,
    &:focus {
      outline: 0;
      border: 0;
      transform: scale(1.0);
      text-decoration: underline;
    }
  }

  [class$='full-block'] {
      flex-basis: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .right-full-block {
      align-items: flex-start;
    }
  
  .left-full-block {
    align-items: flex-end;
  }
  
    .left-block,
    .right-block {
      display: flex;
      flex-basis: 50%;
      max-width: 50%;
    }
  
    .left-block {
      justify-content: flex-start;
    }
  
    .right-block {
      justify-content: flex-end;
    }
`
