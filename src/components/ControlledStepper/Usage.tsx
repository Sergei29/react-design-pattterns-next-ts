import React, { useState } from "react"
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
} from "./components/Steps"
import ControlledStepper from "."

const Usage = () => {
  const [data, setData] = useState<Record<string, any>>({})
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const isDiscount = data.age && data.age > 99
  const maxIndex = isDiscount ? 4 : 3

  const onCompleted = (finalData: Record<string, any>) => {
    console.log("completed! >>: ", finalData)
  }

  const onNext = (stepData: Record<string, any>) => {
    setData((prev) => ({ ...prev, ...stepData }))

    setCurrentIndex((current) => {
      if (current === maxIndex) {
        const newData = { ...data, ...stepData }
        onCompleted(newData)
      }
      return current < maxIndex ? current + 1 : current
    })
  }

  return (
    <ControlledStepper onNext={onNext} currentIndex={currentIndex}>
      <StepOne />
      <StepTwo />
      {isDiscount && <StepThree />}
      <StepFour />
      <StepFive />
    </ControlledStepper>
  )
}

export default Usage
