import React from "react"

const isObject = (maybeObject: unknown) =>
  typeof maybeObject === "object" && maybeObject !== null

type Props = {
  data: Record<string, any>
}

const RecursiveComponent = ({ data }: Props): JSX.Element => {
  if (!isObject(data)) {
    return <li>{data}</li>
  }
  const pairs = Object.entries(data)
  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}

export default RecursiveComponent
