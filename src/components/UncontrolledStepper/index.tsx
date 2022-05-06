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
      if (current + 1 === childrenList.length - 1) {
        onCompleted()
      }
      if (current + 1 < childrenList.length) {
        return current + 1
      } else {
        return current
      }
    })
  }

  const currentChild = childrenList[currentIndex]

  return (
    <>
      {React.isValidElement(currentChild)
        ? React.cloneElement(currentChild, { goToNext })
        : currentChild}
    </>
  )
}

export default UncontrolledStepper
