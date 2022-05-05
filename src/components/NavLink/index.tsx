import React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

const Anchor = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.active ? "orange" : "#333")};
  font-weight: 600;
  cursor: pointer;
`
type Props = {
  children: React.ReactNode
} & LinkProps

const NavLink = ({ children, ...restLinkProps }: Props) => {
  const { pathname } = useRouter()
  const isActive = pathname === restLinkProps.href
  return (
    <Link {...restLinkProps}>
      <Anchor active={isActive}>{children}</Anchor>
    </Link>
  )
}

export default NavLink
