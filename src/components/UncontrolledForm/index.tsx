import React, { useRef } from "react"

type Props = {
  onSubmit: (...args: any[]) => void
}
const UncontrolledForm = ({ onSubmit }: Props): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const hairColorRef = useRef<HTMLInputElement>(null)

  const resetFields = () => {
    nameRef.current!.value = ""
    ageRef.current!.value = ""
    hairColorRef.current!.value = ""
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!nameRef.current || !ageRef.current || !hairColorRef.current) {
      return
    }
    const { value: name } = nameRef.current
    const { value: age } = ageRef.current
    const { value: hairColor } = hairColorRef.current
    if (!name || !age || !hairColor) {
      return
    }

    onSubmit({ name, age: parseInt(age, 10), hairColor })
    resetFields()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="name" placeholder="Name" ref={nameRef} />
      </div>
      <div>
        <input type="number" name="age" placeholder="Age" ref={ageRef} />
      </div>
      <div>
        <input
          type="text"
          name="hairColor"
          placeholder="Hair color"
          ref={hairColorRef}
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default UncontrolledForm
