import React, { useState } from "react"
import styled from "styled-components"

const Form = styled.form`
  width: 30vw;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  & > input {
    display: inline-block;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px;
  }
`

type Props = {
  onSubmitSuccess: (val: number) => void
}

const SingleInputForm = ({ onSubmitSuccess }: Props) => {
  const [value, setValue] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!value) return
    if (isNaN(parseInt(value, 10))) return
    onSubmitSuccess(Math.abs(parseInt(value, 10)))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input type="number" name="id" onChange={handleChange} value={value} />
    </Form>
  )
}

export default SingleInputForm
