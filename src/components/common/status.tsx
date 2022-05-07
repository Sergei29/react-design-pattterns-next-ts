import styled from "styled-components"

const Centered = styled.p`
  justify-content: center;
  font-weight: 600;
`
export const Loader = () => <Centered>Loading...</Centered>
export const Error = ({ message }: { message: string }) => (
  <Centered>{message}</Centered>
)
export const NoData = () => <Centered>No data</Centered>
