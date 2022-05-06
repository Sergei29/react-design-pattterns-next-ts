import React, { useState } from "react"
import styled from "styled-components"
import { INIT_STATE, StateType } from "./helpers"

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px auto;
`

type Props = {
  onSubmit: (...args: any[]) => void
}

const ControlledForm = ({ onSubmit }: Props): JSX.Element => {
  const [state, setState] = useState<StateType>(INIT_STATE)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setState((prev) => {
      return {
        ...prev,
        [name]: name === "age" ? Math.abs(parseInt(value, 10)) : value,
      }
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(state)
    setState(INIT_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state?.name || ""}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={state?.age || ""}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <input
          type="text"
          name="hairColor"
          placeholder="Hair color"
          value={state?.hairColor || ""}
          onChange={handleChange}
        />
      </FormControl>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default ControlledForm
