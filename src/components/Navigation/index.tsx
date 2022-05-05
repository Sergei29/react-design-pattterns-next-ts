import React from "react"
import styled from "styled-components"
import { navLinks } from "../../constants"
import NavLink from "../NavLink"

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const Navigation = () => {
  return (
    <NavBar>
      {navLinks.map(({ id, name, path }) => (
        <NavLink key={id} href={path}>
          {name}
        </NavLink>
      ))}
    </NavBar>
  )
}

export default Navigation
