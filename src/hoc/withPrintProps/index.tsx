import React from "react"

const withPrintProps = <M extends {}>(
  WrappedComponent: React.FunctionComponent<M>
) => {
  const NewComponent = (props: M) => {
    console.log(
      `Component ${WrappedComponent.displayName || ""} props: `,
      props
    )
    return <WrappedComponent {...(props as M)} />
  }

  return NewComponent
}

export default withPrintProps
