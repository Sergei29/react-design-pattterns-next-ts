type StepProps = { goToNext?: (...args: any[]) => void }

export const StepOne = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 1</h2>
    <p>Name</p>
    {goToNext && (
      <button onClick={() => goToNext({ name: "John Doe" })}>next</button>
    )}
  </>
)

export const StepTwo = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 2</h2>
    <p>Age</p>
    {goToNext && <button onClick={() => goToNext({ age: 120 })}>next</button>}
  </>
)

/**
 *
 * @description this step will be conditionally displayed
 * for senior visitors discount, others will skip to Step 4
 */
export const StepThree = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 3</h2>
    <p>Congratulations, you have a senour discount!</p>
    {goToNext && <button onClick={() => goToNext({})}>next</button>}
  </>
)

export const StepFour = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 4</h2>
    <p>Email</p>
    {goToNext && (
      <button onClick={() => goToNext({ email: "j.doe@gmail.com" })}>
        next
      </button>
    )}
  </>
)

export const StepFive = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 5</h2>
    <p>Phone</p>
    {goToNext && (
      <button onClick={() => goToNext({ phone: "07741118295" })}>next</button>
    )}
  </>
)
