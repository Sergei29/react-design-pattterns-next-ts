type StepProps = { goToNext?: (...args: any[]) => void }

export const StepOne = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 1</h2>
    {goToNext && (
      <button onClick={() => goToNext({ step_1: "Step One data" })}>
        next
      </button>
    )}
  </>
)

export const StepTwo = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 2</h2>
    {goToNext && (
      <button onClick={() => goToNext({ step_2: "Step Two data" })}>
        next
      </button>
    )}
  </>
)

export const StepThree = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 3</h2>
    {goToNext && (
      <button onClick={() => goToNext({ step_3: "Step Three data" })}>
        next
      </button>
    )}
  </>
)

export const StepFour = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 4</h2>
    {goToNext && (
      <button onClick={() => goToNext({ step_4: "Step Four data" })}>
        next
      </button>
    )}
  </>
)

export const StepFive = ({ goToNext }: StepProps) => (
  <>
    <h2>Step 5</h2>
    {goToNext && (
      <button onClick={() => goToNext({ step_5: "Step Five data" })}>
        next
      </button>
    )}
  </>
)
