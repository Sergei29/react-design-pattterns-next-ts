import React from "react"
import styled from "styled-components"
import Navigation from "../../components/Navigation"

const Container = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`
type Props = {
  children: React.ReactNode
}

const PageContainer = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Container>
        <Navigation />
        {children}
      </Container>
      <Footer>footer</Footer>
    </>
  )
}

export default PageContainer
