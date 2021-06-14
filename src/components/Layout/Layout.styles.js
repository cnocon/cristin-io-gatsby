// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Container = styled.div(
  ({theme}) => ({
    position: `relative`,
    margin: `0 auto`,
    width: `${theme.layout.widths.lg}`,
    padding: `0`,
    fontFamily: `${theme.fonts.body.family}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: '100%'
  })
)

export const Main = styled.main(
  ({theme}) => ({
    maxWidth: `${theme.layout.widths.lgMax}`,
    margin: '0 auto',
    height: '100%',
    width: '100%'
  })
)

export const WrapperOuter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100%;
`
