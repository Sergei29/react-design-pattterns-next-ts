import React, { useState } from "react"
export * from "./Steps"

type Props = {
  children: React.ReactNode
  onCompleted: (...args: any[]) => void
}

const UncontrolledStepper = ({ children, onCompleted }: Props): JSX.Element => {
  const [data, setData] = useState<Record<string, any>>({})
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const childrenList = React.Children.toArray(children)

  const goToNext = (stepData: Record<string, any>) => {
    setData((prev) => ({ ...prev, ...stepData }))

    setCurrentIndex((current) => {
      const nextIndex = current + 1
      if (nextIndex === childrenList.length - 1) {
        onCompleted(data)
      }
      return nextIndex < childrenList.length ? nextIndex : current
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
