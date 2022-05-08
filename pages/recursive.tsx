import React, { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import axios from "axios"
import PageContainer from "../src/containers/PageContainer"
import RecursiveComponent from "../src/components/RecursiveComponent"
import { nestedObject } from "../src/mocks"

const Recursive: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Patterns | Recursive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <h1>Recursive Component</h1>
        <RecursiveComponent data={nestedObject} />
      </PageContainer>
    </>
  )
}

export default Recursive
