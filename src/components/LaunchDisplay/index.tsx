import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { SpacexData } from "../../types"

const Container = styled.div`
  width: 30vw;
  min-height: 50vw;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`

type Props = {
  launch: SpacexData
}

const LaunchDisplay = ({ launch }: Props): JSX.Element => {
  const { name, date_utc, links } = launch
  return (
    <Container>
      <h3>{name}</h3>
      <p>{new Date(date_utc).toLocaleDateString()}</p>
      {links?.patch?.large && (
        <Image
          src={links.patch.large}
          alt="launch patch"
          width={500}
          height={500}
        />
      )}
    </Container>
  )
}

export default LaunchDisplay
