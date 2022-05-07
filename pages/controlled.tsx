import React, { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import PageContainer from "../src/containers/PageContainer"
import UncontrolledForm from "../src/components/UncontrolledForm"
import ControlledForm from "../src/components/ControlledForm"
import Divider from "../src/components/Divider"
import UncontrolledStepper, {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
} from "../src/components/UncontrolledStepper"

const ControlledComponents: NextPage = () => {
  const onSubmit = (data: Record<string, any>) => {
    console.log({ data })
  }

  const onCompleted = (data: Record<string, any>) => {
    console.log("completed! >>: ", data)
  }

  return (
    <>
      <Head>
        <title>React Patterns | Controlled Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <h1>Controlled vs Uncontrolled Components</h1>
        <Divider />
        <h2>Uncontrolled Form</h2>
        <UncontrolledForm onSubmit={onSubmit} />
        <Divider />
        <h2>Controlled Form</h2>
        <ControlledForm onSubmit={onSubmit} />
        <Divider />
        <h2>Uncontrolled stepper</h2>
        <UncontrolledStepper onCompleted={onCompleted}>
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <StepFive />
        </UncontrolledStepper>
      </PageContainer>
    </>
  )
}

export default ControlledComponents
