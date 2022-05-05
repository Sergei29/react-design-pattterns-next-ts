import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import SplitScreen from "../src/containers/SplitScreen"
import SplitScreenV2 from "../src/containers/SplitScreenV2"
import PageContainer from "../src/containers/PageContainer"
import RegularList from "../src/components/RegularList"
import { products, usersOther } from "../src/mocks"
import { User, Product } from "../src/types"

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const HeadingLeft = styled.h3`
  background-color: red;
  color: wheat;
  padding: 16px 24px;
`

const HeadingRight = styled.h3`
  background-color: limegreen;
  color: #333;
  padding: 16px 24px;
`

const SmallPersolListItem = ({ name, age }: User): JSX.Element => (
  <p>
    Name: {name}, age: {age} years
  </p>
)
const LargePersolListItem = ({
  name,
  age,
  hairColor,
  hobbies,
}: User): JSX.Element => (
  <div>
    <h3>{name}</h3>
    <p>Age: {age} years</p>
    <p>Hair color: {hairColor}</p>
    <h3>Hobbies:</h3>
    <ul>
      {hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
      ))}
    </ul>
  </div>
)

const SmallProductListItem = ({ name, price }: Product): JSX.Element => (
  <p>{`${name} - $${price}`}</p>
)

const LargeProductListItem = ({
  name,
  price,
  description,
  rating,
}: Product): JSX.Element => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Price: $ {price}</p>
    <p>Current rating: {rating}</p>
  </div>
)

type Props = { name: string }
const LeftSide = () => <HeadingLeft>Left side</HeadingLeft>
const RightSide = () => <HeadingRight>Right side</HeadingRight>
const LeftSideNew = ({ name }: Props) => <HeadingLeft>{name}</HeadingLeft>
const RightSideNew = ({ name }: Props) => <HeadingRight>{name}</HeadingRight>

const Layout: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Patterns | Layout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <Container>
          <h1>Layout</h1>
          <SplitScreen left={LeftSide} right={RightSide} />
          <hr />
          <SplitScreenV2 leftWeight={1} rightWeight={3}>
            <LeftSideNew name="Johnny" />
            <RightSideNew name="Dow" />
          </SplitScreenV2>
          <hr />
          <h2>Layout List Components</h2>
          <RegularList list={usersOther} itemComponent={SmallPersolListItem} />
          <hr />
          <RegularList list={usersOther} itemComponent={LargePersolListItem} />
          <hr />
          <RegularList list={products} itemComponent={SmallProductListItem} />
          <hr />
          <RegularList list={products} itemComponent={LargeProductListItem} />
        </Container>
      </PageContainer>
    </>
  )
}

export default Layout