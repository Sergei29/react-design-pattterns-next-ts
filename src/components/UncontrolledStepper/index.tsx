import React, { useState } from "react"
export * from "./Steps"

type Props = {
  children: React.ReactNode
  onCompleted: () => void
}

const UncontrolledStepper = ({ children, onCompleted }: Props): JSX.Element => {
  const [data, setData] = useState<Record<string, any>>({})
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const childrenList = React.Children.toArray(children)
  const goToNext = () => {
    setCurrentIndex((current) => {
      if (current < childrenList.length - 1) {
        return current + 1
      } else {
        onCompleted()
        return current
      }
    })
  }

  const currentChild = childrenList[currentIndex]

  return (
    <div>
      {React.isValidElement(currentChild) &&
        React.cloneElement(currentChild, { goToNext })}
    </div>
  )
}

export default UncontrolledStepper
