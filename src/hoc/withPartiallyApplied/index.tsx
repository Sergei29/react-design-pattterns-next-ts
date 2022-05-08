import React from "react"

const withPartiallyApplied = <T extends unknown>(
  Wrapped: React.FunctionComponent<T>,
  partialProps: Partial<T>
): React.FunctionComponent<Partial<T>> => {
  const NewComponent = (props: Partial<T>) => (
    <Wrapped {...partialProps} {...(props as T)} />
  )

  return NewComponent
}

export default withPartiallyApplied
