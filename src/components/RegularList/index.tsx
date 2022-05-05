import React from "react"
import styled from "styled-components"

const ListContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
  border-radius: 4px;
  color: #333;
  & > div {
    background-color: #eaeaea;
    flex: 1;
    padding: 8px 16px;
  }
  & > p {
    background-color: #eaea;
    flex: 1;
    padding: 16px;
  }
`

type Props<T> = {
  list: T[]
  itemComponent: React.FunctionComponent<T>
}

const RegularList = ({
  list,
  itemComponent: ItemComponent,
}: Props<any>): JSX.Element => {
  return (
    <ListContainer>
      {list.map((item) => (
        <ItemComponent key={item.name} {...item} />
      ))}
    </ListContainer>
  )
}

export default RegularList
