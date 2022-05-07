import React from "react"

type Props = {
  currentIndex: number
  children: React.ReactNode
  onNext: (...args: any[]) => void
}

const ControlledStepper = ({
  currentIndex,
  children,
  onNext,
}: Props): JSX.Element => {
  const childrenList = React.Children.toArray(children)

  const goToNext = (stepData: Record<string, any>) => {
    onNext(stepData)
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

export default ControlledStepper
